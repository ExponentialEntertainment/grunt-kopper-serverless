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

##running a local api with apache and cgi-node

