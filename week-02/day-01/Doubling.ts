// -  Create a variable named `baseNum` and assign the value `123` to it
// -  Create a function called `doubling` that doubles it's input parameter and returns with an integer
// -  Log the result of `doubling(baseNum)` to the console

'use strict';

let baseNum: number =123;

function doubling(original: number): number {
    let double: number = original * 2;
    return double;
}

console.log(doubling(baseNum));