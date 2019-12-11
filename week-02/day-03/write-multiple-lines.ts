// Create a function that takes 3 parameters: a path, a word and a number
// and is able to write into a file.
// The path parameter should be a string that describes the location of the file you wish to modify
// The word parameter should also be a string that will be written to the file as individual lines
// The number parameter should describe how many lines the file should have.
// If the word is 'apple' and the number is 5, it should write 5 lines
// into the file and each line should read 'apple'
// The function should not raise any errors if it could not write the file.

'use strict';

function writeLines (path: string, word: string, number: number) {
    const fs = require('fs');
    try{
        let words: string[] = [];
        for (let i: number = 0; i < number; i++) {
            words.push(word);
        }
        fs.writeFileSync(path, words.join('\n'));
    }
    catch (e) {
        console.log('')
    }
}

writeLines('./lines.txt', 'fox', 5);