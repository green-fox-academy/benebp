'use strict';

import { Plants } from './plants';
import { Flower } from './flower';
import { Tree } from './tree';

export class Garden {
  plants: Plants[] = [];

  addFlower (colour: string): void {
    this.plants.push(new Flower(colour));
  }

  addTree (colour: string): void {
    this.plants.push(new Tree(colour));
  }

  getGarden(): void {
    for (let i: number = 0; i < this.plants.length; i++) {
      this.plants[i].thirstyCheck();
    }
  }

  waterGarden(fullWaterAmount: number): void {
    let waterPortion: number;
    let thirstyPlants: number = 0;
    for (let i: number = 0; i < this.plants.length; i++) {
      if (this.plants[i].needsWater()) {
        thirstyPlants++;
      }
      console.log(this.plants[i].needsWater());
    }
    waterPortion = fullWaterAmount / thirstyPlants;
    console.log(waterPortion);
    for (let i: number = 0; i < this.plants.length; i++) {
      if (this.plants[i].needsWater()) {
        this.plants[i].watering(waterPortion);
      }
    }
    this.getGarden();
  }
}

let myGarden = new Garden();
myGarden.addFlower('yellow');
myGarden.addFlower('blue');
myGarden.addTree('purple');
myGarden.addTree('orange');
myGarden.getGarden();
myGarden.waterGarden(40);
myGarden.waterGarden(70);