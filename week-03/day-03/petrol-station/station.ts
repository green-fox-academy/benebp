'use strict';

import { Car } from './car';

export class Station {
    gasAmount: number;

    constructor(gasAmount: number = 10000){
        this.gasAmount = gasAmount;
    }

    refill (car:Car): void {
        this.gasAmount -= car.capacity;
        car.gasAmount += car.capacity;
    }
}