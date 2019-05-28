var faker = require('faker');

  var name = faker.name.findName();
  var randomEmail = faker.internet.email();
  
var chunk = require('lodash.chunk');
var reverse = require('lodash.reverse');
var without = require('lodash.without');
var shuffle = require('lodash.shuffle');