<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · Español · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=es source=README.md source-blob=bbfd8f6275cd93591d4e3680f8dd35a7ec004b30 status=translated -->
<!-- i18n:end -->

# API

Este hook se puede usar como base para crear hooks para diferentes routers.

## Hook `useUrlStateBase`

Un hook de React personalizado para crear hooks `useUrlState` personalizados.

### Parámetros:

- `defaultState: object` - Un objeto que representa los valores de estado por defecto.
- `router: object` - Objeto router con métodos `push` y `replace`
- `getInitialState?: function` - Función opcional que devuelve el estado inicial.
- `basename?: string` - Basename opcional del router; se quita del pathname antes de escribir la URL.
- `canSeedFromUrl?: boolean` - Si `getInitialState` lee la ruta que se está renderizando, por defecto `true`. Un hook que se monta solo parte entonces de ella en lugar del estado que dejó un hook desmontado. Pase `false` cuando el router mueve `window.location` solo después del render, como hace Next.js.

### Devuelve:

Un objeto que contiene:

- `state: object` - El estado actual.
- `getState: Function` - Función para obtener el estado.
- `updateState: Function` - Función para actualizar el estado sin actualizar la URL.
- `updateUrl: Function` - Función para actualizar tanto el estado como la URL.
- `reset: Function` - Función para restablecer el estado y la url a los valores por defecto

### Ejemplo:

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

Actualiza el estado sin modificar la URL.

### Parámetros:

- `value: T | Partial<T> | T => T` - Nuevo valor de estado, o una función que recibe el estado actual y devuelve el nuevo estado.

## `updateUrl`

Actualiza tanto el estado como la URL.

### Parámetros:

- `value?: T | Partial<T> | (currState: T) => T` - Nuevo valor de estado opcional, o una función que recibe el estado actual y devuelve el nuevo estado.
- `options?: Options` - Objeto de opciones opcional. Cuando `replace` es true usará router.replace. Otras opciones nativas de nextjs para push/replace del `router`.

## `reset`

Restablece el estado y la URL a los valores por defecto.

### Parámetros:

- `options?: Options` - Objeto de opciones opcional. Cuando `replace` es true usará router.replace. Otras opciones nativas de nextjs para push/replace del `router`.
