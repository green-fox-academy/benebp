'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const width = 1600;
const height = 800;

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw at least 3 lines with that function using a loop.

function drawing (x: number, y: number): void {
    for (let i: number = 0; i <= 600; i += 200) {
        ctx.beginPath();
        ctx.moveTo(x + i, y);
        ctx.lineTo(width/2, height/2);
        ctx.stroke();
    }
}

drawing(100, 100);