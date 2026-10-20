<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · Français · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=fr source=README.md source-blob=bbfd8f6275cd93591d4e3680f8dd35a7ec004b30 status=translated -->
<!-- i18n:end -->

# API

Ce hook peut être utilisé comme base pour créer des hooks pour différents routeurs.

## Hook `useUrlStateBase`

Un hook React personnalisé pour créer des hooks `useUrlState` personnalisés.

### Paramètres :

- `defaultState: object` - Un objet représentant les valeurs d'état par défaut.
- `router: object` - Objet routeur avec les méthodes `push` et `replace`
- `getInitialState?: function` - Fonction facultative qui renvoie l'état initial.
- `basename?: string` - Basename optionnel du routeur, retiré du pathname avant l'écriture de l'URL.
- `canSeedFromUrl?: boolean` - Indique si `getInitialState` lit la route en cours de rendu, `true` par défaut. Un hook monté seul part alors de celle-ci plutôt que de l'état laissé par un hook démonté. Passez `false` quand le routeur ne met à jour `window.location` qu'après le rendu, comme le fait Next.js.

### Renvoie :

Un objet contenant :

- `state: object` - L'état actuel.
- `getState: Function` - Fonction pour obtenir l'état.
- `updateState: Function` - Fonction pour mettre à jour l'état sans mettre à jour l'URL.
- `updateUrl: Function` - Fonction pour mettre à jour à la fois l'état et l'URL.
- `reset: Function` - Fonction pour réinitialiser l'état et l'url aux valeurs par défaut

### Exemple :

```typescript
import { useUrlStateBase } from 'state-in-url/useUrlStateBase';

function useUrlStateCustom<T>(state: T) {
  const router = React.useMemo({
    push: (url: string) => window.history.pushState(url),
    replace: (url: string) => window.history.replaceState(url)
  }, []);
  return useUrlState(state, router);
}
```

## `updateState`

Met à jour l'état sans modifier l'URL.

### Paramètres :

- `value: T | Partial<T> | T => T` - Nouvelle valeur d'état, ou une fonction qui reçoit l'état actuel et renvoie le nouvel état.

## `updateUrl`

Met à jour à la fois l'état et l'URL.

### Paramètres :

- `value?: T | Partial<T> | (currState: T) => T` - Nouvelle valeur d'état facultative, ou une fonction qui reçoit l'état actuel et renvoie le nouvel état.
- `options?: Options` - Objet d'options facultatif. Lorsque `replace` est true, utilisera router.replace. Autres options natives nextjs pour le push/replace du `router`.

## `reset`

Réinitialise l'état et l'URL aux valeurs par défaut.

### Paramètres :

- `options?: Options` - Objet d'options facultatif. Lorsque `replace` est true, utilisera router.replace. Autres options natives nextjs pour le push/replace du `router`.
