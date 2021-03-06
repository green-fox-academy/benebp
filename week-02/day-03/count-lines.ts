// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

'use strict';

// const fs = require('fs');

function lineInFile (filename: string) {
    const fs = require('fs');
    try {
    let fileContent = fs.readFileSync(filename, 'utf-8');
    console.log(fileContent.split('\n').length);
    }
    catch (e) {
        console.log(0);
    }
}

lineInFile('./my-file.txt');