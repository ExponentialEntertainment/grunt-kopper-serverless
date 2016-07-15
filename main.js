var Grunt = process.env.GRUNT_KOPPER_SERVERLESS_COV ? require('./lib-cov/grunt/grunt') : require('./lib/grunt/grunt');
var Test = process.env.GRUNT_KOPPER_SERVERLESS_COV ? require('./lib-cov/test/test') : require('./lib/test/test');
var AWSApiGateway = process.env.GRUNT_KOPPER_SERVERLESS_COV ? require('./lib-cov/aws/api-gateway') : require('./lib/aws/api-gateway');

module.exports = {
	Grunt: Grunt,
	Test: Test,
	AWS: {
		ApiGateway: AWSApiGateway
	}
};