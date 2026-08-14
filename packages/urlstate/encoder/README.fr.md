<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · Français · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=fr source=README.md source-blob=bff98298b23252671a744c36020c2f4288a27fa8 status=translated -->
<!-- i18n:end -->

# API

## `encode`

Pour encoder n'importe quelle valeur sérialisable en JSON en une chaîne.

### Paramètres

- `object` - L'objet d'état à encoder.

### Renvoie

Une chaîne encodée.

### Exemple

```typescript
import { encode } from 'state-in-url/encoder';

// en paramètres
const params = new URLSearchParams();
for (const [key, value] of Object.entries(state)) {
  params.set(key, encode(value));
}
const str = params.toString();
```

## `decode`

Pour convertir une chaîne précédemment encodée en un objet.

### Paramètres

- `payload: string` - Une chaîne à décoder.
- `defaults?: object` - Objet de forme, ces valeurs seront utilisées comme valeurs par défaut.

### Renvoie

Un objet décodé.

### Exemple

```typescript
import { decode } from 'state-in-url/encoder';

// à partir des paramètres
const obj = Object.fromEntries(
  [...params.entries()].map(([key, value]) => [
    key,
    // decode(value, optionalFallback),
    decode(value),
  ]),
)

```
