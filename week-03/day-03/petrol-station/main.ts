// Create a Station and a Car classes
// Station
//  gasAmount
//  refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
// Car
//  gasAmount
//  capacity
//  create constructor for Car where:
//      initialize gasAmount -> 0
//      initialize capacity -> 100

'use strict';

import { Car } from './car';
import { Station } from './station';

let kut = new Station;
let auto = new Car;

console.log(kut.gasAmount);
console.log(auto.capacity);
kut.refill(auto);
console.log(kut.gasAmount);
console.log(auto.gasAmount);