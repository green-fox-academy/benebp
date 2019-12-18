'use strict';

export class Car {
    gasAmount: number;
    capacity: number;

    constructor(gasAmount: number = 0, capacity: number = 100) {
        this.capacity = capacity;
        this.gasAmount = gasAmount;
    }
}