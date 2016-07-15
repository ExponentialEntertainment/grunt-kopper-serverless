var Kopper = require('../../main');

exports.grunt = {
	testAddLambdas: function (test) {
		var config = {};

		var lambdas = ['lambda_test'];

		Kopper.Grunt.addLambdas.call(Kopper.Grunt, config, 'default', 'us-east-1', 'fake-account', 'examples/lambda', 'example-app', lambdas);

		test.deepEqual(config, {
			lambda_invoke: {
				lambda_test: {
					options: {
						file_name: 'examples/lambda/lambda_test/index.js',
						event: 'examples/lambda/lambda_test/event.json'
					}
				}
			},
			lambda_package: {
				lambda_test: {
					options: {
						include_time: false,
						package_folder: 'examples/lambda/lambda_test',
						dist_folder: 'examples/lambda/lambda_test/dist'
					}
				}
			},
			lambda_deploy: {
				lambda_test: {
					options: {
						profile: 'default'
					},
					arn: 'arn:aws:lambda:us-east-1:fake-account:function:example-app-lambda_test'
				}
			},
			nodeunit: {
				api: ['test/api/lambda_test/test.js'],
				lambda_test: 'test/api/lambda_test/test.js'
			}
		});

		test.done();
	},
	testRegisterLambdaTasks: function (test) {
		var lambdas = ['lambda_test'];

		var tasks = {};

		var grunt = {
			loadNpmTasks: function () {},
			registerMultiTask: function () {},
			registerTask: function (name, value) {
				tasks[name] = value;
			}
		};

		Kopper.Grunt.registerLambdaTasks(grunt, lambdas, null, ['pre-deploy'], ['post-deploy']);

		test.deepEqual(tasks, {
			'run-lambda_test': ['lambda_invoke:lambda_test'],
			'deploy-lambda_test': ['lambda_package:lambda_test', 'lambda_deploy:lambda_test'],
			'test-lambda_test': ['nodeunit:lambda_test'],
			'deploy-api-definition': 'api-definition:deploy',
			'deploy-api': ['pre-deploy', 'nodeunit:api', 'deploy-lambda_test', 'deploy-api-definition', 'post-deploy']
		});

		test.done();
	}
};
