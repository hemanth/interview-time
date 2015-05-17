var rootRequire = require('root-require'),
	check = rootRequire('./utils').check,
	cwd = require('process').cwd();

// Will use ES6 teamplate strings later on.
exports.problem = 'Write a program that takes two arrays: \n\n' +

	'a1 = [1,1,2,4,6,8,0] and a2 = [1,3,5,7,7] result must be their set difference.\n\n' +

	'* Create a file `set-diff.js` which takes in two arrays and returns the difference\n\n' +

	'* Don\'t forget to export you function. module.exports = function() {}`);\n\n' +

	'Finally to verify do a `interview-time verify set-diff.js`\n\n';

exports.verify = function (args, cb) {
	var proposed = require(cwd + '/' + args[0]),
		expected = [2, 4, 6, 8, 0];

	check({
		proposed: proposed,
		input: [
			[1, 1, 2, 4, 6, 8, 0],
			[1, 3, 5, 7, 7]
		],
		expected: expected,
		cb: cb
	});

};
