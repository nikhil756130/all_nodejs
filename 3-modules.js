/**
 * CommonJS, every file is module (by default)
   Modules - Encapsulated Code (only share minimum)
 */
   const {john, peter} = require('./4-names'); //export  objects
   const sayHi = require('./5-utls') //export function
   const data = require('./6-alternatove-flever')
   require('./7-mind-granade')
   
   sayHi('nikhil')
   sayHi(john)
   sayHi(peter)