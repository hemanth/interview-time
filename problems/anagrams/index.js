var rootRequire = require('root-require'),
	check = rootRequire('./utils').check,
	cwd = require('process').cwd();

// Will use ES6 teamplate strings later on.
exports.problem = 'Write a program to all possible anagrams of a given string: \n\n'+

'* Create a file `anagrams.js`\n\n' +

'* Don\'t forget to export you function. module.exports = function() {}`);\n\n'+

'Finally to verify do a `interview-time verify anagrams.js "evil"`\n\n' +

'P.S: process.argv[4] would be "evil" in this case.';

exports.verify = function (args, cb) {
	var proposed = require(cwd+'/'+args[0]),
	expected = [ 'evil', 'levi', 'live', 'veil', 'vile' ];

	check({
		proposed: proposed,
		input: input,
		expected: expected,
		cb: cb
	});
};
