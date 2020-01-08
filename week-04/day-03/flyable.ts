'use strict';

import { Bird } from './zoo';

// Create a Flyable interface
//   it should have land, fly and takeOff methods (TakeOff in C#)
// Create an abstract Vehicle class
//   it should have at least 3 fields
// Extend Helicopter class from Vehicle
//   implement your Flyable interface
// Extend Bird from your abstract Animal class (zoo exercise)
//   implement your Flyable interface

export interface Flyable {
  land(): string;
  fly(): string;
  takeOff(): string;
}

abstract class Vehicle {
  modelName: string;
  yearOfProduction: number;
  fuelType: string;

  constructor (modelName:string, yearOfProduction: number, fuelType: string) {
    this.modelName = modelName;
    this.yearOfProduction = yearOfProduction;
    this.fuelType = fuelType;
  }
}

class Helicopter extends Vehicle implements Flyable {
  constructor(modelName:string, yearOfProduction: number, fuelType: string) {
    super(modelName, yearOfProduction, fuelType);
  }

  land(): string {
    return 'circular landing pad with letter H'
  }

  fly(): string {
    return 'it can fly, yeah'
  }

  takeOff(): string {
    return 'vertically'
  }
}

let airbus = new Helicopter('A380', 2015, 'kerosene');
console.log(airbus.land());

let pigeon = new Bird('pigeon');
console.log(pigeon.fly());