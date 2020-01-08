'use strict';

import { Flyable } from './flyable';

abstract class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  abstract breed(): string;
}

class Mammal extends Animal {
  constructor (name: string) {
    super(name);    
  }

  breed(): string {
    return 'pushing miniature versions out.'
  }
}

const mammal = new Mammal('Koala');
console.log(`A ${mammal.getName()} is breeding by ${mammal.breed()}`);

class Reptile extends Animal {
  constructor (name: string) {
    super(name);
  }

  breed(): string {
    return 'breeding by laying eggs.'
  }
}

const reptile = new Reptile('Crocodile');
console.log(`A ${reptile.getName()} is breeding by ${reptile.breed()}`);

export class Bird extends Animal implements Flyable {
  constructor (name: string) {
    super(name);
  }

  breed(): string {
    return 'breeding by laying eggs.'
  }

  land(): string {
    return 'lands on its feet'
  }

  fly(): string {
    return 'gets tired fast while flying'
  }

  takeOff(): string {
    return 'both verticaly and horizontaly'
  }
}

const bird = new Bird('Parrot');
console.log(`A ${bird.getName()} is breeding by ${bird.breed()}`);