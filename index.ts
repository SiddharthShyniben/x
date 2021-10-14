addEventListener('fetch', event => {
	event.respondWith(Response.redirect('https://dev.to', 302));
});
