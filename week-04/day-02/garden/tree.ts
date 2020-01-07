'use strict';

import { Plants } from './plants';
import { Garden } from './garden';

export class Tree extends Plants{
  getStatusOfTree(): void {
    if (this.waterLevel < 10) {
      console.log('The ' + this.name + 'tree needs water.');
    } else {
      console.log('The ' + this.name + 'tree doesn\'t need water.');
    }
  }

  wateringTree(amountOfWater: number): void {
    this.waterLevel += amountOfWater * 0.4;
  }
}