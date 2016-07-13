var Path = require('path');
var OS = require('os');
var Kopper = require('grunt-kopper-serverless');
var AWS = require('aws-sdk');

module.exports = function (grunt) {
	var config = {
		'api-definition': { /*this is optional to define*/
			deploy: {
				api: './lambda/api', //path to your js definition file
				restApiId: 'YOUR_API_GATEWAY_API_ID',
				stageName: 'YOUR_API_GATEWAY_STAGE_NAME'
			}
		}
	};

	//this defines the folder names your lambda function is defined in. For example, from the root folder, you might have lambda/my-first-lambda-function/index.js
	var lambdas = ['my-first-lambda', 'my-second-lambda'];

	/*
	default = profile name in your aws credential file. if you dont define a profile use default
	us-east-1 = the region your lambda functions are setup in
	YOUR_AWS_ACCOUNT_NUMBER = your aws account number. this is used to auto generate the lambda ARN. see one of your lambdas ARNS for this number.
	lambda = the folder, from root, that all of your lambda folders are in
	example-app = the name of your app. this is the prefix you give to your lambda package names and thus your full lambda name defined in AWS lambda console.
	
	see the example in examples/lambda/my-first-lambda
	*/
	Kopper.Grunt.addLambdas.call(Kopper.Grunt, config, 'default', 'us-east-1', 'YOUR_AWS_ACCOUNT_NUMBER', 'lambda', 'example-app', lambdas);

	grunt.initConfig(config);

	//setup the AWS object for deployment
	AWS.config.credentials = new AWS.SharedIniFileCredentials({filename: Path.join(OS.homedir(), '.aws', 'credentials'), profile: 'default'});
	AWS.config.region = 'us-east-1';

	Kopper.Grunt.registerLambdaTasks(grunt, lambdas, AWS/*, (optional) array of pre deploy tasks, (optional) array of post deploy tasks*/);
};

