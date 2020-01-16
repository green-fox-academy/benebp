'use strict';

import { F16 } from "./f16";
import { Aircraft } from "./aircraft";
import { F35 } from "./f35";

export class Carrier {
  aircrafts: Aircraft[] = [];
  ammoStorage: number;
  hp: number;

  constructor(ammoStorage: number = 10000, hp: number = 5000) {
    this.ammoStorage = ammoStorage;
    this.hp = hp;
  }

  add(type: string): void {
    if (type === 'F16') {
      this.aircrafts.push(new F16());
    } else if (type === 'F35') {
      this.aircrafts.push(new F35());
    } else {
      throw 'wrong type of aircraft, choose between F35 and F16';
    }
  }

  fill() {
    //2 for ciklus, h elobb toltse fel a pririty repuloket, masodik for pedig a nem priority-t, ha maradt ammo
    for (let i: number = 0; i < this.aircrafts.length; i++) {
      // this.aircrafts[i].refill(this.ammoStorage);
      // this.ammoStorage -= this.aircrafts[i].ammoLevel;
      this.ammoStorage = this.aircrafts[i].refill(this.ammoStorage);
    }
  }

  fight(enemy: Carrier): void {
    let allDmg = 0;
    for (let i: number = 0; i < this.aircrafts.length; i++) {
      allDmg += this.aircrafts[i].fight();
    }
    enemy.hp -= allDmg;
  }

  getStatus(): string {
    let totalDamage: number = 0;
    for (let i: number = 0; i < this.aircrafts.length; i++) {
      totalDamage += this.aircrafts[i].ammoLevel * this.aircrafts[i].baseDamage;
    }
    let list: string = '';
    for (let i: number = 0; i < this.aircrafts.length; i++) {
      list = list + this.aircrafts[i].getStatus() + '\n';
    }
    if (this.hp > 0) {
      return `HP: ${this.hp}, Aircraft count: ${this.aircrafts.length}, Ammo Storage: ${this.ammoStorage}, Total damage: ${totalDamage}` + '\nAircrafts:\n' + list;
    } else {
      return "It's dead Jim :(";
    }
  }
}