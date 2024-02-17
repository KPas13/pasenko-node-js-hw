let util = require('./utils');
const {generateHash} = require("./utils");

let length = 15;
let str = generateHash(length);

console.log(str);