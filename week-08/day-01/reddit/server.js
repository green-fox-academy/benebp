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
      res.sendStatus(500).send('DB ERROR');
      return;
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
          res.sendStatus(500).send('DB ERROR');
        } else {
          res.status(200).json(rows2);
        }
      });
    };
  });
});

app.put('/posts/:id/upvote', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  let id = req.params.id;
  const upvoteSQL = `UPDATE posts SET score = score + 1 WHERE id = ?;`;
  conn.query(upvoteSQL, [id], (err) => {
    // res.redirect('/posts');
    let sqlJustVoted = `SELECT * FROM posts WHERE id = ?;`;
    if (err) {
      console.error(err);
      res.sendStatus(500).send('DB ERROR');
    } else {
      conn.query(sqlJustVoted, [id], (err, rows) => {
        if (err) {
          res.sendStatus(500).send('DB ERROR');
        } else {
          res.status(200).json(rows);
        }
      });
    };
  });
});

app.put('/posts/:id/downvote', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  let id = req.params.id;
  const downvoteSQL = `UPDATE posts SET score = score - 1 WHERE id = ?;`;
  conn.query(downvoteSQL, [id], (err) => {
    // res.redirect('/posts');
    let sqlJustVoted = `SELECT * FROM posts WHERE id = ?;`;
    if (err) {
      console.error(err);
      res.sendStatus(500).send('DB ERROR');
    } else {
      conn.query(sqlJustVoted, [id], (err, rows) => {
        if (err) {
          res.sendStatus(500).send('DB ERROR');
        } else {
          res.status(200).send(rows);
        }
      });
    };
  });
});

app.listen(3000);