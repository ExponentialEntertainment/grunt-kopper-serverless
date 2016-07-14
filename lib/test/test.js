module.exports = {
	test: function (dir, name, event, context) {
		var lambda = require(dir + '/' + name + '/index');

		if (!event) {
			event = require(dir + '/' + name + '/event');
		}

		lambda.handler(event, context);
	},
	ok: function (dir, name, test, event, context) {
		this.test(dir, name, event, context ? context : {
			succeed: function (response) {
				test.ok(response, 'there is a response');
				test.done();
			},
			fail: function (error) {
				test.ok(false, error.toString());
				test.done();
			}
		});
	},
	fail: function (dir, name, test, event, context) {
		this.test(dir, name, event, context ? context : {
			succeed: function (response) {
				test.ok(false, 'this should have failed');
				test.done();
			},
			fail: function (error) {
				test.ok(error, error.toString());
				test.done();
			}
		});
	}
}
