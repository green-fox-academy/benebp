'use strict';

export abstract class Animal {
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

class Bird extends Animal {
  constructor (name: string) {
    super(name);
  }

  breed(): string {
    return 'breeding by laying eggs.'
  }
}

const bird = new Bird('Parrot');
console.log(`A ${bird.getName()} is breeding by ${bird.breed()}`);