'use strict';

// Write a program that calculates the sum and the average from 1 to a given number.
// Example input: 5
// Example output: Sum: 15, Average: 3

let input: number = 5;
let sum: number = 0;
let avg: number;

for (let i = 1; i <= input; i++) {
    sum += i;
}
console.log(sum);
avg = sum / input
console.log(avg)