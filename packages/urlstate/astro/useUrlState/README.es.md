<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · Español · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=es source=README.md source-blob=1e2218fc31f03646440896464e1dece6dd29d65d status=translated -->
<!-- i18n:end -->

# API

Este módulo proporciona un hook de React personalizado para gestionar el estado sincronizado con los parámetros de búsqueda de la URL en aplicaciones Astro, dentro de islas de React.

Astro no tiene router del lado del cliente por defecto, así que el hook escribe la URL con `window.history` y la vuelve a leer al navegar atrás/adelante, en sus propias escrituras y en cualquier otro `pushState`/`replaceState`, incluido el propio `<ClientRouter />` de Astro. Las islas de una misma página comparten el estado: se identifica por el objeto de estado por defecto, y todas las islas importan el mismo módulo. Con `<ClientRouter />`, una isla cuyo estado estaba en uso en la página anterior renderiza primero ese estado y se resincroniza desde la URL después del montaje.

Las islas de Preact, a través de `@astrojs/preact` con `compat: true`, usan el mismo import.

## Hook `useUrlState`

Un hook de React personalizado que gestiona el estado y lo sincroniza con los parámetros de búsqueda de la URL.

### Parámetros

- `defaultState: object` - Un objeto que representa los valores de estado por defecto.
- `searchParams?: object` - `Object.fromEntries(Astro.url.searchParams)`, pasado a la isla como prop, para que el renderizado en el servidor coincida con la URL y la hidratación no tenga nada que corregir. Un objeto plano, no `URLSearchParams`: las props de las islas se serializan, y un `URLSearchParams` llega como `{}`. La página debe renderizarse bajo demanda (`output: 'server'`, o `export const prerender = false` en la página, con un adaptador): una página prerenderizada no tiene petición, así que la isla recibe `{}` y lee la URL después de la hidratación.
- `replace?: boolean` - Controla si `setUrl` usa `replaceState` o `pushState`; por defecto replace=true, se puede anular con `setUrl(stateObj, { replace: false })`

### Devuelve

Un objeto que contiene:

- `urlState: object` - El estado actual.
- `setState: Function` - Función para actualizar el estado sin actualizar la URL.
- `setUrl: Function` - Función para actualizar tanto el estado como la URL.
- `reset: Function` - Función para restablecer el estado al valor por defecto.

### Ejemplo

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

Llama a `setState` y `setUrl` desde manejadores de eventos o efectos, nunca durante el renderizado:

```typescript
// Actualizar el estado sin cambiar la URL
setState({ name: 'test' });
setState(currVal => ({ ...currVal, name: 'test' }) );

// restablecer el estado
setState((_curr, initial) => initial);

// Actualizar el estado y la URL
setUrl({ name: 'test' }, { replace: false });

// restablecer el estado y la URL
setUrl((_curr, initial) => initial);
```

Sin islas, en una página sin framework de cliente, `decodeState` y `encodeState` de `state-in-url/encodeState` hacen el mismo trabajo en el frontmatter: decodifican `Astro.url.searchParams` en un objeto tipado y construyen la siguiente URL para un enlace.

## `setState`

Actualiza el estado sin modificar la URL.

### Parámetros de `setState`

- `value: Partial<T> | (curr: T, initial: T) => T` - Nuevo valor de estado, o una función que recibe el estado actual y el estado inicial y devuelve el nuevo estado.

## `setUrl`

Actualiza tanto el estado como la URL.

### Parámetros de `setUrl`

- `value?: Partial<T> | (curr: T, initial: T) => T` - Nuevo valor de estado opcional, o una función que recibe el estado actual y el estado inicial y devuelve el nuevo estado.
- `options?: { replace?: boolean }` - `replaceState` (por defecto) o `pushState`.

## `reset`

Restablece tanto el estado como la URL al valor por defecto.

### Parámetros de `reset`

- `options?: { replace?: boolean }` - `replaceState` (por defecto) o `pushState`.
