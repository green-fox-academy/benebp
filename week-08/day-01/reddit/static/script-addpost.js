'use strict';

const main = document.querySelector('main');
const form = document.querySelector('form');
const URL = 'http://localhost:3000/';

const makeNode = (name) => document.createElement(name);

form.addEventListener('submit', e => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const url = document.getElementById('url').value;
  const timestamp = document.getElementById('timestamp').value;
  const newPost = { title: title, url: url, timestamp: timestamp };
  const json = JSON.stringify(newPost);
  const xhr = new XMLHttpRequest;
  xhr.open('POST', URL + 'posts');
  xhr.onreadystatechange = (event) => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      myCallback(event.target.response);
    }
  };
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.send(json);
  form.reset();
  let h3 = makeNode('h3');
  h3.innerText = 'Post created succesfully!';
  main.appendChild(h3);
});

function myCallback(res) {
  console.log(JSON.parse(res));
};