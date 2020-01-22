'use strict';

let url = document.querySelector('img').getAttribute('src');
console.log(url);

let newurl = "http://gportal.gportal.hu/portal/gportal/image/gallery/1289402759_40.jpg";
document.querySelector('img').setAttribute('src', newurl);

document.querySelector('a').setAttribute('href', 'https://www.greenfoxacademy.com/');

document.getElementsByClassName('this-one')[0].toggleAttribute('disabled');
document.getElementsByClassName('this-one')[0].innerText = 'Don\'t lick me!';