'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const width = 1600;
const height = 800;

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

function drawing (x: number, y: number): void {
    for (let i: number = 0; i <= 300; i += 100) {
        ctx.strokeRect(x + i, y + i / 2, 50, 50);
    }
}

drawing(100, 100);