// src/index.js
var src_default = {
  async fetch(request, env) {
    return await handleRequest(request).catch(
      (err) => new Response(err.stack, { status: 500 })
    );
  }
};
async function handleRequest(request) {
  const url = new URL(request.url);
  const { pathname } = url;

	const manifest = "Brendan Joy; uuid1; 20 Dec 2026\n" +
		"Sylvia Joy; uuid2; 21 Dec 2026\n" +
		"Prince Joy; uuid3; 22 Dec 2026\n" +
		"\nVersion: 1.0\n" +
		"Url: https://example.com/filebin.zip"
  if (pathname.startsWith("/api/v1/manifest")) {
		return new Response(manifest);
  }

  if (pathname.startsWith("/url")) {
    return new Response(JSON.stringify(request), {
      headers: { "Content-Type": "application/json" }
    });
  }
  if (pathname.startsWith("/status")) {
    const httpStatusCode = Number(pathname.split("/")[2]);
    return Number.isInteger(httpStatusCode) ? fetch("https://http.cat/" + httpStatusCode) : new Response("That's not a valid HTTP status code.");
  }

  return new Response("Bad request. Try the client software");
}
export {
  src_default as default
};
//# sourceMappingURL=index.js.map
