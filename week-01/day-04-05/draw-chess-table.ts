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


for (let i: number = 0; i <= size; i++) {
    let output: string = '';
    
    for (let j: number = 0; j <= size; j++) {
        output += 'x';
    }
    console.log(output);
}
