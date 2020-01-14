'use strict';

export abstract class Aircraft {
  type: string;
  maxAmmo: number;
  ammoLevel: number;
  baseDamage: number;
  priority: boolean;

  constructor(type: string, maxAmmo: number, ammoLevel: number = 0, baseDamage: number, priority: boolean) {
    this.type = type;
    this.maxAmmo = maxAmmo;
    this.ammoLevel = ammoLevel;
    this.baseDamage = baseDamage;
    this.priority = priority;
  }

  fight(): number {
    let allDamage: number = this.ammoLevel * this.baseDamage;
    this.ammoLevel = 0;
    return allDamage
  }

  refill() {

  }

  getType(): string {
    return this.type
  }

  getStatus(): string {
    return 'Type ' + this.type + ', Ammo: ' + this.ammoLevel + ', Base Damage: ' + this.baseDamage + ', All Damage: ' + (this.baseDamage * this.ammoLevel)
  }

  isPriority() {
    return this.priority
  }
}