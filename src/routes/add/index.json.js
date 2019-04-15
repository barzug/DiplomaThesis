export function post(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	console.log('req.body', req.body)

	global.currentId = global.currentId ? global.currentId + 1 : 1

	global.tests = global.tests ? global.tests : []
	
	global.tests.push({...req.body, id: global.currentId })

	res.end(JSON.stringify({}));
}
