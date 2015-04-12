var cwd = require('process').cwd(),
isFunction = require('util').isFunction,
isEqual = function(a1, a2) {
  return (a1.length == a2.length) && a1.every(function(element, index) {
    return element === a2[index];
  });
};

// Will use ES6 teamplate strings later on.
exports.problem = 'Write a program that takes two arrays: \n\n'+

'a1 = [1,1,2,4,6,8,0] and a2 = [1,3,5,7,7] result must be their set difference.\n\n'+

'* Create a file `set-diff.js`\n\n' +

'* Don\'t forget to export you function. module.exports = function() {}`);\n\n'+

'Finally to verify do a `interview-time verify set-diff.js`\n\n';

exports.verify = function (args, cb) {
    var proposed = require(cwd+'/'+args[0]),
    expected = [2, 4, 6, 8, 0];

    if(!isFunction(proposed)) {
      console.log("Please make sure you have exported the function as suggested.");
    }
    if (isEqual(expected,proposed())) {
        console.log('Good you have solved it!\n');
        cb(true);
    }
    else {
        console.log("Sorry your code does not work :(","\nExpected reuslt: ", expected);
        cb(false);
    }
};
