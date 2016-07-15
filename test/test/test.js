var Kopper = require('../../main');

exports.test = {
	testTest: function (test) {
		Kopper.Test.test(__dirname + '/../../examples/lambda', 'my-first-lambda', null, {
			succeed: function (response) {
				test.ok(response, 'there is a response');
				test.done();
			},
			fail: function (error) {
				test.ok(false, error.toString());
				test.done();
			}
		});
	},
	testOK: function(test){
		Kopper.Test.ok(__dirname + '/../../examples/lambda', 'my-first-lambda', test, null);
	},
	testFail: function(test){
		Kopper.Test.fail(__dirname + '/../../examples/lambda', 'my-first-lambda', test, {});
	}
};
