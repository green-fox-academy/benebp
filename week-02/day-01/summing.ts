// Write a function called `sum` that returns the sum of numbers from zero to the given parameter

'use strict';

function sum(inputNumber: number): number {
    let summary: number = 0;
    for (let i: number = 0; i <= inputNumber; i++) {
        summary += i;
    }
    return summary;
}

console.log(sum(10));