'use strict';

import { F16 } from "./f16";
import { Aircraft } from "./aircraft";
import { F35 } from "./f35";

export class Carrier {
  aircrafts: Aircraft[] = [];
  ammoStorage: number;
  hp: number;

  constructor(ammoStorage: number = 1000, hp: number = 5000) {
    this.ammoStorage = ammoStorage;
    this.hp = hp;
  }

  add(type: string): void {
    if (type === 'F16') {
      this.aircrafts.push(new F16());
    } else if (type === 'F35') {
      this.aircrafts.push(new F35());
    }
  }

  fill() {

  }

  fight() {

  }

  getStatus() {

  }
}