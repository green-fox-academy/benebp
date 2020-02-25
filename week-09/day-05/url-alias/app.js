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
      //404 status if the alias not exists, but how??? another else if? nem lehet ures arraykent venni
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

app.post('/api/links', (req, res) => {
  const newUrl = req.body.url;
  const newAlias = req.body.alias;
  const aliasCheckSQL = 'SELECT * FROM links WHERE alias = ?;';
  conn.query(aliasCheckSQL, [newAlias], (err, result) => {
    console.log(JSON.stringify(result));
    if (err) {
      res.send({ error: 'DB ERROR' });
      //kurva anyjat hogz miert nem ismeri fel h ures
    } else if (JSON.stringify(result) != []) {
      res.sendStatus(400)
    } else {
      let newSecretCode = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
      const insertNewLineSQL = 'INSERT INTO links (url, alias, secretcode) VALUES (?, ?, ?);';
      conn.query(insertNewLineSQL, [newUrl, newAlias, newSecretCode], (err) => {
        if (err) {
          res.send({ error: 'DB ERROR' });
        } else {
          //majd a krealt ujat kell visszaadni
          res.send('ok');
        };
      });
    };
  });
});

// app.delete('/api/links/:id', (req, res) => {
//   const specificId = req.params.id;
//   const specificSecretCode = req.body.secretcode;

// });

app.listen(3000);