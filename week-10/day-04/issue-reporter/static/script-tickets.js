'use strict';

const URL = 'http://localhost:3000/';

const makeNode = (name) => document.createElement(name);

const ul = document.querySelector('ul');
const main = document.querySelector('main');

const makeTicket = (ticket) => {
  let li = makeNode('li');
  let idP = makeNode('p');
  let reporterP = makeNode('p');
  let manufacturerP = makeNode('p');
  let serialnumberP = makeNode('p');
  let descriptionP = makeNode('p');
  let timeofreportP = makeNode('p');
  let deleteButton = makeNode('button');
  idP.innerText = 'Ticket ID: ' + ticket.id;
  reporterP.innerText = 'Ticket reporter: ' + ticket.reporter;
  manufacturerP.innerText = 'Manufacturer: ' + ticket.manufacturer;
  serialnumberP.innerText = 'Serialnumber: ' + ticket.serialnumber;
  descriptionP.innerText = 'Description: ' + ticket.description;
  timeofreportP.innerText = 'Time of report: ' + ticket.timeofreport;
  deleteButton.innerText = 'DELETE TICKET';
  li.appendChild(idP);
  li.appendChild(reporterP);
  li.appendChild(manufacturerP);
  li.appendChild(serialnumberP);
  li.appendChild(descriptionP);
  li.appendChild(timeofreportP);
  li.appendChild(deleteButton);
  deleteButton.addEventListener('click', () => {
    fetch(URL + `tickets/${ticket.id}`, {
      method: 'DELETE'
    })
    .then(() => refreshTickets());
  });
  return li
};

const refreshTickets = () => {
  fetch(URL + 'tickets')
    .then(response => response.json())
    .then(data => {
      ul.innerHTML = '';
      data.tickets.forEach(element => {
        ul.appendChild(makeTicket(element));
      });
    });
};

refreshTickets();