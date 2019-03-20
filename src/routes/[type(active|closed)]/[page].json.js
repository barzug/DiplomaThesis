import tests from './_tests.js';

export function get(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const { type, page } = req.params;

	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(tests));
}
