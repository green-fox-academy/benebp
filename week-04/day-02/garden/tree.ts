'use strict';

import { Plants } from './plants';

export class Tree extends Plants{
  constructor(colour: string) {
    super(colour, 10, 0.4);
  }

  getIdentity(): string {
    return 'Tree';
  }
}