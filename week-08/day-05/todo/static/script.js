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
      let ul = makeNode('ul');
      todosDIV.appendChild(ul);
      data.todos.forEach(e => {
        let li = makeNode('li');
        li.innerText = e.todo;
        ul.appendChild(li);
      });
    })
};

refreshTodos();