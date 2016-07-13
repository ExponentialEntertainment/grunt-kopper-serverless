var Kopper = require('grunt-kopper-serverless');

Kopper.AWS.ApiGateway.route(this, process.cwd(), 'api');

