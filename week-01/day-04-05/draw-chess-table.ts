'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

let size: number = 5;
let output: string = '';

for (let i: number = 0; i <= size; i++) {
    output += '0';
    for (let j: number = 0; j <= i; j++) {
        
    }
    console.log(output);
}
