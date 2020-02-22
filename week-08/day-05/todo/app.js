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
  database: 'todo',
});

conn.connect((err) => {
  if (err) {
    console.error('Cannot connect to the database', err);
    return;
  }
  console.log('Connection established');
});




app.listen(3000);