var cwd = require('process').cwd(),
readFile = require('fs').readFileSync,
isFunction = require('util').isFunction,
assert = require('assert');

var arrEql = function(a1,a2){
  (a1.length == a2.length) && a1.every(function(element, index) {
      return element === a2[index];
  });
};
// Will use ES6 teamplate strings later on.
exports.problem = 'Check if a give string is a palindrome.\n\n' +

'* Create a file `palindrome.js`\n\n' +

'* Export a function which checks if a string is a palindrome.\n\n' +

'* Don\'t forget to export you function. \n\n\tmodule.exports = function isPalindrome(str) {\n\t\t/* your code */\t\n\t});\n\n'+

'Finally to verify do a `interview-time verify palindrome.js`\n\n';

exports.verify = function (args, cb) {
    var proposed = require(cwd+'/'+args[0]);

    if(!isFunction(proposed)) {
      console.log("Please make sure you have exported the function as suggested.");
    }
    if (proposed('mam') === true && proposed('man') === false) {
        console.log('Good you have solved it!\n');
        cb(true);
    }
    else {
        console.log("Sorry your code does not work :(");
        cb(false);
    }
};
