var Kopper = require('grunt-kopper-serverless');

exports.testMyFirstLambda = function (test) {
	Kopper.Test.ok(__dirname + '/examples/lambda', 'my-first-lambda', test, {
		isLocal: true,
		id: 'test'
	});
};
