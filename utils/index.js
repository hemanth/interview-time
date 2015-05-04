var isFunction = require('util').isFunction,
	assert = require('assert');

module.exports = {
	check: function (toCheck) {
		if (!isFunction(toCheck.proposed)) {
			console.log(
				"Please make sure you have exported the function as suggested.");
			return;
		}
		try {
			assert.deepEqual(toCheck.expected, toCheck.proposed());
			console.log('Good you have solved it!\n');
			toCheck.cb(true);
		} catch (e) {
			console.log("Sorry your code does not work :(", "\nExpected reuslt:",
				toCheck.expected, "For the input:", toCheck.input);
			toCheck.cb(false);
		}
	}
};
