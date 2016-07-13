module.exports = {
	region: 'us-east-1',
	account: 'YOUR_AWS_ACCOUNT_NUMBER',
	domain: 'YOUR_API_DOMAIN',
	name: 'example-app',
	api: {
		'/game/random': {
			get: {lambda: 'game-random'},
			post: {lambda: 'game-index-random'}
		},
		'/game/score': {
			post: {lambda: 'game-score'}
		},
		'/game/{id}': {
			get: {
				consumes: true,
				lambda: 'game-id',
				parameters: [{
						name: 'id',
						in: 'path',
						required: true,
						type: 'string'
					}]
			}
		},
		'/player/auth': {
			post: {lambda: 'player-auth'}
		},
		'/player/{id}': {
			get: {
				consumes: true,
				lambda: 'player-id',
				parameters: [
					{
						name: 'token',
						in: 'query',
						required: false,
						type: 'string'
					},
					{
						name: 'id',
						in: 'path',
						required: true,
						type: 'string'
					}
				]
			}
		}
	}
};