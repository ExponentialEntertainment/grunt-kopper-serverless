# grunt-kopper-serverless
A grunt utility for easily testing and deploying AWS lambda + AWS api gateway apis/apps.

[![Build Status](https://travis-ci.org/benconnito/grunt-kopper-serverless.svg)](https://travis-ci.org/benconnito/grunt-kopper-serverless)

##there is a library too!
Use https://github.com/benconnito/kopper-serverless for developing the lambda functions. It has some Error classes, success/fail wrappers, and an AWS config method.

##Getting Started
```
npm install grunt-kopper-serverless
```

##usage
Unlike most grunt plugins where you `grunt.loadNpmTask` this library is just some helper methods for auto setting up your config and adding some run, test, and deploy methods.

See the example [`Gruntfile.js`](examples/Gruntfile.js) for an example of what to write.

##test helpers

You will need to add a test for each lambda function that you create. place it in /test/api/LAMBDA_NAME/test.js

```
var Kopper = require('grunt-kopper-serverless');

exports.testMyFirstLambda = function (test) {
	Kopper.Test.ok(__dirname + '/../../../examples/lambda', 'my-first-lambda', test, {
		isLocal: true,
		id: 'test'
	});
};
```

##api definition

See [api.js](/examples/lambda/api.js) for an example api definition file.

##running a local api with apache and cgi-node

If you've set up an api definition. You can run a local version of it via apache and cgi-node.

cgi-node is located at [cgi](/cgi/cgi-node.min.cgi) or at https://github.com/UeiRicho/cgi-node

Copy this file into your lambdas folder directory along with [app.js](/cgi/app.js).

Replace REAPLACE-cgi-node.min.cgi file with cgi-node from /cgi folder in this repo. Then replace the NODE_EXECUTABLE_PATH and TEMP_PATH values.

Change `'api'` in app.js to to whatever file you named your api definition file. The router uses require() to include it.

Then set up your apache directory directive like this:

```
Options +ExecCGI
AddHandler cgi-script .cgi
		
AddHandler cgi-node .js
Action cgi-node /cgi-node.min.cgi

RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ app.js [QSA,L]
```
