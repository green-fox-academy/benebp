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

function makeJSON(rows) {
  let json = { posts: [] };
  json.posts = [...rows];
  return json
}

app.get('/posts', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  let sql = `SELECT * FROM posts`;
  conn.query(sql, (err, rows) => {
    if (err) {
      console.error(`Cannot retrieve data: ${err.toString()}`);
      res.sendStatus(500);
      return null;
    }
    return res.status(200).json({posts: rows});
  });
});

app.post('/posts', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const {title, url, timestamp} = req.body
  // let title = req.body.title;
  // let url = req.body.url;
  // let timestamp = req.body.timestamp;
  let sql = `INSERT INTO posts (title, url, timestamp) VALUES (?, ?, ?);`;
  conn.query(sql, [title, url, timestamp], (err, rows) => {
    let justPostedID = rows.insertId;
    let sqlJustPosted = `SELECT * FROM posts WHERE id = ${justPostedID}`;
    if (err) {
      console.error(err);
      res.sendStatus(500);
      return;
    } else {
      conn.query(sqlJustPosted, (err, rows2) => {
        if (err) {
          console.error(`Cannot retrieve data: ${err.toString()}`);
          res.sendStatus(500);
        } else {
          res.status(200).json(rows2);
        }
      });
    };
  });
});

app.listen(3000);