'use strict';

let lineCount: number = 8;

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is


for (let i = 1; i <= lineCount; i++)    {
    let row: string = '';
    for (let j = 1; j <= i; j++) {
        row += '*';
    }
    console.log(row)
}