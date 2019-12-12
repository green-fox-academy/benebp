'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
const width = 1600;
const height = 800;

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a red horizontal line to the canvas' middle.
// draw a green vertical line to the canvas' middle.

ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(600, 400);
ctx.lineTo(1000, 400);
ctx.stroke();

ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(800, 200);
ctx.lineTo(800, 600);
ctx.stroke();


// for (let i = 50; i < 500; i += 100) {
// 	if (i === 250) {
// 		ctx.fillRect(i, i, 30, 30);
// 	} else {
// 		ctx.strokeRect(i, i, 30, 30);
// 	}
// }

// function drawSquare(xPos: number, yPos: number, size: number, color: string): void {
// 	ctx.strokeStyle = color;
// 	ctx.strokeRect(xPos, yPos, size, size);
// }

// drawSquare(500, 500, 100, 'rgb(200,200,200)');