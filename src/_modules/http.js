export default function send(address, method, body = {}) {
  return fetch(address, {
      method: method,
      mode: 'cors',
      credentials: 'include',
      body: Object.keys(body).length === 0 ? {} : JSON.stringify(body),
      headers: {
          'Content-Type': 'application/json; charset=utf-8'
      }
  })
      .then(function (response) {
          let json = response.json();
          console.log(0)
          if (response.status >= 400) {
              return json.then(response => {
                  throw response;
              });
          }
          return json;
      });
}