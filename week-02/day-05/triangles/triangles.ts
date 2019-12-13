'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const width = 1600;
const height = 800;

let n: number = 6;

for (let i: number = 0; i < n * 43.3; i = i + 43.3) {
    for (let j: number = 0; j < (n - i) * 25; j = j + 25) {
        for (let k: number = 0; k < (n - 1) * 50; k = k + 50) {
            ctx.beginPath();
            ctx.moveTo((0 + j) - k, 500 - i);
            ctx.lineTo((50 + j) - k, 500 - i);
            ctx.lineTo((25 + j) - k, 456.7 - i);
            ctx.lineTo((0 + j) - k, 500 - i);
            ctx.stroke();
        }
    }
}


// for (let i: number = 0; i < n * 50; i = i + 50) {
//     for (let j: number = 0; j < n * 43.4; j = j + 43.3) {
//         for (let k: number = 0; k < n * 25; k = k + 25) {
//             triangle(i, j, k);
//         }
//     }
// }

// function triangle () {
//     ctx.lineTo(50, 500);
//     ctx.lineTo(25, 456.7);
//     ctx.lineTo(0, 500);
//     ctx.stroke();
// }

// triangle();