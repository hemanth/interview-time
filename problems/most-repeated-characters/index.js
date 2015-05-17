var rootRequire = require('root-require'),
  check = rootRequire('./utils').check,
  cwd = require('process').cwd();

// Will use ES6 teamplate strings later on.
exports.problem = 'Find the most repated character in a string: \n\n' +

  'For example "pizza" that output must be `z`\n\n' +

  '* Create a file `mostRepated.js`\n\n' +

  '* Don\'t forget to export you function. module.exports = function() {}`);\n\n' +

  'Finally to verify do a `interview-time verify mostRepated.js`\n\n';

exports.verify = function (args, cb) {
  var proposed = require(cwd + '/' + args[0]),
    input = 'mam',
    expected = 'm';

  check({
    proposed: proposed,
    input: input,
    expected: expected,
    cb: cb
  });
};
