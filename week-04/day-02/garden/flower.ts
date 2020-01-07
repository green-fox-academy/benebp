'use strict';

import { Plants } from './plants';
import { Garden } from './garden';

export class Flower extends Plants {
  getStatusOfFlower(): void {
    if (this.waterLevel < 5) {
      console.log('The ' + this.name + 'flower needs water.');
    } else {
      console.log('The ' + this.name + 'flower doesn\'t need water.');
    }
  }

  needsWater(): boolean {
    if (this.waterLevel < 5) {
      return true
    } else {
      return false
    }
  }

  wateringFlower(amountOfWater: number): void {
    this.waterLevel += amountOfWater * 0.75;
  }
}