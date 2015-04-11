var cwd = require('process').cwd(),
readFile = require('fs').readFileSync,
isFunction = require('util').isFunction,
isEqual = function(a1, a2) {
  return (a1.length == a2.length) && a1.every(function(element, index) {
    return element === a2[index];
  });
};

// Will use ES6 teamplate strings later on.
exports.problem = 'Write a program that returns an array from 1..10 such that: \n\n'+

'Multiples of three are "Fizz" and multiples of five are "Buzz"\n\n'+

'* Create a file `fizzbuzz.js`\n\n' +

'* Don\'t forget to export you function. module.exports = function() {}`);\n\n'+

'Finally to verify do a `interview-time verify `\n\n';

exports.verify = function (args, cb) {
    var proposed = require(cwd+'/'+args[0]),
    expected = [ 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz' ];

    if(!isFunction(proposed)) {
      console.log("Please make sure you have exported the function as suggested.");
    }
    if (isEqual(expected,proposed())) {
        console.log('Good you have solved it!\n');
        cb(true);
    }
    else {
        console.log("Sorry your code does not work :(");
        cb(false);
    }
};
