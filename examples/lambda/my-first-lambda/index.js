var Kopper = require('kopper-serverless');
var AWS = require('aws-sdk');

exports.handler = function (event, context) {
	try {
		Kopper.AWS.config(event, 'us-east-1', 'default', AWS);

		if (event) {
			Kopper.Succeed({message: 'there was an event object'}, context);
		} else {
			throw new Kopper.Error.NonFatalError('missing event object', 400);
		}
	} catch (error) {
		Kopper.Fail(error, error.code, context);
	}
}
