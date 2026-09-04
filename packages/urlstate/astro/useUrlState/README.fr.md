<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · Français · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=fr source=README.md source-blob=1e2218fc31f03646440896464e1dece6dd29d65d status=translated -->
<!-- i18n:end -->

# API

Ce module fournit un hook React personnalisé pour gérer l'état synchronisé avec les paramètres de recherche de l'URL dans les applications Astro, à l'intérieur d'îlots React.

Astro n'a pas de routeur côté client par défaut, donc le hook écrit l'URL avec `window.history` et la relit lors des navigations précédent/suivant, lors de ses propres écritures, et lors de tout autre `pushState`/`replaceState`, y compris le `<ClientRouter />` d'Astro. Les îlots d'une même page partagent l'état : il est indexé par l'objet d'état par défaut, et chaque îlot importe le même module. Sous `<ClientRouter />`, un îlot dont l'état était en cours d'utilisation sur la page précédente affiche d'abord cet état, puis se resynchronise depuis l'URL après le montage.

Les îlots Preact, via `@astrojs/preact` avec `compat: true`, utilisent le même import.

## Hook `useUrlState`

Un hook React personnalisé qui gère l'état et le synchronise avec les paramètres de recherche de l'URL.

### Paramètres

- `defaultState: object` - Un objet représentant les valeurs d'état par défaut.
- `searchParams?: object` - `Object.fromEntries(Astro.url.searchParams)`, passé à l'îlot en tant que prop, afin que le rendu serveur corresponde à l'URL et que l'hydratation n'ait rien à corriger. Un objet simple, pas un `URLSearchParams` : les props d'îlot sont sérialisées, et un `URLSearchParams` arrive sous la forme `{}`. La page doit être rendue à la demande (`output: 'server'`, ou `export const prerender = false` sur la page, avec un adaptateur) : une page prérendue n'a pas de requête, donc l'îlot reçoit `{}` et lit l'URL après l'hydratation.
- `replace?: boolean` - Contrôle si `setUrl` utilisera `replaceState` ou `pushState`, par défaut replace=true, peut être remplacé par `setUrl(stateObj, { replace: false })`

### Renvoie

Un objet contenant :

- `urlState: object` - L'état actuel.
- `setState: Function` - Fonction pour mettre à jour l'état sans mettre à jour l'URL.
- `setUrl: Function` - Fonction pour mettre à jour à la fois l'état et l'URL.
- `reset: Function` - Fonction pour réinitialiser l'état à la valeur par défaut.

### Exemple

```astro
---
// src/pages/index.astro
import { Form } from '../components/Form';

const searchParams = Object.fromEntries(Astro.url.searchParams);
---

<Form client:load searchParams={searchParams} />
```

```tsx
// src/components/Form.tsx
import { useUrlState } from 'state-in-url/astro';

const form = { name: '', age: 0 };

export function Form({ searchParams }: { searchParams?: Record<string, string> }) {
  const { urlState, setState, setUrl } = useUrlState(form, { searchParams });

  return (
    <input
      value={urlState.name}
      onChange={(ev) => setUrl({ name: ev.target.value })}
    />
  );
}
```

Appelez `setState` et `setUrl` depuis des gestionnaires d'événements ou des effets, jamais pendant le rendu :

```typescript
// Mettre à jour l'état sans changer l'URL
setState({ name: 'test' });
setState(currVal => ({ ...currVal, name: 'test' }) );

// réinitialiser l'état
setState((_curr, initial) => initial);

// Mettre à jour l'état et l'URL
setUrl({ name: 'test' }, { replace: false });

// réinitialiser l'état et l'URL
setUrl((_curr, initial) => initial);
```

Sans îlots, sur une page sans framework client, `decodeState` et `encodeState` de `state-in-url/encodeState` font le même travail dans le frontmatter : décoder `Astro.url.searchParams` en un objet typé, et construire l'URL suivante pour un lien.

## `setState`

Met à jour l'état sans modifier l'URL.

### Paramètres de `setState`

- `value: Partial<T> | (curr: T, initial: T) => T` - Nouvelle valeur d'état, ou une fonction qui reçoit l'état actuel et l'état initial et renvoie le nouvel état.

## `setUrl`

Met à jour à la fois l'état et l'URL.

### Paramètres de `setUrl`

- `value?: Partial<T> | (curr: T, initial: T) => T` - Nouvelle valeur d'état facultative, ou une fonction qui reçoit l'état actuel et l'état initial et renvoie le nouvel état.
- `options?: { replace?: boolean }` - `replaceState` (par défaut) ou `pushState`.

## `reset`

Réinitialise à la fois l'état et l'URL à la valeur par défaut.

### Paramètres de `reset`

- `options?: { replace?: boolean }` - `replaceState` (par défaut) ou `pushState`.
