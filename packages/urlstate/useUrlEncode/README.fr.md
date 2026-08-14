<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · Français · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=fr source=README.md source-blob=5da4daf6f900b7408d4efca27beecf84275de38f status=translated -->
<!-- i18n:end -->

# API

Ce module fournit un hook React pour encoder et décoder des objets d'état vers et depuis des paramètres de recherche d'URL.

## Hook `useUrlEncode`

Un hook React personnalisé qui renvoie les fonctions `stringify` et `parse` pour encoder et décoder l'état vers et depuis des paramètres de recherche d'URL.
C'est un wrapper autour des fonctions `encodeState` et `decodeState`, mais vous pouvez fournir la forme de l'état une seule fois.

### Paramètres

- `stateShape: object` - Un objet représentant la forme de l'état.

### Renvoie

Un objet contenant deux fonctions :

- `stringify` : Fonction pour convertir l'état en une chaîne de requête d'URL.
- `parse` : Fonction pour convertir une chaîne de requête d'URL en un objet d'état.

### Exemple

```typescript
import { useUrlEncode } from 'state-in-url/useUrlEncode';

const form = { name: '' };
const { parse, stringify } = useUrlEncode(form);

// Convertir l'état en une chaîne de requête d'URL
const queryString = stringify({ name: 'John' }, 'someExistingParamToKeep=123');
console.log(queryString); // Sortie : name='John'&someExistingParamToKeep=123

// Convertir une chaîne de requête d'URL en un objet d'état
const state = parse("name='Tom'");
console.log(state); // Sortie : { name: 'Tom' }
```

## `stringify`

Convertit un objet d'état en une chaîne de requête d'URL.

### Paramètres

- `state: T` - L'objet d'état à convertir en chaîne.
- `paramsToKeep?: string | URLSearchParams` - Paramètres existants facultatifs à conserver dans la chaîne de requête résultante.

### Renvoie

Une chaîne représentant la chaîne de requête d'URL.

## `parse`

Convertit une chaîne de requête d'URL ou un objet URLSearchParams en un objet d'état.

### Paramètres

- `strOrSearchParams: string | URLSearchParams` - La chaîne de requête d'URL ou l'objet URLSearchParams à convertir.

### Renvoie

L'objet d'état converti.

### Exemple

```typescript
// Convertir une chaîne de requête d'URL en un objet d'état
const state = parse("name='Tom'");
console.log(state); // Sortie : { name: 'Tom' }
```
