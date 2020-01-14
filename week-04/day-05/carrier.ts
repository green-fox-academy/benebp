'use strict';

import { F16 } from "./f16";
import { Aircraft } from "./aircraft";

class Carrier {
  aircrafts: Aircraft[] = [];
  ammoStorage: number;
  hp: number;

  constructor(ammoStorage: number, hp: number) {
    this.ammoStorage = ammoStorage;
    this.hp = hp;
  }

  add() {
    this.aircrafts.push(new F16());
  }

  fill() {

  }

  fight() {

  }

  getStatus() {

  }
}