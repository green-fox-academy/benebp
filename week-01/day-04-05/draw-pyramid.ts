'use strict';

let lineCount: number = 4;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

for (var i = 1; i <= lineCount; i++) {
    var row = "";
    for (var j = 1; j <= (2 * lineCount - 1); j++) {
        (j >= lineCount + 1 - i && j <= lineCount - 1 + i) ? row += "*" : row += " ";
    }
    console.log(row);
}