'use strict';

const URL = 'http://localhost:3000/';

const makeNode = (name) => document.createElement(name);

const names = document.getElementById('names');
const form = document.querySelector('form');
const main = document.querySelector('main');

fetch(URL + 'users')
  .then(response => response.json())
  .then(data => {
    data.users.forEach(element => {
      let option = makeNode('option');
      option.innerText = element.reporter;
      option.setAttribute('value', element.reporter);
      names.appendChild(option);
    });
  });

form.addEventListener('submit', e => {
  e.preventDefault();
  const reporter = document.getElementById('names').value;
  const manufacturer = document.getElementById('manufacturer').value;
  const serialnumber = document.getElementById('serialnumber').value;
  const description = document.getElementById('description').value;
  const timeofreport = document.getElementById('timeofreport').value;
  const newTicket = { reporter: reporter, manufacturer: manufacturer, serialnumber: serialnumber, description: description, timeofreport: timeofreport };
  fetch(URL + 'tickets', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newTicket)
  })
    .then(response => {
      if (response.status !== 200) {
        throw new Error ('an error happened')
      } else {
        form.reset();
        let p = makeNode('p');
        p.innerText = 'Ticket created';
        main.appendChild(p);
      }
    });
});