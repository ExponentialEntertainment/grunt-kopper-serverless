var Kopper = require('../../../main');

exports.myFirstLambda = {
	testOK: function (test) {
		Kopper.Test.ok(__dirname + '/../../../examples/lambda', 'my-first-lambda', test, null);
	},
	testFail: function (test) {
		Kopper.Test.fail(__dirname + '/../../../examples/lambda', 'my-first-lambda', test, {});
	}
};
