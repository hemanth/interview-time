#!/usr/bin/env node

var adventure = require('adventure');
var interview = adventure('interview-time');

var problems = [
  'fizz-buzz','palindrome', 'set-difference'
];
problems.forEach(function (prob) {
  interview.add(prob, function () {
    return require('./problems/' + prob);
  });
});

interview.execute(process.argv.slice(2));
