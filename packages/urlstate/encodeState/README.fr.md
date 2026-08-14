<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · Français · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=fr source=README.md source-blob=40edfb0d91bbc55f4ad8f487521aaa8b90d1df98 status=translated -->
<!-- i18n:end -->

# API

Ce module fournit des fonctions pour encoder et décoder des objets d'état vers et depuis des chaînes de requête d'URL.

## `encodeState`

Encode un objet d'état dans une chaîne de requête d'URL.

### Paramètres

- `state: object` - L'objet d'état à encoder.
- `defaults?: object` - Valeurs par défaut facultatives pour l'objet d'état.
- `paramsToKeep?: string | URLSearchParams` - Paramètres existants facultatifs à conserver dans la chaîne de requête résultante.

### Renvoie

Une chaîne représentant la chaîne de requête d'URL encodée.

### Exemple

```typescript
import { encodeState } from 'state-in-url/encodeState';

const form = { name: '' };
const encodedState = encodeState({ name: 'test' }, form, 'someExistingParam=123');
console.log(encodedState); // Sortie : name=test&someExistingParam=123
```

## `decodeState`

Décode une chaîne URI en un objet.

### Paramètres

- `uriString: string | URLSearchParams` - La chaîne URI ou l'objet URLSearchParams à décoder.
- `defaults?: T` - Valeurs par défaut facultatives pour l'objet résultant.

### Renvoie

L'objet décodé.

### Exemple

```typescript
import { decodeState } from 'state-in-url/encodeState';

const form = { name: '', key: '' };
const decodedState = decodeState('key=value&name=Alex', form);
console.log(decodedState); // Sortie : { name: 'Alex', key: 'value }
```
