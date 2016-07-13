var Kopper = require('./main');

module.exports = function (grunt) {
	var config = {
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
	grunt.loadNpmTasks('grunt-release');
	
	grunt.registerTask('test', ['test-my-first-lambda']);
};
