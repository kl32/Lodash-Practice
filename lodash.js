var faker = require('faker');

var chunk = require('lodash.chunk');
var reverse = require('lodash.reverse');
var without = require('lodash.without');
var shuffle = require('lodash.shuffle');

let personOne = faker.name.findName();
let personTwo = faker.name.findName();
let personThree = faker.name.findName();
let personFour = faker.name.findName();



let myArr = [];

myArr.push(personOne, personTwo, personThree, personFour);

console.log("ARRAY OF DATA: ", myArr);

//shuffle

let shuffleArr = function(){
    myShuffleArr = shuffle(myArr);
  };

  shuffleArr();

console.log("ARRAY SHUFFLE: ", myShuffleArr);

//chunk 

console.log("ARRAY CHUNK: ", chunk(myArr, 2));

//reverse

console.log("ARRAY REVERSE: ", reverse(myArr));

//without

console.log("ARRAY WITHOUT: ", without(myArr, personOne));