const assertArraysEqual = require('./assertArraysEqual');

const eqArrays = require('./eqArrays');

const middle = function(array){
  if (array.length <= 2){
    console.log([]);
  } else if (array.length % 2 === 0){
    console.log([array[Math.ceil(array.length / 2) - 1], array[Math.ceil(array.length / 2)]]); 
  } else {
    console.log([array[Math.floor(array.length / 2)]]);
  }
}

module.exports = middle;