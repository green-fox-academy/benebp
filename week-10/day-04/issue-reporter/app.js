'use strict';

const mysql = require('mysql');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('./static'));

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'issue_reporter',
});

conn.connect((err) => {
  if (err) {
    console.error('Cannot connect to the database', err);
    return;
  }
  console.log('Connection established');
});

app.get('/i', (req, res) => {
  res.sendFile(__dirname + '/static/index.html');
});

app.get('/t', (req, res) => {
  res.sendFile(__dirname + '/static/tickets.html');
});

app.get('/users', (req, res) => {
  const getUsersSQL = 'SELECT reporter FROM issues;';
  conn.query(getUsersSQL, (err, result) => {
    if (err) {
      res.send({ message: 'DB ERROR' });
    } else {
      res.send({ users: result });
    };
  });
});

app.get('/tickets', (req, res) => {
  const getTicketsSQL = 'SELECT * FROM issues';
  const manufacturer = req.query.manufacturer;
  const reporter = req.query.reporter;
  if (!manufacturer && !reporter) {
    conn.query(getTicketsSQL + ';', (err, result) => {
      if (err) {
        res.send({ message: 'DB ERROR' });
      } else {
        res.send({ tickets: result });
      };
    });
  } else if (!manufacturer) {
    conn.query(getTicketsSQL + ' WHERE reporter = ?;', [reporter], (err, result) => {
      if (err) {
        res.send({ message: 'DB ERROR' });
      } else {
        res.send({ tickets: result });
      };
    });
  } else if (!reporter) {
    conn.query(getTicketsSQL + ' WHERE manufacturer = ?;', [manufacturer], (err, result) => {
      if (err) {
        res.send({ message: 'DB ERROR' });
      } else {
        res.send({ tickets: result });
      };
    });
  } else {
    conn.query(getTicketsSQL + ' WHERE manufacturer = ? AND reporter = ?;', [manufacturer, reporter], (err, result) => {
      if (err) {
        res.send({ message: 'DB ERROR' });
      } else {
        res.send({ tickets: result });
      };
    });
  };
});

app.post('/tickets', (req, res) => {
  const {reporter, manufacturer, serialnumber, description, timeofreport} = req.body;
  const newTicketSQL = 'INSERT INTO issues (reporter, manufacturer, serialnumber, description, timeofreport) VALUES (?, ?, ?, ?, ?);'
  conn.query(newTicketSQL, [reporter, manufacturer, serialnumber, description, timeofreport], (err, result) => {
    if (err) {
      res.status(500).send({ message: 'DB ERROR' });
    } else {
      const createdTicketSQL = 'SELECT * FROM orders WHERE id = ?;';
      conn.query(createdTicketSQL, [result.insertId], (err, result) => {
        if (err) {
          res.send({ message: 'DB ERROR' });
        } else {
          res.send(result[0]);
        };
      });
    };
  });
});

app.delete('/tickets/:id', (req, res) => {
  const id = req.params.id;
  const deleteSQL = 'DELETE FROM issues WHERE id = ?;';
  conn.query(deleteSQL, [id], (err) => {
    if (err) {
      res.status(500).send({ message: 'DB ERROR' });
    } else {
      res.sendStatus(204);
    };
  });
});

app.listen(3000);