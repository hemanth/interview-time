var isFunction = require('util').isFunction;

// Will use ES6 teamplate strings later on.
exports.problem = 'Find the most repated character in a string: \n\n' +

  'For example "pizza" that output must be `z`\n\n' +

  '* Create a file `mostRepated.js`\n\n' +

  '* Don\'t forget to export you function. module.exports = function() {}`);\n\n' +

  'Finally to verify do a `interview-time verify mostRepated.js`\n\n';

exports.verify = function(args, cb) {
  var proposed = require(cwd + '/' + args[0]);

  if (!isFunction(proposed)) {
    console.log(
      "Please make sure you have exported the function as suggested.");
  }
  if (proposed('pizza') === 'z' && proposed('mam') === 'm') {
    console.log('Good you have solved it!\n');
    cb(true);
  } else {
    console.log("Sorry your code does not work :(");
    cb(false);
  }
};
