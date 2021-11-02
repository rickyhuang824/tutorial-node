const names = require('./4-names');
const data = require('./6-alternative-flavor');
const sayHii = require('./5-utils');
require('./7-mind-grenade');

sayHii('susan')
sayHii(names.john);
sayHii(names.peter);

console.log(data);