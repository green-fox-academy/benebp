'use strict';

abstract class Instrument {
  name: string;
  
  constructor (name: string) {
    this.name = name;
  }

  abstract play(): void;
}

abstract class StringedInstrument extends Instrument {
  numberOfStrings: number;

  constructor (name: string, numberOfStrings: number) {
    super(name);
    this.numberOfStrings = numberOfStrings;
  }

  play(): void {
    this.sound()
  }

  abstract sound(): void
}

class ElectricGuitar extends StringedInstrument {
  constructor(numberOfStrings: number = 6) {
    super('electricguitar', numberOfStrings)
  }

  sound(): void {
    console.log('Twang');
  }
}

class BassGuitar extends StringedInstrument {
  constructor(numberOfStrings: number = 4) {
    super('bassguiar', numberOfStrings)
  }

  sound(): void {
    console.log('Duum-duum-duum');
  }
}

class Violin extends StringedInstrument {
  constructor(numberOfStrings: number = 4) {
    super('violin', numberOfStrings)
  }

  sound(): void {
    console.log('Screech');
  }
}

let guitar = new ElectricGuitar();
let bassGuitar = new BassGuitar();
let violin = new Violin();

guitar.play();
bassGuitar.play();
violin.play();

let guitar2 = new ElectricGuitar(7);
let bassGuitar2 = new BassGuitar(5);

guitar2.play();
bassGuitar2.play();