<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · Español · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=es source=README.md source-blob=01b5b4f72aa3c8871c185cfce21c6d696edb847b status=translated -->
<!-- i18n:end -->

<div align="center">
  <img src="/packages/example-nextjs14/public/Logo_symbol.png" alt="logotipo de state-in-url" width="120px" />

  # State in url
</div>

<div align="center">
</div>

<div align="center">

[![Available for hire](https://img.shields.io/badge/available%20for%20hire-senior%20react%20engineer-2ea44f?style=flat-square)](https://asmyshlyaev177.dev)

[![npm](https://img.shields.io/npm/v/state-in-url.svg)](https://www.npmjs.com/package/state-in-url)
![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/state-in-url.svg)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/73be54068b7f41b0b74a252579ac09ec)](https://app.codacy.com/gh/asmyshlyaev177/state-in-url/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)

![Tests](https://github.com/asmyshlyaev177/state-in-url/actions/workflows/tests.yml/badge.svg?branch=master)
[![Codacy Badge](https://app.codacy.com/project/badge/Coverage/73be54068b7f41b0b74a252579ac09ec)](https://app.codacy.com/gh/asmyshlyaev177/state-in-url/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_coverage)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](https://github.com/asmyshlyaev177/state-in-url/)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)]([https://github.com/semantic-release/semantic-release](https://github.com/asmyshlyaev177/state-in-url))

[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/asmyshlyaev177/state-in-url/badge)](https://scorecard.dev/viewer/?uri=github.com/asmyshlyaev177/state-in-url)
[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9679/badge)](https://www.bestpractices.dev/projects/9679)
[![license](https://img.shields.io/github/license/asmyshlyaev177/state-in-url.svg?style=flat-square)](https://github.com/asmyshlyaev177/state-in-url/blob/master/LICENSE)
<!-- or by embedding this in your HTML:
<a href="https://www.bestpractices.dev/projects/9679"><img src="https://www.bestpractices.dev/projects/9679/badge"></a>  -->

</div>

<div align="center">

<h4 align="center">No dudes en abrir una issue si encuentras un bug o quieres solicitar funciones</h4>

![Demo-gif](https://github.com/asmyshlyaev177/state-in-url/blob/master/assets/Demo-gif.gif)

# Demo

<a href="https://state-in-url.dev" target="_blank">Demo</a> |
<a href="https://state-in-url.netlify.app/" target="_blank">Enlace espejo</a>

<a href="https://github.com/asmyshlyaev177/state-in-url/blob/master/Limits.md"  target="_blank">Limitación de tamaño de URI, <b>hasta 12KB</b> es seguro</a>

<hr />

¡Añade una <a href="#"><img src="https://raw.githubusercontent.com/acervenky/animated-github-badges/master/assets/starbadge.gif" width="25" height="25"></a>  y <a href="https://github.com/asmyshlyaev177" target="_blank">sígueme</a> para apoyar el proyecto!

Agradeceré tus comentarios/opiniones en [discusiones](https://github.com/asmyshlyaev177/state-in-url/discussions/1)

Comparte si te resulta útil.
[X.com](https://twitter.com/intent/tweet?&url=https://github.com/asmyshlyaev177/state-in-url)
[LinkedIn](https://www.linkedin.com/sharing/share-offsite/?url=https://github.com/asmyshlyaev177/state-in-url)
[FB](https://www.facebook.com/sharer.php?u=https://github.com/asmyshlyaev177/state-in-url)
[VK](http://vk.com/share.php?url=https://github.com/asmyshlyaev177/state-in-url)

  <hr />

  </div>

[¡Muéstrame solo el código!](#useurlstate)

## ¿Por qué usar `state-in-url`?

Guarda cualquier estado de usuario en los parámetros de consulta; imagina JSON en la URL de un navegador. Todo ello manteniendo los tipos y la estructura de los datos: por ejemplo, los números se decodificarán como números y no como cadenas, las fechas como fechas, etc.; se admiten objetos y matrices.
Simple a más no poder, rápido y con validación estática de TypeScript. Los enlaces profundos, es decir, la sincronización de URL, se vuelven fáciles.

Incluye el hook `useUrlState` para Next.js y react-router, y helpers para cualquier otra cosa en JS.
Como los navegadores modernos soportan URLs enormes y a los usuarios no les importan las cadenas de consulta (es un flujo de seleccionar todo y copiar/pegar).

Es hora de usar la cadena de consulta para gestionar el estado, como se pensó originalmente.
Esta biblioteca hace todo el trabajo tedioso por ti.

Esta biblioteca es una buena alternativa a NUQS.

### Casos de uso

- Guardar formularios de usuario no guardados o filtros de página en la URL
- Sincronizar la URL con el estado de React
- Solo sincronizar datos entre componentes de cliente no relacionados sin tocar la URI
- URLs compartibles con el estado de la aplicación (enlaces profundos, sincronización del estado en la URL)
- Persistencia sencilla del estado entre recargas de página

### Características

- 🧩 **Simple**: Sin providers, reducers, código repetitivo ni conceptos nuevos, API similar a `React.useState`
- 📘 **Validación/autocompletado de TypeScript**: El estado es solo un objeto, validación estática automática en el IDE/pruebas según la definición de TypeScript
- ✨ **Datos complejos**: Objetos anidados, fechas y matrices, funciona igual que JSON, pero en la URL
- ☂ **Valores por defecto**: Te da valores por defecto si el parámetro no está en la url
- ⌨ **Organizado**: Todos los valores posibles se definen al inicio, te protege de obtener una clave inexistente
- **compatible**: Mantendrá los parámetros de consulta de terceros tal cual
- **flexible**: Puede usar más de 1 objeto de estado en la misma página, solo usa claves diferentes
- **Rápido**: Mínimos re-renders, alrededor de [1ms](https://github.com/asmyshlyaev177/state-in-url/blob/87c8c7c995c5cd7d9e7aa039c30bfe64b24abe4b/packages/urlstate/encoder/encoder.test.ts#L185) para codificar y decodificar un objeto grande
- **Renderizado en el servidor**: Se puede usar en componentes de servidor, se soportan Next.js 14, 15 y 16
- **Ligero**: Cero dependencias, biblioteca de menos de 2KB
- **DX**: Buena experiencia de desarrollo, documentación, comentarios JSDoc y ejemplos
- **Flexibilidad de frameworks**: Hooks para `Next.js` y `react-router`, helpers para usarla con otros frameworks o JS puro
- **Bien probada**: [Pruebas unitarias y pruebas de Playwright para Chrome/Firefox/Safari](https://github.com/asmyshlyaev177/state-in-url/actions/workflows/tests.yml)
- **Licencia permisiva**: MIT

## Tabla de contenido

<!-- toc:start -->

- [State in url](#state-in-url)
- [Demo](#demo)
  - [¿Por qué usar `state-in-url`?](#por-qué-usar-state-in-url)
    - [Casos de uso](#casos-de-uso)
    - [Características](#características)
  - [Tabla de contenido](#tabla-de-contenido)
  - [Instalación](#instalación)
    - [1. Instalar el paquete](#1-instalar-el-paquete)
    - [2. Editar tsconfig.json](#2-editar-tsconfigjson)
  - [Uso con agentes de codificación con IA](#uso-con-agentes-de-codificación-con-ia)
  - [useUrlState](#useurlstate)
    - [Hook useUrlState para Next.js](#hook-useurlstate-para-nextjs)
      - [Ejemplos de uso](#ejemplos-de-uso)
        - [Básico](#básico)
        - [Con renderizado del lado del servidor](#con-renderizado-del-lado-del-servidor)
        - [Usar el hook en el componente `layout`](#usar-el-hook-en-el-componente-layout)
        - [Con una forma de estado arbitraria (no recomendado)](#con-una-forma-de-estado-arbitraria-no-recomendado)
    - [Hook useUrlState para Remix.js](#hook-useurlstate-para-remixjs)
      - [Ejemplo](#ejemplo)
    - [Hook useUrlState para React-Router](#hook-useurlstate-para-react-router)
      - [Ejemplo](#ejemplo-1)
  - [Recetas](#recetas)
        - [Hook personalizado para trabajar cómodamente con una porción del estado](#hook-personalizado-para-trabajar-cómodamente-con-una-porción-del-estado)
        - [Con una forma de estado compleja](#con-una-forma-de-estado-compleja)
        - [Actualizar solo el estado y sincronizarlo manualmente con la URL](#actualizar-solo-el-estado-y-sincronizarlo-manualmente-con-la-url)
  - [Otros hooks y helpers](#otros-hooks-y-helpers)
    - [Hook `useUrlStateBase` para otros routers](#hook-useurlstatebase-para-otros-routers)
    - [Hook `useSharedState` para React.js](#hook-usesharedstate-para-reactjs)
    - [Hook `useUrlEncode` para React.js](#hook-useurlencode-para-reactjs)
    - [Helpers `encodeState` y `decodeState`](#helpers-encodestate-y-decodestate)
    - [Helpers `encode` y `decode`](#helpers-encode-y-decode)
  - [Buenas prácticas](#buenas-prácticas)
  - [Trampas](#trampas)
  - [Otros](#otros)
    - [Contribuir y/o ejecutar localmente](#contribuir-yo-ejecutar-localmente)
  - [Hoja de ruta](#hoja-de-ruta)
  - [Contacto y soporte](#contacto-y-soporte)
  - [Registro de cambios](#registro-de-cambios)
  - [Menciones](#menciones)
  - [Licencia](#licencia)
  - [Contrátame](#contrátame)
  - [Inspiración](#inspiración)

<!-- toc:end -->

## Instalación

### 1. Instalar el paquete

```sh
# npm
npm install --save state-in-url
# yarn
yarn add state-in-url
# pnpm
pnpm add state-in-url
```

### 2. Editar tsconfig.json

En `tsconfig.json`, en `compilerOptions`, establece `"moduleResolution": "Bundler"`, o `"moduleResolution": "Node16"`, o `"moduleResolution": "NodeNext"`.
Posiblemente necesites establecer `"module": "ES2022"`, o `"module": "ESNext"`

## Uso con agentes de codificación con IA

`state-in-url` incluye archivos de habilidades (skills) para [@tanstack/intent](https://tanstack.com/intent/latest/docs/overview), de modo que los agentes de IA (Claude Code, Cursor, Copilot, Codex, etc.) carguen los patrones correctos y eviten errores comunes al usar la biblioteca. Tras instalar `state-in-url`, ejecuta una vez en tu proyecto:

```sh
npx @tanstack/intent@latest install
```

Esto configura tu agente instalado para que descubra las habilidades desde `node_modules/state-in-url/skills/`. Lista las habilidades disponibles con `npx @tanstack/intent@latest list`.

## useUrlState

Hook principal que toma el estado inicial como parámetro y devuelve el objeto de estado, un callback para actualizar la url y un callback para actualizar solo el estado.
Todos los componentes que usan el mismo objeto `state` se sincronizan automáticamente.

### Hook useUrlState para Next.js

[Documentación completa de la API](packages/urlstate/next/useUrlState)

[Ejemplo de React-Router](#hook-useurlstate-para-react-router)

#### Ejemplos de uso

##### Básico

1. Define la forma del estado con valores por defecto

 ```typescript
 // userState.ts
 // Solo los parámetros con valor distinto al predeterminado irán a la url.
 export const userState: UserState = { name: '', age: 0 }

 // ¡Usa `Type`, no `Interface`!
 type UserState = { name: string, age: number }
 ```

2. Impórtalo y úsalo

```typescript
'use client'
import { useUrlState } from 'state-in-url/next';

import { userState } from './userState';

function MyComponent() {
  // puedes pasar el argumento `replace`, controla si `setUrl` usará `router.push` o `router.replace`, por defecto replace=true
  // puedes pasar `searchParams` desde componentes de servidor, pasa `useHistory: false` si necesitas obtener algo en el componente de servidor
  const { urlState, setUrl, setState } = useUrlState(userState);

  return (
    <div>
      // urlState.name devolverá el valor por defecto de `userState` si la url está vacía
      <input value={urlState.name}
        // misma api que React.useState, p. ej. setUrl(currVal => currVal + 1)
        onChange={(ev) => setUrl({ name: ev.target.value }) }
      />
      <input value={urlState.age}
        onChange={(ev) => setUrl({ age: +ev.target.value }) }
      />

      <input value={urlState.name}
        onChange={(ev) => { setState(curr => ({ ...curr, name: ev.target.value })) }}
        // Puede actualizar el estado inmediatamente pero sincronizar el cambio con la url según sea necesario
        onBlur={() => setUrl()}
      />

      <button onClick={() => setUrl((_, initial) => initial)}>
        Reset
      </button>

    </div>
  )
}
```

##### Con renderizado del lado del servidor

<details>
  <Summary>Ejemplo</Summary>

```typescript
export default async function Home({ searchParams }: { searchParams: object }) {
  return (
    <Form searchParams={searchParams} />
  )
}

// Form.tsx
'use client'
import React from 'react';
import { useUrlState } from 'state-in-url/next';
import { form } from './form';

const Form = ({ searchParams }: { searchParams: object }) => {
  const { urlState, setState, setUrl } = useUrlState(form, { searchParams });
}
```

</details>

##### Usar el hook en el componente `layout`

<details>
  <Summary>Ejemplo</Summary>
  Eso es una parte delicada, ya que nextjs con app router no permite acceder a searchParams desde el lado del servidor. Hay una solución alternativa usando middleware, pero no es elegante y puede dejar de funcionar tras una actualización de nextjs.

```typescript
// añadir al `layout.tsx` apropiado
export const runtime = 'edge';

// middleware.ts
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.url?.includes('_next') ? null : request.url;
  const sp = url?.split?.('?')?.[1] || '';

  const response = NextResponse.next();

  if (url !== null) {
    response.headers.set('searchParams', sp);
  }

  return response;
}

// Componente layout de destino
import { headers } from 'next/headers';
import { decodeState } from 'state-in-url/encodeState';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sp = headers().get('searchParams') || '';

  return (
    <div>
      <Comp1 searchParams={decodeState(sp, stateShape)} />
      {children}
    </div>
  );
}


```

</details>

##### Con una forma de estado arbitraria (no recomendado)

<details>
  <Summary>Ejemplo</Summary>

```typescript
'use client'
import { useUrlState } from 'state-in-url/next';

const someObj = {};

function SettingsComponent() {
  const { urlState, setUrl, setState } = useUrlState<object>(someObj);
}
```

</details>

### Hook useUrlState para Remix.js

La API es la misma que la de la versión para Next.js, excepto que se pueden pasar opciones del tipo [NavigateOptions](https://github.com/remix-run/react-router/blob/bc693ed9f39170bda13b9e1b282fb8e9d5925f66/packages/react-router/lib/context.ts#L99).

[Documentación de la API](packages/urlstate/remix/useUrlState)

#### Ejemplo

```typescript
export const form: Form = {
  name: '',
  age: undefined,
  agree_to_terms: false,
  tags: [],
};

type Form = {
  name: string;
  age?: number;
  agree_to_terms: boolean;
  tags: { id: string; value: { text: string; time: Date } }[];
};

```

```typescript
import { useUrlState } from 'state-in-url/remix';

import { form } from './form';

function TagsComponent() {
  const { urlState, setUrl, setState } = useUrlState(form);

  const onChangeTags = React.useCallback(
    (tag: (typeof tags)[number]) => {
      setUrl((curr) => ({
        ...curr,
        tags: curr.tags.find((t) => t.id === tag.id)
          ? curr.tags.filter((t) => t.id !== tag.id)
          : curr.tags.concat(tag),
      }));
    },
    [setUrl],
  );

  return (
    <div>
      <Field text="Tags">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag
              active={!!urlState.tags.find((t) => t.id === tag.id)}
              text={tag.value.text}
              onClick={() => onChangeTags(tag)}
              key={tag.id}
            />
          ))}
        </div>
      </Field>

      <input value={urlState.name}
        onChange={(ev) => { setState(curr => ({ ...curr, name: ev.target.value })) }}
        // Puede actualizar el estado inmediatamente pero sincronizar el cambio con la url según sea necesario
        onBlur={() => setUrl()}
      />
    </div>
  );
}

const tags = [
  {
    id: '1',
    value: { text: 'React.js', time: new Date('2024-07-17T04:53:17.000Z') },
  },
  {
    id: '2',
    value: { text: 'Next.js', time: new Date('2024-07-18T04:53:17.000Z') },
  },
  {
    id: '3',
    value: { text: 'TailwindCSS', time: new Date('2024-07-19T04:53:17.000Z') },
  },
];
```

[Ejemplo de código](packages/example-remix2/app/routes/Form-for-test.tsx)

### Hook useUrlState para React-Router

La API es la misma que la de la versión para Next.js, excepto que se pueden pasar opciones del tipo [NavigateOptions](https://github.com/remix-run/react-router/blob/bc693ed9f39170bda13b9e1b282fb8e9d5925f66/packages/react-router/lib/context.ts#L99).

[Documentación de la API](packages/urlstate/react-router/useUrlState)

#### Ejemplo

```typescript
export const form: Form = {
  name: '',
  age: undefined,
  agree_to_terms: false,
  tags: [],
};

type Form = {
  name: string;
  age?: number;
  agree_to_terms: boolean;
  tags: { id: string; value: { text: string; time: Date } }[];
};

```

```typescript
import { useUrlState } from 'state-in-url/react-router';
// para react-router v6
// import { useUrlState } from 'state-in-url/react-router6';

import { form } from './form';

function TagsComponent() {
  const { urlState, setUrl, setState } = useUrlState(form);

  const onChangeTags = React.useCallback(
    (tag: (typeof tags)[number]) => {
      setUrl((curr) => ({
        ...curr,
        tags: curr.tags.find((t) => t.id === tag.id)
          ? curr.tags.filter((t) => t.id !== tag.id)
          : curr.tags.concat(tag),
      }));
    },
    [setUrl],
  );

  return (
    <div>
      <Field text="Tags">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag
              active={!!urlState.tags.find((t) => t.id === tag.id)}
              text={tag.value.text}
              onClick={() => onChangeTags(tag)}
              key={tag.id}
            />
          ))}
        </div>
      </Field>

      <input value={urlState.name}
        onChange={(ev) => { setState(curr => ({ ...curr, name: ev.target.value })) }}
        // Puede actualizar el estado inmediatamente pero sincronizar el cambio con la url según sea necesario
        onBlur={() => setUrl()}
      />
    </div>
  );
}

const tags = [
  {
    id: '1',
    value: { text: 'React.js', time: new Date('2024-07-17T04:53:17.000Z') },
  },
  {
    id: '2',
    value: { text: 'Next.js', time: new Date('2024-07-18T04:53:17.000Z') },
  },
  {
    id: '3',
    value: { text: 'TailwindCSS', time: new Date('2024-07-19T04:53:17.000Z') },
  },
];
```

[Ejemplo de código](packages/example-react-router6/src/Form-for-test.tsx)

## Recetas
##### Hook personalizado para trabajar cómodamente con una porción del estado
<details>
  <Summary>Ejemplo</Summary>

  ```typescript
'use client';

import React from 'react';
import { useUrlState } from 'state-in-url/next';

const form: Form = {
    name: '',
    age: undefined,
    agree_to_terms: false,
    tags: [],
};

type Form = {
    name: string;
    age?: number;
    agree_to_terms: boolean;
    tags: {id: string; value: {text: string; time: Date } }[];
};

export const useFormState = ({ searchParams }: { searchParams?: object }) => {
    const { urlState, setUrl: setUrlBase, reset } = useUrlState(form, {
      searchParams,
    });

    // la primera navegación añadirá una nueva entrada al historial
    // todas las siguientes solo reemplazarán esa entrada
    // de esta forma el historial tendrá solo 2 entradas - ['/url', '/url?key=param']

    const replace = React.useRef(false);
    const setUrl = React.useCallback((
        state: Parameters<typeof setUrlBase>[0],
        opts?: Parameters<typeof setUrlBase>[1]
      ) => {
        setUrlBase(state, { replace: replace.current, ...opts });
        replace.current = true;
    }, [setUrlBase]);

    return { urlState, setUrl, resetUrl: reset };
};
  ```
</details>

<hr />

##### Con una forma de estado compleja

<details>
  <Summary>Ejemplo</Summary>

```typescript
export const form: Form = {
  name: '',
  age: undefined,
  agree_to_terms: false,
  tags: [],
};

type Form = {
  name: string;
  age?: number;
  agree_to_terms: boolean;
  tags: { id: string; value: { text: string; time: Date } }[];
};
```

```typescript
'use client'
import { useUrlState } from 'state-in-url/next';

import { form } from './form';

function TagsComponent() {
  // ¡`urlState` se inferirá del tipo Form!
  const { urlState, setUrl } = useUrlState(form);

  const onChangeTags = React.useCallback(
    (tag: (typeof tags)[number]) => {
      setUrl((curr) => ({
        ...curr,
        tags: curr.tags.find((t) => t.id === tag.id)
          ? curr.tags.filter((t) => t.id !== tag.id)
          : curr.tags.concat(tag),
      }));
    },
    [setUrl],
  );

  return (
    <div>
      <Field text="Tags">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag
              active={!!urlState.tags.find((t) => t.id === tag.id)}
              text={tag.value.text}
              onClick={() => onChangeTags(tag)}
              key={tag.id}
            />
          ))}
        </div>
      </Field>
    </div>
  );
}

const tags = [
  {
    id: '1',
    value: { text: 'React.js', time: new Date('2024-07-17T04:53:17.000Z') },
  },
  {
    id: '2',
    value: { text: 'Next.js', time: new Date('2024-07-18T04:53:17.000Z') },
  },
  {
    id: '3',
    value: { text: 'TailwindCSS', time: new Date('2024-07-19T04:53:17.000Z') },
  },
];
```

[Ejemplo de código de la página de demo](https://github.com/asmyshlyaev177/state-in-url/blob/master/packages/example-nextjs15/src/app/Form.tsx)
</details>

##### Actualizar solo el estado y sincronizarlo manualmente con la URL

<details>
  <Summary>Ejemplo</Summary>

  ```typescript

  const timer = React.useRef(0 as unknown as NodeJS.Timeout);
  React.useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      // comparará el estado por contenido y no por referencia, y lanzará la actualización solo para valores nuevos
      setUrl(urlState);
    }, 500);

    return () => {
      clearTimeout(timer.current);
    };
  }, [urlState, setUrl]);
```

Sincronizar el estado en `onBlur` estará más alineado con el uso en el mundo real.

```typescript
<input onBlur={() => updateUrl()} .../>
```

</details>

## Otros hooks y helpers

### Hook `useUrlStateBase` para otros routers

Hooks para crear tus propios hooks `useUrlState` con otros routers, p. ej. react-router o tanstack router.

[Documentación de la API](packages/urlstate/useUrlStateBase)

### Hook `useSharedState` para React.js

Hook para compartir estado entre cualquier componente de React, probado con Next.js y Vite.

```typescript
'use client'
import { useSharedState } from 'state-in-url';

export const someState = { name: '' };

function SettingsComponent() {
  const { state, setState } = useSharedState(someState);
}
```

[Documentación de la API](packages/urlstate/useSharedState/README.es.md)

### Hook `useUrlEncode` para React.js

[Documentación de la API](packages/urlstate/useUrlEncode/README.es.md)

### Helpers `encodeState` y `decodeState`

[Documentación de la API](packages/urlstate/encodeState/README.es.md)

### Helpers `encode` y `decode`

[Documentación de la API](packages/urlstate/encoder/README.es.md)

## Buenas prácticas

- Define la forma de tu estado como una constante
- Usa TypeScript para mayor seguridad de tipos y autocompletado
- Evita guardar información sensible en los parámetros de la URL (SSN, claves de API, etc.)
- Usa esta [extensión](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors) para obtener errores de TS legibles

Puedes crear hooks de estado para porciones del estado y reutilizarlos en toda la aplicación. Por ejemplo:
```Typescript
type UserState = {
  name: string;
  age: number;
  other: { id: string, value: number }[]
};
const userState = {
  name: '',
  age: 0,
  other: [],
};

export const useUserState = () => {
  const { urlState, setUrl, reset } = useUrlState(userState);

  // otra lógica

  // restablecer los parámetros de consulta al navegar a otra página
  React.useEffect(() => {
    return reset
  }, [])

  return { userState: urlState, setUserState: setUrl };;
}

```

## Trampas

1. Solo se pueden pasar valores serializables; `Function`, `BigInt` o `Symbol` no funcionarán, y probablemente tampoco cosas como `ArrayBuffer`. Todo lo que se pueda serializar a JSON funcionará.
2. Los servidores de Vercel limitan el tamaño de las cabeceras (la cadena de consulta y demás) a **14KB**, así que mantén el estado de tu URL por debajo de ~5000 palabras. <https://vercel.com/docs/errors/URL_TOO_LONG>
3. Probado con `next.js` 14/15/16 con app router; no hay planes de soportar pages.

## Otros

### Contribuir y/o ejecutar localmente

Consulta el [documento de contribución](CONTRIBUTING.md)

## Hoja de ruta

- [x] hook para `Next.js`
- [x] hook para `react-router`
- [x] hook para `remix`
- [ ] hook para `svelte`
- [ ] hook para `astro`
- [ ] hook para guardar el estado en el hash ?

## Contacto y soporte

- Crea un [GitHub issue](https://github.com/asmyshlyaev177/state-in-url/issues) para informes de errores, solicitudes de funciones o preguntas

## [Registro de cambios](CHANGELOG.md)

## Menciones

 - [This Week in React 209](https://thisweekinreact.com/newsletter/209)
 - [JavaScript Weekly](https://javascriptweekly.com/issues/741)
 - [This Week in React 240](https://thisweekinreact.com/newsletter/240)

## Licencia

Este proyecto está licenciado bajo la [licencia MIT](LICENSE).

## Contrátame

Soy **Aleksandr Smyshliaev**, único autor y mantenedor de esta biblioteca.
Ingeniero frontend sénior (React / Next.js / TypeScript, más de 8 años) y **disponible para trabajo remoto a tiempo completo ahora mismo**.

Esta biblioteca es la versión resumida de lo que se me da bien: una API tipada sobre un primitivo de navegador desordenado, cero dependencias y estabilidad en Next.js, Remix y React Router a través de varias versiones mayores de React.

- **Se me da mejor** — bibliotecas de componentes, gestión de estado y suites de pruebas que sobreviven a un refactor.
- **También son míos** —
  [react-horizontal-scrolling-menu](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu)
  (~84k instalaciones semanales),
  [test-proxy-recorder](https://github.com/asmyshlyaev177/test-proxy-recorder)
  (grabación/reproducción para Playwright),
  [llm-queue](https://github.com/asmyshlyaev177/llm-queue).
- **Dónde** — Tiflis, Georgia (GMT+4), solapamiento total con CET. Entidad contratista registrada, de modo que el compromiso B2B no necesita configuración de employer-of-record.
- **Contáctame** — [asmyshlyaev177.dev](https://asmyshlyaev177.dev) ·
  [asmyshlyaev177@gmail.com](mailto:asmyshlyaev177@gmail.com) ·
  [LinkedIn](https://linkedin.com/in/asmyshlyaev177) · Telegram @asmyshlyaev177

## Inspiración

[NUQS](https://github.com/47ng/nuqs)

[Usar la URL para almacenar estado en Vue](https://dev.to/jacobandrewsky/using-url-to-store-state-in-vue-275c)

[Almacenar el estado en la URL](https://antonz.org/storing-state/)

[NextJS useSearchParams](https://nextjs.org/docs/app/api-reference/functions/use-search-params)
