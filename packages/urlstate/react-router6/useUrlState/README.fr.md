<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · Français · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=fr source=README.md source-blob=7f1a0b9b6347360148100d95626ead84f8200c12 status=translated -->
<!-- i18n:end -->

# API

Ce module fournit un hook React personnalisé pour gérer l'état synchronisé avec les paramètres de recherche de l'URL dans les applications react-router@6-7.

## Hook `useUrlState`

Un hook React personnalisé qui gère l'état et le synchronise avec les paramètres de recherche de l'URL.

### Paramètres

- `defaultState: object` - Un objet représentant les valeurs d'état par défaut.
- `replace?: boolean` - Contrôle si `setUrl` utilisera la méthode `replace` ou `push` du routeur, par défaut replace=true, peut être remplacé par `updateUrl(stateObj, { replace: false })`
- `options?: NavigateOptions` - L'argument `replace` et les types de [`NavigateOptions`](https://api.reactrouter.com/v7/interfaces/react_router.NavigateOptions.html) du type `react-router`, identiques aux options de `useNavigate`
- `useHistory` - Peut éventuellement utiliser window.history pour la navigation
- `preventScrollReset` - Option du navigate de react-router

### Renvoie

Un objet contenant :

- `urlState: object` - L'état actuel.
- `setState: Function` - Fonction pour mettre à jour l'état sans mettre à jour l'URL.
- `setUrl: Function` - Fonction pour mettre à jour à la fois l'état et l'URL.
- `reset: Function` - Fonction pour réinitialiser l'état à la valeur par défaut.

### Exemple

```typescript
import { useUrlState } from 'state-in-url/react-router6';

const form = { name: '', age: 0 };
const { urlState, setState, setUrl } = useUrlState(form);

// Mettre à jour l'état sans changer l'URL
setState({ name: 'test' });
setState(currVal => ({ ...currVal, name: 'test' }) );

// réinitialiser l'état
setState((_curr, initial) => initial);

// Mettre à jour l'état et l'URL
// options du type `NavigateOptions` de 'react-router`
setUrl({ name: 'test' }, { replace: false, preventScrollReset: false });

// réinitialiser l'état et l'URL
setUrl((_curr, initial) => initial);
```

## `setState`

Met à jour l'état sans modifier l'URL.

### Paramètres de `setState`

- `value: Partial<T> | (curr: T, initial: T) => T` - Nouvelle valeur d'état, ou une fonction qui reçoit l'état actuel et l'état initial et renvoie le nouvel état.
- `...NavigateOptions` - props de NavigateOptions du type `react-router`, identiques aux options de `useNavigate`

## `setUrl`

Met à jour à la fois l'état et l'URL.

### Paramètres de `setUrl`

- `value?: (Partial<T> | (curr: T, initial: T) => T, options)` - Nouvelle valeur d'état facultative, ou une fonction qui reçoit l'état actuel et l'état initial et renvoie le nouvel état.
- `options?: NavigateOptions` - Objet d'options facultatif du type [`NavigateOptions`](https://api.reactrouter.com/v7/interfaces/react_router.NavigateOptions.html) de react-router.

## `reset`

Met à jour à la fois l'état et l'URL.

### Paramètres de `reset`

- `options?: NavigateOptions` - Objet d'options facultatif du type [`NavigateOptions`](https://api.reactrouter.com/v7/interfaces/react_router.NavigateOptions.html) de react-router.
