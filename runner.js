#!/usr/bin/env node

var adventure = require('adventure-runner'),
  problems = [
    'fizzbuzz', 'palindrome', 'anagrams', 'set-difference',
    'most-repeated-characters', 'uniq-elements'
  ];

adventure('interview-time', problems);
