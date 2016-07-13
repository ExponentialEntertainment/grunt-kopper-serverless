var Kopper = require('../../../main');

exports.testMyFirstLambda = function (test) {
	Kopper.Test.ok(__dirname + '/../../../examples/lambda', 'my-first-lambda', test, {
		isLocal: true,
		id: 'test'
	});
};
