'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const width = 1600;
const height = 800;

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r4.png]

for (let i: number = 0; i < 250; i += 50) {
    let start: number = 0;
    let side: number = 0;
    side += i;
    start = 50 + i;
    ctx.fillStyle = 'purple';
    ctx.fillRect(start, start, side, side);
    // ctx.strokeRect(0 + i, 0 + i, 50, 50);
}