'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const width = 1600;
const height = 800;

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]

for (let i: number = 0; i <= 500; i += 50) {
    ctx.fillStyle = 'purple';
    ctx.fillRect(0 + i, 0 + i, 50, 50);
    ctx.strokeRect(0 + i, 0 + i, 50, 50);
}