'use strict';

export class Aircraft {
  type: string;
  maxAmmo: number;
  ammoLevel: number;
  baseDamage: number;
  priority: boolean;

  constructor(type: string, maxAmmo: number, baseDamage: number, priority: boolean) {
    this.type = type;
    this.maxAmmo = maxAmmo;
    this.ammoLevel = 0;
    this.baseDamage = baseDamage;
    this.priority = priority;
  }

  fight(): number {
    let allDamage: number = this.ammoLevel * this.baseDamage;
    this.ammoLevel = 0;
    return allDamage
  }

  refill(ammo: number): number {
    let remainingAmmo: number = ammo - (this.maxAmmo - this.ammoLevel)
    this.ammoLevel = ammo - remainingAmmo
    return remainingAmmo
  }

  getType(): string {
    return this.type
  }

  getStatus(): string {
    return 'Type ' + this.type + ', Ammo: ' + this.ammoLevel + ', Base Damage: ' + this.baseDamage + ', All Damage: ' + (this.baseDamage * this.ammoLevel)
  }

  isPriority(): boolean {
    return this.priority
  }
}