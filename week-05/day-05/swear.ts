'use strict';

// import fsi = require('fs');

// Swear words

// Write a method which can read and parse a file containing not so family friendly text.
// The method must remove all the given words from the file and return the amount of the removed words.

// Example
// Example file can be found here.

// Input

// ['fuck', 'bloody', 'cock', 'shit', 'fucker', 'fuckstick', 'asshole', 'dick', 'piss', 'cunt']
// Output

// 17

const fsi = require('fs');

let fileContent = fsi.readFileSync('./content.txt', 'utf-8');

console.log(fileContent);