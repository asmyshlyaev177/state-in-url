<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · Français · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=fr source=README.md source-blob=dc43c5e03232b105d24b651ab42a37b8222d1f2c status=translated -->
<!-- i18n:end -->

# API

Ce module fournit un hook React personnalisé pour gérer l'état synchronisé avec les paramètres de recherche de l'URL dans les applications Next.js.

## Hook `useUrlState`

Un hook React personnalisé qui gère l'état et le synchronise avec les paramètres de recherche de l'URL.

### Paramètres

- `defaultState: object` - Un objet représentant les valeurs d'état par défaut.
- `searchParams?: object` - Objet de paramètres de recherche facultatif du composant serveur Next.js.
- `replace?: boolean` - Contrôle si `setUrl` utilisera la méthode `replace` ou `push` du routeur, par défaut replace=true, peut être remplacé par `setUrl(stateObj, { replace: false })`
- `useHistory` - Peut éventuellement utiliser window.history pour la navigation, `true` par défaut sans requêtes _rsc <https://github.com/vercel/next.js/discussions/59167>
- `scroll?: boolean` - Option du push/replace du routeur Next.js

### Renvoie

Un objet contenant :

- `urlState: object` - L'état actuel.
- `setState: Function` - Fonction pour mettre à jour l'état sans mettre à jour l'URL.
- `setUrl: Function` - Fonction pour mettre à jour à la fois l'état et l'URL.
- `reset: Function` - Fonction pour réinitialiser l'état à la valeur par défaut.

### Pré-rendu

Le hook n'appelle pas `useSearchParams`, donc un composant qui l'utilise n'a pas besoin d'une limite `<Suspense>` et n'exclut pas sa page du pré-rendu. Il lit l'état initial depuis les `searchParams` que vous passez côté serveur et depuis `window.location.search` côté client, et il suit les changements ultérieurs en observant directement la History API — ce qui capture aussi les changements d'URL que le routeur de Next ne voit jamais, comme ceux que ce hook effectue lui-même dans le mode `useHistory: true` par défaut.

Une page pré-rendue s'affiche toujours avec l'état par défaut, car au moment de la compilation il n'y a pas de chaîne de requête. Passez `searchParams` depuis un composant serveur rendu dynamiquement lorsque le premier rendu doit correspondre à une URL avec état.

### Exemple

```typescript
import { useUrlState } from 'state-in-url/next';

const form = { name: '', age: 0 };
const { urlState, setState, setUrl } = useUrlState(form);

// Mettre à jour l'état sans changer l'URL
setState({ name: 'test' });

// API identique à React.useState
setState(currVal => ({ ...currVal, name: 'test' }) );

// réinitialiser l'état
setState((_curr, initial) => initial);

// Mettre à jour l'état et l'URL
setUrl({ name: 'test' }, { replace: false, scroll: true });

// réinitialiser l'état et l'URL
setUrl((_curr, initial) => initial);
```

## `setState`

Met à jour l'état sans modifier l'URL.

### Paramètres de `setState`

- `value: Partial<T> | (curr: T, initial: T) => T` - Nouvelle valeur d'état, ou une fonction qui reçoit l'état actuel et l'état initial et renvoie le nouvel état.

## `setUrl`

Met à jour à la fois l'état et l'URL.

### Paramètres de `setUrl`

- `value?: (Partial<T> | (curr: T, initial: T) => T, options)` - Nouvelle valeur d'état facultative, ou une fonction qui reçoit l'état actuel et l'état initial et renvoie le nouvel état.
- `options?: Options` - Objet d'options facultatif. Lorsque `replace` est true, utilisera router.replace. Le `scroll` de Nextjs est `false` par défaut.

## `reset`

Met à jour à la fois l'état et l'URL.

### Paramètres de `reset`

- `options?: Options` - Objet d'options facultatif. Lorsque `replace` est true, utilisera router.replace. Le `scroll` de Nextjs est `false` par défaut.
