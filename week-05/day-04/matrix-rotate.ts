'use strict';

// Matrix rotate
// Create a function named rotateMatrix that takes an n×n integer matrix (array of arrays) as
// parameter and returns a matrix which elements are rotated 90 degrees clockwise.

// Example
// Input

let exampleMatrix: number[][] = [ [1, 2, 3],
                                  [4, 5, 6],
                                  [7, 8, 9] ]
// Output

// [ [ 7, 4, 1 ],
//   [ 8, 5, 2 ],
//   [ 9, 6, 3 ] 
// ]

function rotateMatrix(matrix: number[][]): void {
  matrix = matrix.reverse();
  for (let i: number = 0; i < matrix.length; i++) {
    for (let j: number = 0; j < i; j++) {
      let temp = matrix[i][j]
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp
    }
  }
}

rotateMatrix(exampleMatrix);
console.log(exampleMatrix);