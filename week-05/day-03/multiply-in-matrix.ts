'use strict';

// ### Multiply items in a matrix
// ​
// Write a method that takes a matrix as a parameter.
// ​
// The function should:
// ​
// - multiply each even number by 2 in each odd indexed row
// - multiply each odd number by 2 in each even indexed row
// ​
// Write at least 2 different test cases.
// ​
// #### Example
// ​
// Input
// ​
// ```
let aM: number[][] =
[
  [1, 3, 6, 2],
  [7, 5, 6, 1],
  [3, 3, 1, 5],
  [9, 0, 5, 3]
]
// ```
// ​
// Output
// ​
// ```
// [
//   [1,  3,  12, 4],
//   [14, 10, 6,  2],
//   [3,  3,  1,  5],
//   [18, 0,  10, 6]
// ]
// ```
​
function matrixMultiplier (matrix: number[][]): void {
  for (let i: number = 0; i < matrix.length; i++) {
    for (let j: number = 0; j < matrix[i].length; j++) {
      if ((matrix[i][j] % 2 === 0 && (i + 1) % 2 === 1) || (matrix[i][j] % 2 === 1 && (i + 1) % 2 === 0)) {
        matrix[i][j] = matrix[i][j] * 2;
      }
    }
  }
}

console.log(aM);

matrixMultiplier(aM);

console.log(aM);