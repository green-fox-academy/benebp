'use strict';

let swXHR = new XMLHttpRequest();
swXHR.open('GET', 'https://swapi.co/api/films/');
swXHR.onload = (event) => {
  let response = JSON.parse(event.target.response);
  console.log(response);
  // console.log(response.count);
  // console.log(response.results[0].title);
  for (let i = 0; i < response.count; i++) {
    let ulElement = document.querySelector('ul');
    let liElement = document.createElement('li');
    let pElement = document.createElement('p');
    liElement.innerText = `Title: ${response.results[i].title}`;
    pElement.innerText = `Release date: ${response.results[i].release_date}`;
    ulElement.appendChild(liElement);
    liElement.appendChild(pElement);
  }
}
swXHR.send();