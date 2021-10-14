addEventListener('fetch', event => {
	const response = new Response('Hello world!', {
		headers: {
			'Content-Type': 'text/plain'
		}
	});

	event.respondWith(response);
});
