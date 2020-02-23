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
  database: 'urlalias',
});

conn.connect((err) => {
  if (err) {
    console.error('Cannot connect to the database', err);
    return;
  }
  console.log('Connection established');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/index.html');
});

app.get('/api/links', (req, res) => {
  const getLinksSQL = 'SELECT id, url, alias, hitcount FROM links;';
  conn.query(getLinksSQL, (err, result) => {
    if (err) {
      res.send({ error: 'DB ERROR' });
    } else {
      res.json(result);
    };
  });
});

app.get('/a/:alias', (req, res) => {
  const specificAlias = req.params.alias;
  const getSpecificlinkSQL = 'SELECT * FROM links WHERE alias = ?;';
  conn.query(getSpecificlinkSQL, [specificAlias], (err, result) => {
    const urlOfSpecificAlias = result[0].url;
    if (err) {
      res.send({ error: 'DB ERROR' });
      //404 status if the alias not exists, but how??? another else if?
    } else {
      const incrementHitcountSQL = `UPDATE links SET hitcount = hitcount + 1 WHERE alias = ?;`;
      conn.query(incrementHitcountSQL, [specificAlias], (err) => {
        if (err) {
          res.send({ error: 'DB ERROR' });
        } else {
          res.redirect(urlOfSpecificAlias);
        };
      });
    };
  });
});

// app.post('/api/links', (req, res) => {

// });

// app.delete('/api/links/:id', (req, res) => {

// });

app.listen(3000);