'use strict';

const body = document.querySelector('body');
const h1 = document.querySelector('h1');

body.addEventListener('keyup', () => {
  console.log(event);
  h1.innerText = event.code;
});