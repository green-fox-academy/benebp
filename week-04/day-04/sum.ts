'use strict';

export class Sum {  
  sum(arr: number[]): number {
    let sum: number = 0;
    for (let i of arr) {
      sum += i;
    }
    return sum
  }
}