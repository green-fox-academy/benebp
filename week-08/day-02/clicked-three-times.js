'use strict';

// Create a simple HTML document with one button.
// If the user clicks the button 3 times, and 5 seconds is already elapsed since the page is loaded, a text should appear under the button:
// 5 seconds elapsed and clicked 3 times
// If the user starts clicking before the first 5 seconds, nothing should be printed

const button = document.querySelector('button');
const body = document.querySelector('body');
let counter = 0;

button.addEventListener('click', () => {
  counter++;
  if (event.timeStamp > 5000 && counter >= 3) {
    body.appendChild(document.createElement('p'));
    document.querySelector('p').innerText = '5 seconds elapsed and clicked 3 times';
  };
});