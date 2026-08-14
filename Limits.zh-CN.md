<!-- i18n:start -->
[English](./Limits.md) · 简体中文 · [日本語](./Limits.ja.md) · [한국어](./Limits.ko.md) · [Русский](./Limits.ru.md) · [Español](./Limits.es.md) · [Português (BR)](./Limits.pt-BR.md) · [Français](./Limits.fr.md) · [Tiếng Việt](./Limits.vi.md)
<!-- i18n:meta locale=zh-CN source=Limits.md source-blob=3c1cb46e7a6f78a1de385946dd4a7e1f66717080 status=translated -->
<!-- i18n:end -->

# URL 和标头大小限制

现代浏览器允许你指定非常长的 URL,轻松达到 2MB。

但是 Web 服务器和 CDN 有一些限制。一般来说,**URI 最多 12KB 是安全的**。

## 检查 JSON 大小

可以在 URL 中轻松容纳几个巨大的表单,而无需担心触及限制。

```js
var size = new TextEncoder().encode(JSON.stringify(
    { key1: "Value 1$%^&*", key2: "⚖★☔" } // 你的 JSON 对象
)).length
var kiloBytes = Number(size / 1024).toFixed(2);
var megaBytes = Number(kiloBytes / 1024).toFixed(2);
console.log({ kiloBytes, megaBytes })
```

## 限制

URL 地址是 [请求 HTTP 标头](https://developer.mozilla.org/en-US/docs/Glossary/Request_header) 的一部分,以下限制适用于 URL + 标头。

### Vercel 14KB,硬限制

[Docs](https://vercel.com/docs/errors/URL_TOO_LONG)

### Apache httpd 8KB,可增大

[Docs](https://httpd.apache.org/docs/2.2/mod/core.html#limitrequestline)

### Nginx 8KB,可增大

[Docs](http://nginx.org/en/docs/http/ngx_http_core_module.html#large_client_header_buffers)

### NodeJS 8KB,可用 `--max-http-header-size=16384` 增大

[Docs](https://github.com/nodejs/node/issues/24692)

[Docs2](https://stackoverflow.com/a/56954244/5538912)
