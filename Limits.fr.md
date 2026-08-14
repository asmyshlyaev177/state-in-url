<!-- i18n:start -->
[English](./Limits.md) · [简体中文](./Limits.zh-CN.md) · [日本語](./Limits.ja.md) · [한국어](./Limits.ko.md) · [Русский](./Limits.ru.md) · [Español](./Limits.es.md) · [Português (BR)](./Limits.pt-BR.md) · Français · [Tiếng Việt](./Limits.vi.md)
<!-- i18n:meta locale=fr source=Limits.md source-blob=3c1cb46e7a6f78a1de385946dd4a7e1f66717080 status=translated -->
<!-- i18n:end -->

# Limitation de la taille des URL et des en-têtes

Les navigateurs modernes permettent de spécifier des URL très longues, facilement 2MB.

Mais il existe certaines limitations des serveurs web et des CDN. En général, **jusqu'à 12KB seulement pour l'URI est sûr**.

## Vérifier la taille du JSON

Vous pouvez facilement faire tenir quelques formulaires énormes dans l'URL sans jamais vous inquiéter d'atteindre la limite.

```js
var size = new TextEncoder().encode(JSON.stringify(
    { key1: "Value 1$%^&*", key2: "⚖★☔" } // votre objet JSON
)).length
var kiloBytes = Number(size / 1024).toFixed(2);
var megaBytes = Number(kiloBytes / 1024).toFixed(2);
console.log({ kiloBytes, megaBytes })
```

## Limitations

L'adresse URL fait partie des [en-têtes HTTP de la requête](https://developer.mozilla.org/en-US/docs/Glossary/Request_header), les limites suivantes s'appliquent donc à URL + en-têtes.

### Vercel 14KB, limite stricte

[Docs](https://vercel.com/docs/errors/URL_TOO_LONG)

### Apache httpd 8KB, peut être augmentée

[Docs](https://httpd.apache.org/docs/2.2/mod/core.html#limitrequestline)

### Nginx 8KB, peut être augmentée

[Docs](http://nginx.org/en/docs/http/ngx_http_core_module.html#large_client_header_buffers)

### NodeJS 8KB, peut être augmentée avec `--max-http-header-size=16384`

[Docs](https://github.com/nodejs/node/issues/24692)

[Docs2](https://stackoverflow.com/a/56954244/5538912)
