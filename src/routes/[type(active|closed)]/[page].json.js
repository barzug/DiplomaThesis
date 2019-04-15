export function get(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const { type, page } = req.params;

	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	const displayedTests = global.tests ? global.tests.map((test) => ({title: test.title, id: test.id})) : ''

	res.end(JSON.stringify(displayedTests));
}
