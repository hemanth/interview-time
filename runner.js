#!/usr/bin/env node

var adventure = require('adventure');
var interview = adventure('interview-time');

var problems = [ 'palindrome'];
problems.forEach(function (prob) {
  interview.add(prob, function () {
    return require('./problems/' + prob);
  });
});

interview.execute(process.argv.slice(2));
