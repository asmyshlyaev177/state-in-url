<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · Français · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=fr source=README.md source-blob=0af71643c66bc3b309c1d1952ab56b8224a5b420 status=translated -->
<!-- i18n:end -->

# API

Ce module fournit un hook React personnalisé pour partager l'état entre des composants sans relation dans les applications React.

## Hook `useSharedState`

Un hook React personnalisé qui gère l'état partagé entre les composants.

### Paramètres :

- `defaultState: T` - Un objet représentant les valeurs d'état par défaut.
- `_getInitial?: () => T` - Fonction facultative pour obtenir l'état initial, utile pour le SSR

### Renvoie :

Un objet contenant :

- `state: T` - L'état actuel.
- `getState: () => T` - Fonction pour obtenir l'état actuel.
- `setState: T | Partial<T> | (T) => void` - Fonction pour mettre à jour l'état.

### Exemple :

```typescript
import { useSharedState } from 'state-in-url/useSharedState';

const form = { name: '', age: 0 };
const { state, getState, setState } = useSharedState(form);

// Mettre à jour l'état
setState({ name: 'test' });

// Ou mettre à jour l'état à l'aide d'une fonction
setState(curr => ({ ...curr, name: 'test' }));

// Obtenir l'état actuel
const currentState = getState();
```

## `setState`

Met à jour l'état partagé.

### Paramètres :

- `value: T | ((currState: T) => T)` - Nouvelle valeur d'état, ou une fonction qui reçoit l'état actuel et renvoie le nouvel état.

## `getState`

Renvoie l'état actuel.

### Renvoie :

- L'objet d'état actuel.
