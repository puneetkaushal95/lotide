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

const letterPositions = function(string) {
  let letterPos = {};

  const str = string.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    if (!str[i].match(/ /)) {
      if (!letterPos[str[i]]) letterPos[str[i]] = [];
      letterPos[str[i]].push(i);
    }
  }
  return letterPos;
};

console.log(letterPositions('lighthouse in the house'));