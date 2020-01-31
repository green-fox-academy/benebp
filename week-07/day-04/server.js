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

app.get('/booktitles', (req, res) => {
  conn.query('SELECT book_name FROM book_mast;', (err, rows) => {
    if (err) {
      console.error(`Cannot retrieve data: ${err.toString()}`);
      res.sendStatus(500);
      return null;
    }
    return res.send(rows);
  });
});

function queryFilter(query) {
  let string = 'WHERE '
  let columns = Object.keys(query);
  let filters = Object.values(query);
  for (let i = 0; i < columns.length; i++) {
    if (columns[i] === 'category') {
      string += `cate_descrip = '${filters[i]}' AND `;
    };
    if (columns[i] === 'publisher') {
      string += `pub_name = '${filters[i]}' AND `;
    };
    if (columns[i] === 'plt') {
      string += `book_price < '${filters[i]}' AND `;
    };
    if (columns[i] === 'pgt') {
      string += `book_price > '${filters[i]}' AND `;
    }
  };
  return string.slice(0, -5)
};

//join author - aut_name, book_mast - book_name, book_price, category - cat_descrip, publisher - pub_name
app.get('/bookfulldata', (req, res) => {
  let query = req.query;
  console.log(queryFilter(query));
  let sql = `SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast JOIN author ON book_mast.aut_id = author.aut_id JOIN category ON book_mast.cate_id = category.cate_id JOIN publisher ON book_mast.pub_id = publisher.pub_id ${queryFilter(query)}`;
  conn.query(sql, (err, rows) => {
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