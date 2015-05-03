var rootRequire = require('root-require'),
	check = rootRequire('./utils').check,
	cwd = require('process').cwd();

// Will use ES6 teamplate strings later on.
exports.problem =
	'Given the number of bits return the binary combinations: \n\n' +

	'Say input is 2 output must be [[00],[01],[10],[11]]. \n\n' +

	'* Create a file `binary-combinations.js`\n\n' +

	'* Don\'t forget to export you function. module.exports = function() {}`);\n\n' +

	'Finally to verify do a `interview-time verify binary-combinations.js`\n\n';

exports.verify = function (args, cb) {
	var proposed = require(cwd + '/' + args[0]),
		input = 1,
		expected = [
			[0],
			[1]
		];
	check({
		proposed: proposed,
		input: input,
		expected: expected,
		cb: cb
	});
};
