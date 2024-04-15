'use strict';
const calc = require('./calc.js');
require('colors');
const res = calc([12.1, 32.2, 43.1], 0.9);
const resTxt = `Result: ${res}`;

console.log((res >= 50) ? resTxt.red : resTxt.green); 