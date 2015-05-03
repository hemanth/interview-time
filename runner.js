#!/usr/bin/env node

var adventure = require('adventure-runner'),
  problems = [
    'fizzbuzz', 'palindrome', 'anagrams', 'set-difference',
    'most-repeated-characters', 'uniq-elements', 'binary-combinations'
  ];

adventure('interview-time', problems);
