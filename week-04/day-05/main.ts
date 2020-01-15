'use strict';

import { Carrier } from "./carrier";

let greyCarrier = new Carrier;
greyCarrier.add('F16');
greyCarrier.add('F16');
greyCarrier.add('F35');
greyCarrier.add('F35');
greyCarrier.add('F35');
greyCarrier.fill();
console.log(greyCarrier.getStatus());