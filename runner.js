#!/usr/bin/env node

var adventure = require('adventure-runner'),
  problems = [
    'fizzbuzz', 'palindrome', 'anagrams', 'set-difference',
    'most-repeated-characters'
  ];

adventure('interview-time', problems);
