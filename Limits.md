# Limitation of URL and headers size

Modern browsers allow you specify very long URLs, 2MB easily.

But there are some limitation from WebServers and CDN. Generally **up to 12KB only for URI is safe**.

## Limitations
URL address is part of [request HTTP headers](https://developer.mozilla.org/en-US/docs/Glossary/Request_header), following limits are for URL + headers.

### Vercel 14KB, hard limit
[Docs](https://vercel.com/docs/errors/URL_TOO_LONG)

### Apache httpd 8KB, can be increased
[Docs](https://httpd.apache.org/docs/2.2/mod/core.html#limitrequestline)

### Nginx 8KB, can be increased
[Docs](http://nginx.org/en/docs/http/ngx_http_core_module.html#large_client_header_buffers)

### NodeJS 8KB, can be increased with `--max-http-header-size=16384`
[Docs](https://github.com/nodejs/node/issues/24692)

[Docs2](https://stackoverflow.com/a/56954244/5538912)
