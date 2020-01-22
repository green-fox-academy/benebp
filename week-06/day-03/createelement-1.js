'use strict';

// Add an item that says 'The Green Fox' to the asteroid list.
// Add an item that says 'The Lamplighter' to the asteroid list.
// Add a heading saying 'I can add elements to the DOM!' to the .container.
// Add an image, any image, to the container.

let ulElements = document.querySelector('ul');
let greenfox = document.createElement('li');
ulElements.appendChild(greenfox);
greenfox.innerText = 'The Green Fox';

let lamplighter = document.createElement('li');
ulElements.appendChild(lamplighter);
lamplighter.innerText = 'The Lamplighter';

let container = document.querySelector('.container');
let heading = document.createElement('h1');
container.appendChild(heading);
heading.innerText = 'I can add elements to the DOM!';

let newurl = "http://gportal.gportal.hu/portal/gportal/image/gallery/1289402759_40.jpg";
let image = document.createElement('img');
container.appendChild(image);
document.querySelector('img').setAttribute('src', newurl);