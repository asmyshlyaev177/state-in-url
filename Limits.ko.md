<!-- i18n:start -->
[English](./Limits.md) · [简体中文](./Limits.zh-CN.md) · [日本語](./Limits.ja.md) · 한국어 · [Русский](./Limits.ru.md) · [Español](./Limits.es.md) · [Português (BR)](./Limits.pt-BR.md) · [Français](./Limits.fr.md) · [Tiếng Việt](./Limits.vi.md)
<!-- i18n:meta locale=ko source=Limits.md source-blob=3c1cb46e7a6f78a1de385946dd4a7e1f66717080 status=translated -->
<!-- i18n:end -->

# URL 및 헤더 크기 제한

최신 브라우저는 매우 긴 URL을 지정할 수 있으며, 2MB도 문제없습니다.

하지만 웹 서버와 CDN에는 몇 가지 제한이 있습니다. 일반적으로 **URI는 최대 12KB까지 안전**합니다.

## JSON 크기 확인

제한에 걸릴 걱정 없이 여러 개의 거대한 폼을 URL에 쉽게 담을 수 있습니다.

```js
var size = new TextEncoder().encode(JSON.stringify(
    { key1: "Value 1$%^&*", key2: "⚖★☔" } // 여러분의 JSON 객체
)).length
var kiloBytes = Number(size / 1024).toFixed(2);
var megaBytes = Number(kiloBytes / 1024).toFixed(2);
console.log({ kiloBytes, megaBytes })
```

## 제한 사항

URL 주소는 [요청 HTTP 헤더](https://developer.mozilla.org/en-US/docs/Glossary/Request_header)의 일부이며, 아래 제한은 URL + 헤더에 적용됩니다.

### Vercel 14KB, 하드 제한

[Docs](https://vercel.com/docs/errors/URL_TOO_LONG)

### Apache httpd 8KB, 늘릴 수 있음

[Docs](https://httpd.apache.org/docs/2.2/mod/core.html#limitrequestline)

### Nginx 8KB, 늘릴 수 있음

[Docs](http://nginx.org/en/docs/http/ngx_http_core_module.html#large_client_header_buffers)

### NodeJS 8KB, `--max-http-header-size=16384`로 늘릴 수 있음

[Docs](https://github.com/nodejs/node/issues/24692)

[Docs2](https://stackoverflow.com/a/56954244/5538912)
