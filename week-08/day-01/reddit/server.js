const mysql = require('mysql');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('./static'));

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

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/index.html');
});

app.get('/addpost', (req, res) => {
  res.sendFile(__dirname + '/static/index-addpost.html');
});

app.get('/posts', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  let sql = `SELECT * FROM posts`;
  conn.query(sql, (err, rows) => {
    if (err) {
      res.status(500).send('DB ERROR');
      return;
    }
    return res.status(200).json({posts: rows});
  });
});

app.post('/posts', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const {title, url, timestamp} = req.body;
  let sql = `INSERT INTO posts (title, url, timestamp) VALUES (?, ?, ?);`;
  conn.query(sql, [title, url, timestamp], (err, rows) => {
    // let justPostedID = rows.insertId;
    // let sqlJustPosted = `SELECT * FROM posts WHERE id = ${justPostedID}`;
    if (err) {
      console.error(err);
      res.status(500);
      return;
    // } else {
    //   conn.query(sqlJustPosted, (err, rows2) => {
    //     if (err) {
    //       res.status(500).send('DB ERROR');
    //     } else {
    //       res.status(200).json(rows2);
    //     }
    //   });
    };
  });
});

app.put('/posts/:id/upvote', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  let id = req.params.id;
  const upvoteSQL = `UPDATE posts SET score = score + 1 WHERE id = ?;`;
  conn.query(upvoteSQL, [id], (err) => {
    let sqlJustVoted = `SELECT * FROM posts WHERE id = ?;`;
    if (err) {
      console.error(err);
      res.status(500).send('DB ERROR');
    } else {
      conn.query(sqlJustVoted, [id], (err, rows) => {
        if (err) {
          res.status(500).send('DB ERROR');
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
      res.status(500).send('DB ERROR');
    } else {
      conn.query(sqlJustVoted, [id], (err, rows) => {
        if (err) {
          res.status(500).send('DB ERROR');
        } else {
          res.status(200).send(rows);
        }
      });
    };
  });
});

app.listen(3000);