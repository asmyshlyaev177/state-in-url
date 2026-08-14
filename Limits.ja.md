<!-- i18n:start -->
[English](./Limits.md) · [简体中文](./Limits.zh-CN.md) · 日本語 · [한국어](./Limits.ko.md) · [Русский](./Limits.ru.md) · [Español](./Limits.es.md) · [Português (BR)](./Limits.pt-BR.md) · [Français](./Limits.fr.md) · [Tiếng Việt](./Limits.vi.md)
<!-- i18n:meta locale=ja source=Limits.md source-blob=3c1cb46e7a6f78a1de385946dd4a7e1f66717080 status=translated -->
<!-- i18n:end -->

# URL とヘッダーのサイズ制限

現代のブラウザでは非常に長い URL(簡単に 2MB)を指定できます。

ただし、Web サーバーや CDN にはいくつか制限があります。一般的に、**URI については最大 12KB までが安全**です。

## JSON サイズの確認

上限に達する心配をせずに、いくつかの巨大なフォームを URL に簡単に収められます。

```js
var size = new TextEncoder().encode(JSON.stringify(
    { key1: "Value 1$%^&*", key2: "⚖★☔" } // あなたの JSON オブジェクト
)).length
var kiloBytes = Number(size / 1024).toFixed(2);
var megaBytes = Number(kiloBytes / 1024).toFixed(2);
console.log({ kiloBytes, megaBytes })
```

## 制限

URL アドレスは [リクエスト HTTP ヘッダー](https://developer.mozilla.org/en-US/docs/Glossary/Request_header) の一部であり、以下の制限は URL + ヘッダーに対するものです。

### Vercel 14KB、ハードリミット

[Docs](https://vercel.com/docs/errors/URL_TOO_LONG)

### Apache httpd 8KB、増やせます

[Docs](https://httpd.apache.org/docs/2.2/mod/core.html#limitrequestline)

### Nginx 8KB、増やせます

[Docs](http://nginx.org/en/docs/http/ngx_http_core_module.html#large_client_header_buffers)

### NodeJS 8KB、`--max-http-header-size=16384` で増やせます

[Docs](https://github.com/nodejs/node/issues/24692)

[Docs2](https://stackoverflow.com/a/56954244/5538912)
