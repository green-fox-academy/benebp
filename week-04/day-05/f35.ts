'use strict';

import { Aircraft } from "./aircraft";

class F35 extends Aircraft {
  constructor() {
    super('F35', 12, 0, 50, true)
  }
}