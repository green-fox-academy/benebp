'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const width = 1600;
const height = 800;

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// Draw at least 3 lines with that function using a loop.

function drawing (x: number, y: number): void {
    for (let i: number = 0; i <= 300; i += 100) {
        ctx.beginPath();
        ctx.moveTo(x, y + i);
        ctx.lineTo(x + 50, y + i);
        ctx.stroke();
    }
}

drawing(100, 100);