'use strict';

const catLove = document.getElementById('catLove');
const signUp = document.getElementById('signUp');
const radio1 = document.getElementById('radio1');
const radio2 = document.getElementById('radio2');
const petChoice1 = document.getElementById('petChoice1');
const petChoice2 = document.getElementById('petChoice2');
const petChoice3 = document.getElementById('petChoice3');
const button = document.querySelector('button');

// 1 soros if sytax ( feltetel ? ha igaz : ha hamis ) (else mindig kell):
// (petChoice1.checked || petChoice2.checked) ? !signUp.disabled : '';

// petChoice1.addEventListener('input', () => signUp.disabled = false);
// petChoice2.addEventListener('input', () => signUp.disabled = false);
// petChoice3.addEventListener('input', () => signUp.disabled = true);

// document.querySelectorAll('input[class="dogCat"]').forEach(item => {
//   item.addEventListener('input', () => {
//     console.log(item.value);
//     item.checked ? signUp.disabled = false : signUp.disabled = true;
//   })
// });

const validAnimals = ['dog', 'cat'];

document.querySelectorAll('input[name="pets"]').forEach(item => {
  item.addEventListener('input', () => validAnimals.indexOf(item.value) !== -1 ? signUp.disabled = false : signUp.disabled = true);
});

document.querySelectorAll('input[name="facts"]').forEach(item => {
  item.addEventListener('input', () => item.id === 'catFactsYes' ? catLove.disabled = false : catLove.disabled = true);
});

button.addEventListener('click', () => {
  alert('Thank you, you\'ve successfully signed up for cat facts');
});

// document.querySelectorAll('button').forEach(item => {
//   item.addEventListener('click', () => alert('Thank you, you\'ve successfully signed up for cat facts'))
// });