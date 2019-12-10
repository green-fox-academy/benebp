'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let todoText: string = ' - Buy milk\n';

let missing1: string = 'My todo:\n'
let missing2: string = ' - Download games\n'
let missing3: string = '    - Diablo'

let wholeToDo: string = missing1.concat(todoText, missing2, missing3);

console.log(todoText);
console.log(wholeToDo);