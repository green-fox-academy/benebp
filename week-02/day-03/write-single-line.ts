// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

'use strict';

function writeName (name:string) {
    const fs = require('fs');
    try {
    fs.writeFileSync ('name.txt', name);
    }
    catch (e) {
        console.log("Unable to write file: name.txt")
    }
}

writeName('Bence');