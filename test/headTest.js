const assertEqual = require('../assertEqual');
const head = require('../head');


assertEqual(head([5,6,7]), 6);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");