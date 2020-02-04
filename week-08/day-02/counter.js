'use strict';

document.querySelector('button').addEventListener('click', () => {
  document.querySelector('.result').innerText = document.querySelectorAll('li').length;
});