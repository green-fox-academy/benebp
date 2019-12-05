'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let totalSeconds: number;
totalSeconds = 60 * 60 * 24;

let currentTotalSeconds: number;
currentTotalSeconds = 42 + (34 * 60) + (14 * 60 * 60);

let remainingSeconds: number;
remainingSeconds = totalSeconds - currentTotalSeconds;

console.log(remainingSeconds);