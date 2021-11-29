// const assertEqual = require('../assertEqual');
// const tail = require('../tail');

// assertEqual(tail([5,6,7]), 6);
// assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");

const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns 7 for [5, 6, 7]", () => {
    assert.notDeepEqual(tail([5, 6, 7]), 6);
  });
  it("returns 'Labs' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.notDeepEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
});