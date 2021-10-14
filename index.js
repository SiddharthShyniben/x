addEventListener('fetch', event => {
	event.respondWith(unwind(event.request));
});

function unwind(request) {
	const {pathname} = new URL(request.url);

	if (pathname === '/min') {
		return new Response('<h1>WIP</h1>', {
			headers: {
				'content-type': 'text/html'
			}
		});
	}

	return redirect`https://siddu.tech`;
}

const redirect = ([where]) => Response.redirect(where, 302);
