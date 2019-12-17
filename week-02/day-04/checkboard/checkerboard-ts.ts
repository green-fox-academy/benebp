'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const width = 1600;
const height = 800;

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.

ctx.strokeRect(0, 0, 400, 400);

for (let i: number = 0; i <= 300; i = i + 100) {
    for (let j: number = 0; j <= 300; j = j + 100) {
        ctx.fillRect(0 + j, 0 + i, 50, 50);
        ctx.fillRect(50 + j, 50 + i, 50, 50);
    }
}