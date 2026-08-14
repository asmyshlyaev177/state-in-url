<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · Español · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=es source=README.md source-blob=1c8bfbd0d0f5f8b7ac5ea33a5a298550b0141f5f status=translated -->
<!-- i18n:end -->

# API

Este módulo proporciona un hook de React personalizado para gestionar el estado sincronizado con los parámetros de búsqueda de la URL en aplicaciones react-router@6-7.

## Hook `useUrlState`

Un hook de React personalizado que gestiona el estado y lo sincroniza con los parámetros de búsqueda de la URL.

### Parámetros

- `defaultState: object` - Un objeto que representa los valores de estado por defecto.
- `replace?: boolean` - Controla si `setUrl` usa el método `replace` o `push` del router; por defecto replace=true, se puede anular con `updateUrl(stateObj, { replace: false })`
- `options?: NavigateOptions` - El argumento `replace` y los tipos de [`NavigateOptions`](https://api.reactrouter.com/v7/interfaces/react_router.NavigateOptions.html) del tipo `react-router`, igual que las opciones de `useNavigate`
- `useHistory` - Opcionalmente puede usar window.history para la navegación
- `preventScrollReset` - Opción de navigate de react-router

### Devuelve

Un objeto que contiene:

- `urlState: object` - El estado actual.
- `setState: Function` - Función para actualizar el estado sin actualizar la URL.
- `setUrl: Function` - Función para actualizar tanto el estado como la URL.
- `reset: Function` - Función para restablecer el estado al valor por defecto.

### Ejemplo

```typescript
import { useUrlState } from 'state-in-url/react-router';

const form = { name: '', age: 0 };
const { urlState, setState, setUrl } = useUrlState(form);

// Actualizar el estado sin cambiar la URL
setState({ name: 'test' });
setState(currVal => ({ ...currVal, name: 'test' }) );

// restablecer el estado
setState((_curr, initial) => initial);

// Actualizar el estado y la URL
// opciones del tipo `NavigateOptions` de 'react-router`
setUrl({ name: 'test' }, { replace: false, preventScrollReset: false });

// restablecer el estado y la URL
setUrl((_curr, initial) => initial);
```

## `setState`

Actualiza el estado sin modificar la URL.

### Parámetros de `setState`

- `value: Partial<T> | (curr: T, initial: T) => T` - Nuevo valor de estado, o una función que recibe el estado actual y el estado inicial y devuelve el nuevo estado.
- `...NavigateOptions` - props de NavigateOptions del tipo `react-router`, igual que las opciones de `useNavigate`

## `setUrl`

Actualiza tanto el estado como la URL.

### Parámetros de `setUrl`

- `value?: (Partial<T> | (curr: T, initial: T) => T, options)` - Nuevo valor de estado opcional, o una función que recibe el estado actual y el estado inicial y devuelve el nuevo estado.
- `options?: NavigateOptions` - Objeto de opciones opcional del tipo [`NavigateOptions`](https://api.reactrouter.com/v7/interfaces/react_router.NavigateOptions.html) de react-router.

## `reset`

Actualiza tanto el estado como la URL.

### Parámetros de `reset`

- `options?: NavigateOptions` - Objeto de opciones opcional del tipo [`NavigateOptions`](https://api.reactrouter.com/v7/interfaces/react_router.NavigateOptions.html) de react-router.
