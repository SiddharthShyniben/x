addEventListener('fetch', event => {
	event.respondWith(Response.redirect(unwind(event.request), 302));
});

function unwind(request) {
	const {pathname} = new URL(request.url);
	console.log(pathname);
	return 'https://dev.to';
}
