<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · Español · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=es source=README.md source-blob=dc43c5e03232b105d24b651ab42a37b8222d1f2c status=translated -->
<!-- i18n:end -->

# API

Este módulo proporciona un hook de React personalizado para gestionar el estado sincronizado con los parámetros de búsqueda de la URL en aplicaciones Next.js.

## Hook `useUrlState`

Un hook de React personalizado que gestiona el estado y lo sincroniza con los parámetros de búsqueda de la URL.

### Parámetros

- `defaultState: object` - Un objeto que representa los valores de estado por defecto.
- `searchParams?: object` - Objeto de parámetros de búsqueda opcional del componente de servidor de Next.js.
- `replace?: boolean` - Controla si `setUrl` usa el método `replace` o `push` del router; por defecto replace=true, se puede anular con `setUrl(stateObj, { replace: false })`
- `useHistory` - Opcionalmente puede usar window.history para la navegación, `true` por defecto sin solicitudes _rsc <https://github.com/vercel/next.js/discussions/59167>
- `scroll?: boolean` - Opción de push/replace del router de Next.js

### Devuelve

Un objeto que contiene:

- `urlState: object` - El estado actual.
- `setState: Function` - Función para actualizar el estado sin actualizar la URL.
- `setUrl: Function` - Función para actualizar tanto el estado como la URL.
- `reset: Function` - Función para restablecer el estado al valor por defecto.

### Prerenderizado

El hook no llama a `useSearchParams`, por lo que un componente que lo usa no necesita un límite `<Suspense>` y no excluye su página del prerenderizado. Lee el estado inicial desde los `searchParams` que pasas en el servidor y desde `window.location.search` en el cliente, y rastrea los cambios posteriores observando directamente la History API — lo que también captura cambios de URL que el router de Next nunca ve, como los que el propio hook hace en el modo `useHistory: true` por defecto.

Una página prerenderizada sigue renderizándose con el estado por defecto, porque en el momento de la compilación no hay cadena de consulta. Pasa `searchParams` desde un componente de servidor renderizado dinámicamente cuando el primer renderizado deba coincidir con una URL con estado.

### Ejemplo

```typescript
import { useUrlState } from 'state-in-url/next';

const form = { name: '', age: 0 };
const { urlState, setState, setUrl } = useUrlState(form);

// Actualizar el estado sin cambiar la URL
setState({ name: 'test' });

// API igual que React.useState
setState(currVal => ({ ...currVal, name: 'test' }) );

// restablecer el estado
setState((_curr, initial) => initial);

// Actualizar el estado y la URL
setUrl({ name: 'test' }, { replace: false, scroll: true });

// restablecer el estado y la URL
setUrl((_curr, initial) => initial);
```

## `setState`

Actualiza el estado sin modificar la URL.

### Parámetros de `setState`

- `value: Partial<T> | (curr: T, initial: T) => T` - Nuevo valor de estado, o una función que recibe el estado actual y el estado inicial y devuelve el nuevo estado.

## `setUrl`

Actualiza tanto el estado como la URL.

### Parámetros de `setUrl`

- `value?: (Partial<T> | (curr: T, initial: T) => T, options)` - Nuevo valor de estado opcional, o una función que recibe el estado actual y el estado inicial y devuelve el nuevo estado.
- `options?: Options` - Objeto de opciones opcional. Cuando `replace` es true usará router.replace. `scroll` de Nextjs es `false` por defecto.

## `reset`

Actualiza tanto el estado como la URL.

### Parámetros de `reset`

- `options?: Options` - Objeto de opciones opcional. Cuando `replace` es true usará router.replace. `scroll` de Nextjs es `false` por defecto.
