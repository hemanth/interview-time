var rootRequire = require('root-require'),
	check = rootRequire('./utils').check,
	cwd = require('process').cwd();

// Will use ES6 teamplate strings later on.
exports.problem =
	'Write a program that returns an array from 1..10 such that: \n\n' +

	'Multiples of three are "Fizz" and multiples of five are "Buzz"\n\n' +

	'* Create a file `fizzbuzz.js`\n\n' +

	'* Don\'t forget to export you function. module.exports = function() {}`);\n\n' +

	'Finally to verify do a `interview-time verify `\n\n';

exports.verify = function (args, cb) {
	var proposed = require(cwd + '/' + args[0]),
		expected = [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz'];

	check({
		proposed: proposed,
		expected: expected,
		cb: cb
	});
};
