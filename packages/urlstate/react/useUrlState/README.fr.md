<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · Français · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=fr source=README.md source-blob=da24fd34a3d4ed9b3d2fdcdc46897b6756d2a208 status=translated -->
<!-- i18n:end -->

# API

Ce module fournit un hook React personnalisé pour gérer un état synchronisé avec les paramètres de recherche de l'URL, destiné aux applications React **sans routeur** : Vite, Create React App, ou un widget monté dans une page que vous ne contrôlez pas.

Faute de routeur pour naviguer, le hook écrit l'URL avec `window.history` et la relit lors des retours/avances, lors de ses propres écritures et lors de tout autre `pushState`/`replaceState`. Tous les composants qui partagent l'objet d'état par défaut partagent l'état, il n'y a donc rien à transmettre.

Utilisez plutôt le point d'entrée du routeur si l'application en a un : `state-in-url/next`, `state-in-url/react-router`, `state-in-url/react-router6`, `state-in-url/remix`. Pour un routeur auquel ce paquet ne consacre pas de point d'entrée, par exemple TanStack Router, construisez votre propre hook avec [`useUrlStateBase`](../../useUrlStateBase). `state-in-url/astro` est ce même hook, documenté pour les [îlots](../../astro/useUrlState).

## Hook `useUrlState`

Un hook React personnalisé qui gère l'état et le synchronise avec les paramètres de recherche de l'URL.

### Paramètres

- `defaultState: object` - Un objet représentant les valeurs d'état par défaut. Ce doit être une constante de portée module : l'état est partagé par l'identité de cet objet.
- `searchParams?: object` - Les paramètres de requête issus d'un rendu serveur, sous forme d'objet simple, pour que le premier rendu corresponde à l'URL. Une application uniquement côté client l'omet et le hook lit l'URL lui-même.
- `replace?: boolean` - Détermine si `setUrl` utilise `replaceState` ou `pushState` ; par défaut replace=true, et l'on peut surcharger avec `setUrl(stateObj, { replace: false })`

### Renvoie

Un objet contenant :

- `urlState: object` - L'état courant.
- `setState: Function` - Fonction pour mettre à jour l'état sans mettre à jour l'URL.
- `setUrl: Function` - Fonction pour mettre à jour à la fois l'état et l'URL.
- `reset: Function` - Fonction pour réinitialiser l'état à sa valeur par défaut.

### Exemple

```tsx
// src/useFilters.ts
import { useUrlState } from 'state-in-url/react';

type FiltersState = { sort: 'name' | 'date'; page: number };
const FILTERS_STATE: FiltersState = { sort: 'name', page: 1 };

export function useFilters() {
  return useUrlState(FILTERS_STATE);
}
```

```tsx
// src/FiltersBar.tsx
import { useFilters } from './useFilters';

export function FiltersBar() {
  const { urlState, setUrl } = useFilters();

  return (
    <button onClick={() => setUrl({ page: urlState.page + 1 })}>
      Page {urlState.page}
    </button>
  );
}
```

Tout autre composant appelant `useFilters()` lit et écrit le même état et se rerend avec lui. Il n'y a pas de provider et rien à passer par les props.

Appelez `setState` et `setUrl` depuis des gestionnaires d'événements ou des effets, jamais pendant le rendu :

```typescript
// Mettre à jour l'état sans changer l'URL
setState({ sort: 'date' });
setState(currVal => ({ ...currVal, sort: 'date' }) );

// réinitialiser l'état
setState((_curr, initial) => initial);

// Mettre à jour l'état et l'URL
setUrl({ sort: 'date' }, { replace: false });

// réinitialiser l'état et l'URL
setUrl((_curr, initial) => initial);
```

Pour un champ de texte, appelez `setState` à chaque frappe et `setUrl` au blur ou avec un debounce : les écritures dans l'URL sont limitées, et lier `setUrl` à `onChange` donne une saisie qui paraît lente.
