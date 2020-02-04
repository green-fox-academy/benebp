'use strict';

// - Gather 10.000 candies!
// - Clicking the ‘Create candies’ button gives you 1 candy.
// - You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// - 10 lollipops generate 1 candy per second.
//   - Use the 🍭 emoji to display the lollipops you have
// - Display the candy producton rate in the `Candies / Second` row
// - If you press the "make candy rain" button, the candy generation should speed up 10x

const create = document.querySelector('.create-candies');
const buy = document.querySelector('.buy-lollypops');
const machine = document.querySelector('.candy-machine');
const candies = document.querySelector('.candies');
const lollypops = document.querySelector('.lollypops');
const speed = document.querySelector('.speed');
let candyCounter = 1198;
let lollypopCounter = 0;
let speedCounter = 0;

setInterval(() => {
  candyCounter += Math.floor(lollypopCounter / 10);
  candies.innerText = candyCounter;
  speedCounter = Math.floor(lollypopCounter / 10);
  speed.innerText = speedCounter;
}, 1000);

create.addEventListener('click', () => {
  candyCounter++;
  candies.innerText = candyCounter;
});

buy.addEventListener('click', () => {
  if (candyCounter >= 100) {
    candyCounter = candyCounter - 100;
    candies.innerText = candyCounter;
    lollypopCounter++;
    lollypops.innerText += '🍭';
  };
});

machine.addEventListener('click', () => {
  speedCounter *= 10;
});