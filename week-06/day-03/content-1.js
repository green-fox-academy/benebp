'use strict';

let animals = document.querySelectorAll('p');
// animals[0].innerText = animals[1].innerText;
// animals[1].innerText = animals[2].innerText;
// animals[2].innerHTML = animals[3].innerHTML;

for (let i = 0; i < animals.length - 1; i++) {
  animals[i].innerHTML = animals[i + 1].innerHTML;
}