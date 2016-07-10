var Grunt = require('./lib/grunt/grunt');
var Test = require('./lib/test/test');
var AWSApiGateway = require('./lib/aws/api-gateway');

module.exports = {
	Grunt: Grunt,
	Test: Test,
	AWS: {
		ApiGateway: AWSApiGateway
	}
};