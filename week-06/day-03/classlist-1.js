'use strict';

//If the fourth p has a 'dolphin' class, replace apple's content with 'pear'
//If the first p has an 'apple' class, replace cat's content with 'dog'
//Make apple red by adding a .red class
//Make balloon less balloon-like (change its shape)

let pClasses = document.querySelectorAll('p');

if (pClasses[3].className === 'dolphin') {
  pClasses[0].innerText = 'pear';
}

if (pClasses[0].className === 'apple') {
  pClasses[2].innerText = 'dog';
}

pClasses[0].className += ' red';

pClasses[1].style.borderRadius = '50%';
pClasses[1].style.height = '100px';
pClasses[1].style.width = '50px';