<!-- i18n:start -->
[English](./Limits.md) · [简体中文](./Limits.zh-CN.md) · [日本語](./Limits.ja.md) · [한국어](./Limits.ko.md) · [Русский](./Limits.ru.md) · [Español](./Limits.es.md) · Português (BR) · [Français](./Limits.fr.md) · [Tiếng Việt](./Limits.vi.md)
<!-- i18n:meta locale=pt-BR source=Limits.md source-blob=3c1cb46e7a6f78a1de385946dd4a7e1f66717080 status=translated -->
<!-- i18n:end -->

# Limitação do tamanho de URL e cabeçalhos

Os navegadores modernos permitem especificar URLs muito longas, facilmente 2MB.

Mas há algumas limitações de servidores web e CDN. Em geral, **apenas até 12KB para a URI é seguro**.

## Verificar o tamanho do JSON

Você pode facilmente encaixar alguns formulários enormes na URL sem se preocupar em atingir o limite.

```js
var size = new TextEncoder().encode(JSON.stringify(
    { key1: "Value 1$%^&*", key2: "⚖★☔" } // seu objeto JSON
)).length
var kiloBytes = Number(size / 1024).toFixed(2);
var megaBytes = Number(kiloBytes / 1024).toFixed(2);
console.log({ kiloBytes, megaBytes })
```

## Limitações

O endereço URL faz parte dos [cabeçalhos HTTP da solicitação](https://developer.mozilla.org/en-US/docs/Glossary/Request_header); os limites a seguir se aplicam a URL + cabeçalhos.

### Vercel 14KB, limite rígido

[Docs](https://vercel.com/docs/errors/URL_TOO_LONG)

### Apache httpd 8KB, pode ser aumentado

[Docs](https://httpd.apache.org/docs/2.2/mod/core.html#limitrequestline)

### Nginx 8KB, pode ser aumentado

[Docs](http://nginx.org/en/docs/http/ngx_http_core_module.html#large_client_header_buffers)

### NodeJS 8KB, pode ser aumentado com `--max-http-header-size=16384`

[Docs](https://github.com/nodejs/node/issues/24692)

[Docs2](https://stackoverflow.com/a/56954244/5538912)
