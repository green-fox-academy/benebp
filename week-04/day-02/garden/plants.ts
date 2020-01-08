'use strict';

export class Plants {
  colour: string;
  waterLevel: number;
  waterLimit: number;
  waterAbsorption: number;


  constructor (colour: string, waterLimit: number, waterAbsorption: number) {
    this.colour = colour;
    this.waterLevel = 0;
    this.waterLimit = waterLimit;
    this.waterAbsorption = waterAbsorption;
  }

  watering(amount: number): void {
    this.waterLevel = this.waterLevel + amount * this.waterAbsorption;
  }

  needsWater(): boolean {
    if (this.waterLevel < this.waterLimit) {
      return true
    } else {
      return false
    }
  }

  getIdentity() {
    return 'Flora';
  }

  thirstyCheck() {
    if (this.needsWater()) {
      console.log(`The ${this.getColor()} ${this.getIdentity()} needs water`);
    }
    else {
      console.log(`The ${this.getColor()} ${this.getIdentity()} doesn't need water`);
    }
  }

  getColor(): string {
    return this.colour;
  }
}