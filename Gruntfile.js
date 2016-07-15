var Kopper = require('./main');

module.exports = function (grunt) {
	var config = {
		nodeunit: {
			all: ['test/**/*.js'],
			'all-lcov': {
				src: ['test/**/*.js'],
				options: {
					reporter: 'lcov',
					reporterOutput: './test/coverage-results.log'
				}
			}
		},
		coveralls: {
			upload: {
				src: './test/coverage-results.log'
			}
		},
		release: {
			options: {
				indentation: '\t'
			}
		}
	};

	var lambdas = ['my-first-lambda'];

	Kopper.Grunt.addLambdas.call(Kopper.Grunt, config, 'default', 'us-east-1', 'fake-account', 'examples/lambda', 'example-app', lambdas);

	grunt.initConfig(config);

	Kopper.Grunt.registerLambdaTasks(grunt, lambdas);

	grunt.loadNpmTasks('grunt-contrib-nodeunit');
	grunt.loadNpmTasks('grunt-coveralls');
	grunt.loadNpmTasks('grunt-release');

	grunt.registerTask('test', ['test-my-first-lambda', 'nodeunit:all']);
	grunt.registerTask('test-lcov', ['nodeunit:all-lcov']);
	
	grunt.registerTask('publish', ['test', 'release']);
};
