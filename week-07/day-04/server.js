const mysql = require('mysql');
const express = require('express');
const app = express();
app.use(express.json());

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'bookstore',
});

conn.connect((err) => {
  if (err) {
    console.error('Cannot connect to the database', err);
    return;
  }
  console.log('Connection established');
});

app.get('/', (req, res) => {
  conn.query('SELECT book_name FROM book_mast;', (err, rows) => {
    if (err) {
      console.error(`Cannot retrieve data: ${err.toString()}`);
      res.sendStatus(500);
      return null;
    }
    return res.send(rows);
  });
});

conn.query('SELECT * FROM author;', (err, rows) => {
  console.log('Data received from Db:\n');
  console.log(rows);
});

app.listen(3000);