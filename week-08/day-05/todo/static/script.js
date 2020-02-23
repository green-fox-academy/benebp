'use strict';

const makeNode = (name) => document.createElement(name);

const URL = 'http://localhost:3000/';
const todosDIV = document.getElementById('todos');
const newtodoDIV = document.getElementById('newtodo');
const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const newTodo = document.getElementById('todo').value;
  const newTodoObject = { todo: newTodo };
  fetch(URL + 'todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newTodoObject)
  });
  form.reset();
  refreshTodos();
  });

const refreshTodos = () => {
  fetch(URL + 'todos')
    .then((resp) => resp.json())
    .then((data) => {
      todosDIV.innerHTML = '';
      if (data.todos.length === 0) {
        todosDIV.innerText = 'No Todos in the list'
      };
      let ul = makeNode('ul');
      todosDIV.appendChild(ul);
      data.todos.forEach(e => {
        let li = makeNode('li');
        let statusButton = makeNode('button');
        let deleteButton = makeNode('button');
        li.innerText = e.todo;
        statusButton.innerText = 'Mark as done';
        deleteButton.innerText = 'Delete';
        if (e.status === 1) {
          li.setAttribute('style', 'text-decoration: line-through');
          statusButton.disabled = true;
          statusButton.innerText = 'Done';
        };
        ul.appendChild(li);
        li.appendChild(statusButton);
        li.appendChild(deleteButton);
        statusButton.addEventListener('click', () => {
          fetch(`/todos/${e.id}`, {
            method: 'PUT'
          })
            .then(() => {
              li.setAttribute('style', 'text-decoration: line-through');
              statusButton.disabled = true;
              statusButton.innerText = 'Done';
            });
        });
        deleteButton.addEventListener('click', () => {
          fetch(`/todos/${e.id}`, {
            method: 'DELETE'
          })
            .then(() => refreshTodos());
        });
      });
    });
};

refreshTodos();