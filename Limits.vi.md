<!-- i18n:start -->
[English](./Limits.md) · [简体中文](./Limits.zh-CN.md) · [日本語](./Limits.ja.md) · [한국어](./Limits.ko.md) · [Русский](./Limits.ru.md) · [Español](./Limits.es.md) · [Português (BR)](./Limits.pt-BR.md) · [Français](./Limits.fr.md) · Tiếng Việt
<!-- i18n:meta locale=vi source=Limits.md source-blob=3c1cb46e7a6f78a1de385946dd4a7e1f66717080 status=translated -->
<!-- i18n:end -->

# Giới hạn kích thước URL và header

Các trình duyệt hiện đại cho phép bạn chỉ định URL rất dài, dễ dàng tới 2MB.

Nhưng có một số giới hạn từ Web Server và CDN. Nói chung, **chỉ tối đa 12KB cho URI là an toàn**.

## Kiểm tra kích thước JSON

Có thể dễ dàng nhét vài biểu mẫu khổng lồ vào URL mà không bao giờ lo chạm giới hạn.

```js
var size = new TextEncoder().encode(JSON.stringify(
    { key1: "Value 1$%^&*", key2: "⚖★☔" } // object JSON của bạn
)).length
var kiloBytes = Number(size / 1024).toFixed(2);
var megaBytes = Number(kiloBytes / 1024).toFixed(2);
console.log({ kiloBytes, megaBytes })
```

## Các giới hạn

Địa chỉ URL là một phần của [header HTTP request](https://developer.mozilla.org/en-US/docs/Glossary/Request_header), các giới hạn sau áp dụng cho URL + header.

### Vercel 14KB, giới hạn cứng

[Docs](https://vercel.com/docs/errors/URL_TOO_LONG)

### Apache httpd 8KB, có thể tăng

[Docs](https://httpd.apache.org/docs/2.2/mod/core.html#limitrequestline)

### Nginx 8KB, có thể tăng

[Docs](http://nginx.org/en/docs/http/ngx_http_core_module.html#large_client_header_buffers)

### NodeJS 8KB, có thể tăng bằng `--max-http-header-size=16384`

[Docs](https://github.com/nodejs/node/issues/24692)

[Docs2](https://stackoverflow.com/a/56954244/5538912)
