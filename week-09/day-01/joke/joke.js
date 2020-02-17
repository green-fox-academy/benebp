'use strict';

const div = document.querySelector('div');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  fetch('http://api.icndb.com/jokes/random)')
    .then(res => res.json())
    .then(json => div.innerText = json.value.joke)
    .catch(() => div.innerText = 'No more jokes for today')
});