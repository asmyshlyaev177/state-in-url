<!-- i18n:start -->
[English](./Limits.md) · [简体中文](./Limits.zh-CN.md) · [日本語](./Limits.ja.md) · [한국어](./Limits.ko.md) · [Русский](./Limits.ru.md) · Español · [Português (BR)](./Limits.pt-BR.md) · [Français](./Limits.fr.md) · [Tiếng Việt](./Limits.vi.md)
<!-- i18n:meta locale=es source=Limits.md source-blob=3c1cb46e7a6f78a1de385946dd4a7e1f66717080 status=translated -->
<!-- i18n:end -->

# Limitación del tamaño de URL y cabeceras

Los navegadores modernos permiten especificar URLs muy largas, fácilmente 2MB.

Pero hay algunas limitaciones por parte de servidores web y CDN. En general, **solo hasta 12KB para la URI es seguro**.

## Comprobar el tamaño del JSON

Puedes meter fácilmente un par de formularios enormes en la URL sin preocuparte por alcanzar el límite.

```js
var size = new TextEncoder().encode(JSON.stringify(
    { key1: "Value 1$%^&*", key2: "⚖★☔" } // tu objeto JSON
)).length
var kiloBytes = Number(size / 1024).toFixed(2);
var megaBytes = Number(kiloBytes / 1024).toFixed(2);
console.log({ kiloBytes, megaBytes })
```

## Limitaciones

La dirección URL es parte de las [cabeceras HTTP de la solicitud](https://developer.mozilla.org/en-US/docs/Glossary/Request_header); los siguientes límites se aplican a URL + cabeceras.

### Vercel 14KB, límite duro

[Docs](https://vercel.com/docs/errors/URL_TOO_LONG)

### Apache httpd 8KB, se puede aumentar

[Docs](https://httpd.apache.org/docs/2.2/mod/core.html#limitrequestline)

### Nginx 8KB, se puede aumentar

[Docs](http://nginx.org/en/docs/http/ngx_http_core_module.html#large_client_header_buffers)

### NodeJS 8KB, se puede aumentar con `--max-http-header-size=16384`

[Docs](https://github.com/nodejs/node/issues/24692)

[Docs2](https://stackoverflow.com/a/56954244/5538912)
