'use strict';

class Animal {
  name: string;
  ownerName: string;
  isHealthy: boolean;
  healCost: number;

  constructor(name: string, ownerName: string, isHealthy: boolean, healCost: number) {
    this.name = name;
    this.ownerName = ownerName;
    this.isHealthy = isHealthy;
    this.healCost = healCost;
  }

  heal(): void {
    this.isHealthy = true;
  }

  isAdoptable(): boolean {
    return this.isHealthy
  }

  toString(): string {
    if (this.isAdoptable()) {
      return this.name + ' is healthy, and adoptable';
    } else {
      return `${this.name} is not healthy (${this.healCost}€) , and not adoptable`;
    }
  }
}

class Cat extends Animal {
  //ha a field-et nem kotelezo megadni, mert van alapertek is, akkor a vegere kell beadni
  constructor(ownerName: string, isHealthy: boolean, name: string = 'cat') {
    super(name, ownerName, isHealthy, Math.floor(Math.random() * 7));
  }
}

class Dog extends Animal {
  constructor(ownerName: string, isHealthy: boolean, name: string = 'dog') {
    super(name, ownerName, isHealthy, Math.floor(Math.random() * 8) + 1);
  }
}

class Parrot extends Animal {
  constructor(ownerName: string, isHealthy: boolean, name: string = 'parrot') {
    super(name, ownerName, isHealthy, Math.floor(Math.random() * 7) + 4);
  }
}

class AnimalShelter {
  budget: number;
  animalList: Animal[];
  adopterList: string[];

  constructor() {
    this.budget = 50;
    this.animalList = [];
    this.adopterList = [];
  }

  rescue(pet: Animal): number {
    this.animalList.push(pet)
    return this.animalList.length
  }

  heal() {

  }

  addAdopter(name: string) {
    return this.adopterList.push(name);
  }

  findNewOwner() {

  }

  earnDonation(amount: number): number {
    this.budget += amount;
    return this.budget
  }

  toString(): string {
    let list: string = '';
    for (let i: number; i < this.animalList.length; i++) {
      list = '' + this.animalList[i].toString() + '\n';
    }
    return `Budget: ${this.budget},\nThere are ${this.animalList.length} animal(s) and ${this.adopterList.length} potential adopter(s)` + list;
  }
}

let rex = new AnimalShelter;