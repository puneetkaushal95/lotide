const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual,expected)) {
    console.log("✅✅✅ Assertion Passed:", actual, "===" ,expected,);
  } else {
    console.log("🛑🛑🛑 Assertion Failed:", actual, "!==" ,expected);
  }
};

const eqArrays = function(actual, expected){
  for (let i = 0; i < expected.length; i++) {
    if(actual[i] !== expected[i]){
      return false;
    }
  }
  return true;
};


const takeUntil = function(array, callback) {
  let result = [];
  for (let x in array){
    if (callback(array[x])){
      result = array.slice(0, x);
      return result;
    }
  }
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
// console.log(results1); //[ 1, 2, 5, 7, 2 ]

// console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
// console.log(results2); //[ 'I\'ve', 'been', 'to', 'Hollywood' ]

// Test with assertArraysEqual
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);  // true
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Redwood' ]);  // false
