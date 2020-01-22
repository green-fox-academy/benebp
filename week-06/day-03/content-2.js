'use strict';

let animalList = ['apple', 'banana', 'cat', 'dog'];

let list = document.querySelectorAll('li');

for (let i = 0; i < list.length; i++) {
  list[i].innerText = animalList[i];
}

let uElement = document.querySelector('ul');

uElement.classList.toggle('color');