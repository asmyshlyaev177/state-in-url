<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · Español · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=es source=README.md source-blob=da24fd34a3d4ed9b3d2fdcdc46897b6756d2a208 status=translated -->
<!-- i18n:end -->

# API

Este módulo proporciona un hook de React personalizado para gestionar estado sincronizado con los parámetros de búsqueda de la URL, para aplicaciones React **sin router**: Vite, Create React App, o un widget montado en una página que no controlas.

Al no haber un router por el que navegar, el hook escribe la URL con `window.history` y la vuelve a leer al ir atrás/adelante, en sus propias escrituras y en cualquier otro `pushState`/`replaceState`. Todos los componentes que comparten el objeto de estado por defecto comparten el estado, así que no hay que pasar nada hacia abajo.

Usa el punto de entrada del router cuando la aplicación tenga uno: `state-in-url/next`, `state-in-url/react-router`, `state-in-url/react-router6`, `state-in-url/remix`. Para un router al que este paquete no dedica un punto de entrada, por ejemplo TanStack Router, construye tu propio hook con [`useUrlStateBase`](../../useUrlStateBase). `state-in-url/astro` es este mismo hook, documentado para [islas](../../astro/useUrlState).

## Hook `useUrlState`

Un hook de React personalizado que gestiona el estado y lo sincroniza con los parámetros de búsqueda de la URL.

### Parámetros

- `defaultState: object` - Un objeto con los valores de estado por defecto. Debe ser una constante en el ámbito del módulo: el estado se comparte por la identidad de este objeto.
- `searchParams?: object` - Los parámetros de consulta de un render en servidor, como objeto plano, para que el primer render coincida con la URL. Una aplicación solo de cliente lo omite y el hook lee la URL por su cuenta.
- `replace?: boolean` - Controla si `setUrl` usa `replaceState` o `pushState`; por defecto replace=true, se puede sobrescribir con `setUrl(stateObj, { replace: false })`

### Devuelve

Un objeto que contiene:

- `urlState: object` - El estado actual.
- `setState: Function` - Función para actualizar el estado sin actualizar la URL.
- `setUrl: Function` - Función para actualizar tanto el estado como la URL.
- `reset: Function` - Función para restablecer el estado a sus valores por defecto.

### Ejemplo

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

Cualquier otro componente que llame a `useFilters()` lee y escribe el mismo estado y se vuelve a renderizar con él. No hay provider ni nada que pasar por props.

Llama a `setState` y `setUrl` desde manejadores de eventos o efectos, nunca durante el render:

```typescript
// Actualizar el estado sin cambiar la URL
setState({ sort: 'date' });
setState(currVal => ({ ...currVal, sort: 'date' }) );

// restablecer el estado
setState((_curr, initial) => initial);

// Actualizar el estado y la URL
setUrl({ sort: 'date' }, { replace: false });

// restablecer el estado y la URL
setUrl((_curr, initial) => initial);
```

En un campo de texto, llama a `setState` en cada pulsación y `setUrl` al perder el foco o con un debounce: las escrituras en la URL están limitadas, y atar `setUrl` a `onChange` hace que escribir se sienta lento.
