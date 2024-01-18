const names = require('./4-names');
console.log(names);
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor.js');

console.log(data.singlePerson);
require('./7-mind-grenade.js');
sayHi('Yoshi')
sayHi(names.john)
sayHi(names.neil)
