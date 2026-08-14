<!-- i18n:start -->
[English](./Limits.md) · [简体中文](./Limits.zh-CN.md) · [日本語](./Limits.ja.md) · [한국어](./Limits.ko.md) · Русский · [Español](./Limits.es.md) · [Português (BR)](./Limits.pt-BR.md) · [Français](./Limits.fr.md) · [Tiếng Việt](./Limits.vi.md)
<!-- i18n:meta locale=ru source=Limits.md source-blob=3c1cb46e7a6f78a1de385946dd4a7e1f66717080 status=translated -->
<!-- i18n:end -->

# Ограничение размера URL и заголовков

Современные браузеры позволяют указывать очень длинные URL — легко 2MB.

Но есть ограничения со стороны веб-серверов и CDN. В общем случае **безопасно до 12KB только для URI**.

## Проверка размера JSON

Можно легко уместить пару огромных форм в URL, не беспокоясь о достижении лимита.

```js
var size = new TextEncoder().encode(JSON.stringify(
    { key1: "Value 1$%^&*", key2: "⚖★☔" } // ваш JSON-объект
)).length
var kiloBytes = Number(size / 1024).toFixed(2);
var megaBytes = Number(kiloBytes / 1024).toFixed(2);
console.log({ kiloBytes, megaBytes })
```

## Ограничения

URL-адрес — часть [заголовков HTTP-запроса](https://developer.mozilla.org/en-US/docs/Glossary/Request_header), поэтому следующие ограничения относятся к URL + заголовкам.

### Vercel 14KB, жёсткий лимит

[Docs](https://vercel.com/docs/errors/URL_TOO_LONG)

### Apache httpd 8KB, можно увеличить

[Docs](https://httpd.apache.org/docs/2.2/mod/core.html#limitrequestline)

### Nginx 8KB, можно увеличить

[Docs](http://nginx.org/en/docs/http/ngx_http_core_module.html#large_client_header_buffers)

### NodeJS 8KB, можно увеличить через `--max-http-header-size=16384`

[Docs](https://github.com/nodejs/node/issues/24692)

[Docs2](https://stackoverflow.com/a/56954244/5538912)
