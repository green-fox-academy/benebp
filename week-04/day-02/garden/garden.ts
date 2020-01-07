'use strict';

import { Plants } from './plants';
import { Flower } from './flower';
import { Tree } from './tree';

export class Garden {
  flowers: Plants[];
  trees: Plants[];

  constructor () {
    this.flowers = [];
    this.trees = [];
  }

  addFlower (flower: Plants): void {
    this.flowers.push(flower);
  }

  addTree (tree: Plants): void {
    this.trees.push(tree);
  }

  lookOfGarden(): void {
    
  }

  watering(amountOfWater: number): void {
    console.log('Watering with ' + amountOfWater);
    let pcs: number;
    for (let i: number = 0; i < this.flowers.length; i++) {
      if (this.flowers ) {

      }
    }


    // amountOfWater / plants need watering
    this.lookOfGarden();
  }
}

let myGarden = new Garden;
let yellow = new Flower('yellow');
myGarden.addFlower(yellow);
