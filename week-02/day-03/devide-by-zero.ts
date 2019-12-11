// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

'use strict';

let input: number = 0;

function devide(input: number) {
    if (input === 0) {
        throw Error('fail');
    } else {    
    console.log(10 / input);
    }
}

try {
    devide(input)
}

catch (e) {
    console.log('fail');
}