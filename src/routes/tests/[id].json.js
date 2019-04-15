export function get(req, res, next) {
	const { id } = req.params;

  const currentTest = global.tests ? global.tests.find((test) => test.id == id) : null
  
  console.log('currentTest', currentTest)

  if (currentTest) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

    res.end(JSON.stringify(currentTest));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}
