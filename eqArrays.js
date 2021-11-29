const assertEqual = require('./assertEqual');

const eqArrays = function(actual, expected){
  for (let i = 0; i < expected.length; i++) {
    if(actual[i] !== expected[i]){
      return false;
    } else{
    }
  }
  return true;
}

module.exports = eqArrays;