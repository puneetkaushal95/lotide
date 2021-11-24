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
}

const middle = function(array){
  if (array.length <= 2){
    console.log([]);
  } else if (array.length % 2 === 0){
    console.log([array[Math.ceil(array.length / 2) - 1], array[Math.ceil(array.length / 2)]]); 
  } else {
    console.log([array[Math.floor(array.length / 2)]]);
  }
}

middle([1]);
middle([1, 2]);
middle([1, 2, 3]);
middle([1, 2, 3, 4, 5]);
middle([1, 2, 3, 4]);
middle([1, 2, 3, 4, 5, 6]);