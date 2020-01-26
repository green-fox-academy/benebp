'use strict';

const kids = [
  { 'petName': 'Wattled crane', 'owner': 'Bryant' },
  { 'petName': 'Devil, tasmanian', 'owner': 'Alejandro' },
  { 'petName': 'Mynah, common', 'owner': 'Nelie' },
  { 'petName': 'Dolphin, common', 'owner': 'Mariele' },
  { 'petName': 'Gray duiker', 'owner': 'Maddalena' },
  { 'petName': 'Crab (unidentified)', 'owner': 'Lucine' },
  { 'petName': 'Ant (unidentified)', 'owner': 'Lorianna' },
  { 'petName': 'Bison, american', 'owner': 'Tommie' },
  { 'petName': 'Yellow mongoose', 'owner': 'Vivyan' },
  { 'petName': 'Carpet snake', 'owner': 'Veda' },
  { 'petName': 'Lesser mouse lemur', 'owner': 'Isidor' },
];
// 1) Create an <article> element for each kid
// 2) Create a <h3> and a <p> element for each article and append them as a child to the <article>
//     - The H3 should contain the owner's name
//     - The p should contain the pet's name
// 3) Add the article to the pets div.

const pets = document.getElementById('pets');

kids.forEach(element => {
  const kids = document.createElement('artice');
  const owner = document.createElement('h3');
  const petName = document.createElement('p');
  pets.appendChild(kids);
  kids.appendChild(owner);
  kids.appendChild(petName);
  owner.innerText = element.owner;
  petName.innerText = element.petName;
});