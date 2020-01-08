'use strict';

import { Plants } from './plants';

export class Flower extends Plants {
  constructor(colour: string) {
    super(colour, 5, 0.75);
  }

  getIdentity(): string {
    return 'Flower';
  }
}