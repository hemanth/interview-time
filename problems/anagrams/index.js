var cwd = require('process').cwd(),
isFunction = require('util').isFunction,
isEqual = function(a1, a2) {
  if (!(a2 instanceof Array)) return false;
  return (a1.length == a2.length) && a1.every(function(element, index) {
    return element === a2[index];
  });
};

// Will use ES6 teamplate strings later on.
exports.problem = 'Write a program to all possible anagrams of a given string: \n\n'+

'* Create a file `anagrams.js`\n\n' +

'* Don\'t forget to export you function. module.exports = function() {}`);\n\n'+

'Finally to verify do a `interview-time verify anagrams.js "evil"`\n\n' +

'P.S: process.argv[4] would be "evil" in this case.';

exports.verify = function (args, cb) {
    var proposed = require(cwd+'/'+args[0]),
    expected = [ 'evil', 'levi', 'live', 'veil', 'vile' ];

    if(!isFunction(proposed)) {
      console.log("Please make sure you have exported the function as suggested.");
    }
    if (isEqual(expected,proposed())) {
        console.log('Good you have solved it!\n');
        cb(true);
    }
    else {
        console.log("Sorry your code does not work :(", "\nExpected result: ", expected);
        cb(false);
    }
};
