var rootRequire = require('root-require'),
	check = rootRequire('./utils').check,
	cwd = require('process').cwd();

// Will use ES6 teamplate strings later on.
exports.problem = 'Check if a give string is a palindrome.\n\n' +

	'* Create a file `palindrome.js`\n\n' +

	'* Export a function which checks if a string is a palindrome.\n\n' +

	'* Don\'t forget to export you function. \n\n\tmodule.exports = function isPalindrome(str) {\n\t\t/* your code */\t\n\t});\n\n' +

	'Finally to verify do a `interview-time verify palindrome.js`\n\n';

exports.verify = function (args, cb) {
	var proposed = require(cwd + '/' + args[0]);

	check({
		proposed: proposed,
		input: 'mam',
		expected: true,
		cb: cb
	});

	check({
		proposed: proposed,
		input: 'man',
		expected: false,
		cb: cb
	});

};
