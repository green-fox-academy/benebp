'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let w: number = 2;
let l: number = 3;
let h: number = 4;

let surface_area: number;

surface_area = 2*l*w + 2*l*h + 2*w*h;
console.log('Surface Area: ' + surface_area);

let volume: number;

volume = w * l * h
console.log('Volume: ' + volume);