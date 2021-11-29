const assertEqual = require('./assertEqual');

const tail = function(array) {
  return (array.slice(0));
};

module.exports = tail;