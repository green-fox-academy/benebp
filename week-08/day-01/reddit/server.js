const mysql = require('mysql');
const express = require('express');
const app = express();
app.use(express.json());

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'reddit',
});

conn.connect((err) => {
  if (err) {
    console.error('Cannot connect to the database', err);
    return;
  }
  console.log('Connection established');
});

app.get('/hello', (req, res) => {
  res.send('hello maunika');
});

app.get('/posts', (req, res) => {
  let sql = `SELECT * FROM posts`;
  conn.query(sql, (err, rows) => {
    if (err) {
      console.error(`Cannot retrieve data: ${err.toString()}`);
      res.sendStatus(500);
      return null;
    }
    return res.status(200).json(rows);
  });
});

app.listen(3000);