var rootRequire = require('root-require'),
  check = rootRequire('./utils').check,
  cwd = require('process').cwd();

// Will use ES6 teamplate strings later on.
exports.problem = 'Given an array filter out repating elements: \n\n' +

  'Says nums = [1,1,2,4,6,8,0] output must be [1,2,4,6,8,0]. \n\n' +

  '(Addition points for using Array#filter)\n\n' +

  '* Create a file `uniq.js`\n\n' +

  '* Don\'t forget to export you function. module.exports = function() {}`);\n\n' +

  'Finally to verify do a `interview-time verify uniq.js`\n\n';

exports.verify = function (args, cb) {
  var proposed = require(cwd + '/' + args[0]),
    input = [0, 0, 7, 7, 42, 42],
    expected = [0, 7, 42];

  check({
    proposed: proposed,
    input: input,
    expected: expected,
    cb: cb
  });
};
