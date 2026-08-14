<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · Español · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=es source=README.md source-blob=0af71643c66bc3b309c1d1952ab56b8224a5b420 status=translated -->
<!-- i18n:end -->

# API

Este módulo proporciona un hook de React personalizado para compartir estado entre componentes no relacionados en aplicaciones React.

## Hook `useSharedState`

Un hook de React personalizado que gestiona el estado compartido entre componentes.

### Parámetros:

- `defaultState: T` - Un objeto que representa los valores de estado por defecto.
- `_getInitial?: () => T` - Función opcional para obtener el estado inicial, útil para SSR

### Devuelve:

Un objeto que contiene:

- `state: T` - El estado actual.
- `getState: () => T` - Función para obtener el estado actual.
- `setState: T | Partial<T> | (T) => void` - Función para actualizar el estado.

### Ejemplo:

```typescript
import { useSharedState } from 'state-in-url/useSharedState';

const form = { name: '', age: 0 };
const { state, getState, setState } = useSharedState(form);

// Actualizar el estado
setState({ name: 'test' });

// O actualizar el estado usando una función
setState(curr => ({ ...curr, name: 'test' }));

// Obtener el estado actual
const currentState = getState();
```

## `setState`

Actualiza el estado compartido.

### Parámetros:

- `value: T | ((currState: T) => T)` - Nuevo valor de estado, o una función que recibe el estado actual y devuelve el nuevo estado.

## `getState`

Devuelve el estado actual.

### Devuelve:

- El objeto de estado actual.
