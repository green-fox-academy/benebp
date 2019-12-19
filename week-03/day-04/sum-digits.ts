// Given a non-negative integer n, return the sum of its digits recursively (without loops).

'use strict';

function sumDigits (n:number): number {
  let sum: number = n % 10;
  if (n >= 10) {
    let rest: number = Math.floor(n / 10);
    sum += sumDigits(rest);
  }
  return sum
}

console.log(sumDigits(5555));