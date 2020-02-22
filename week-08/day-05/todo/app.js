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

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/index.html');
});

app.get('/todos', (req, res) => {
  const getTodosSQL = 'SELECT * FROM todos';
  conn.query(getTodosSQL, (err, result) => {
    if (err) {
      res.send({ error: 'DB ERROR' });
    } else {
      res.send({ todos: result });
    };
  });
});

app.post('/todos', (req, res) => {
  const newTodo = req.body.todo;
  const newTodoSQL = 'INSERT INTO todos (todo) VALUES (?);';
  if (newTodo) {
    conn.query(newTodoSQL, [newTodo], (err) => {
      if (err) {
        res.send({ error: 'DB ERROR' });
      } else {
        res.send({ todo: 'CREATED' });
      };
    });
  };
});

app.put('/todos/:id', (req, res) => {
  const statusChangedTodoId = req.params.id;
  const statusChangerSQL = 'UPDATE todos SET status = 1 WHERE id = ?;';
  if (statusChangedTodoId) {
    conn.query(statusChangerSQL, [statusChangedTodoId], (err) => {
      if (err) {
        res.send({ error: 'DB ERROR' });
      } else {
        res.send({ status: 'CHANGED' });
      };
    });
  };
});

app.delete('/todos/:id', (req, res) => {
  const deletedTodoId = req.params.id;
  const deleteSQL = 'DELETE FROM todos WHERE id = ?;';
  if (deletedTodoId) {
    conn.query(deleteSQL, [deletedTodoId], (err) => {
      if (err) {
        res.send({ error: 'DB ERROR' });
      } else {
        res.send({ todo: 'DELETED' }); 
      };
    });
  };
});

app.listen(3000);