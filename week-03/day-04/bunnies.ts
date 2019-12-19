// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

'use strict';

function bunnieEars (bunnies: number): number {
  if (bunnies === 1) {
    return bunnies * 2
  }
  return 2 + (bunnieEars(bunnies - 1));
}

console.log(bunnieEars(5));