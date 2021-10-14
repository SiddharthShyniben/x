addEventListener('fetch', event => {
	event.respondWith(unwind(event.request));
});

function unwind(request) {
	const {pathname, search} = new URL(request.url);

	if (pathname === '/min') {
		return new Response('<h1>WIP</h1>', {
			headers: {
				'content-type': 'text/html'
			}
		});
	}

	if (pathname === '/short') {
		Deno.writeTextFileSync('db.csv', Deno.readTextFileSync('db.csv') + '\n' + search);
		return new Response('Success', {headers: {'content-type': 'text/plain'}});
	}

	if (pathname === '/read') {
		return new Response(Deno.readTextFileSync('db.csv'), {headers: {'content-type': 'text/plain'}});
	}

	return redirect`https://siddu.tech`;
}

const redirect = ([where]) => Response.redirect(where, 302);
