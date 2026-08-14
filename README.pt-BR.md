<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · Português (BR) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=pt-BR source=README.md source-blob=bbf45a10aae9e88f68b27d84f51ee3e7e8a1e436 status=translated -->
<!-- i18n:end -->

<div align="center">
  <img src="/packages/example-nextjs14/public/Logo_symbol.png" alt="logotipo do state-in-url" width="120px" />

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

<h4 align="center">Não hesite em abrir uma issue se encontrou um bug ou para solicitar recursos</h4>

![Demo-gif](https://github.com/asmyshlyaev177/state-in-url/blob/master/assets/Demo-gif.gif)

# Demo

<a href="https://state-in-url.dev" target="_blank">Demo</a> |
<a href="https://state-in-url.netlify.app/" target="_blank">Link espelho</a>

<a href="https://github.com/asmyshlyaev177/state-in-url/blob/master/Limits.md"  target="_blank">Limitação de tamanho da URI, <b>até 12KB</b> é seguro</a>

<hr />

Adicione uma <a href="#"><img src="https://raw.githubusercontent.com/acervenky/animated-github-badges/master/assets/starbadge.gif" width="25" height="25"></a>  e <a href="https://github.com/asmyshlyaev177" target="_blank">siga-me</a> para apoiar o projeto!

Agradecerei seus comentários/opiniões nas [discussões](https://github.com/asmyshlyaev177/state-in-url/discussions/1)

Compartilhe se for útil para você.
[X.com](https://twitter.com/intent/tweet?&url=https://github.com/asmyshlyaev177/state-in-url)
[LinkedIn](https://www.linkedin.com/sharing/share-offsite/?url=https://github.com/asmyshlyaev177/state-in-url)
[FB](https://www.facebook.com/sharer.php?u=https://github.com/asmyshlyaev177/state-in-url)
[VK](http://vk.com/share.php?url=https://github.com/asmyshlyaev177/state-in-url)

  <hr />

  </div>

[Só me mostre o código!](#useurlstate)

## Por que usar `state-in-url`?

Armazene qualquer estado de usuário nos parâmetros de consulta; imagine JSON na URL de um navegador. Tudo isso mantendo os tipos e a estrutura dos dados: por exemplo, números serão decodificados como números e não como strings, datas como datas, etc., objetos e arrays são suportados.
Extremamente simples, rápido e com validação estática de TypeScript. Links profundos, ou seja, sincronização de URL, facilitados.

Contém o hook `useUrlState` para Next.js e react-router, e helpers para qualquer outra coisa em JS.
Como os navegadores modernos suportam URLs enormes e os usuários não se importam com as strings de consulta (é um fluxo de selecionar tudo e copiar/colar).

É hora de usar a string de consulta para gerenciamento de estado, como foi originalmente planejado.
Esta biblioteca faz todo o trabalho tedioso para você.

Esta biblioteca é uma boa alternativa ao NUQS.

### Casos de uso

- Armazenar formulários de usuário não salvos ou filtros de página na URL
- Sincronizar a URL com o estado do React
- Apenas sincronizar dados entre componentes de cliente não relacionados sem tocar na URI
- URLs compartilháveis com o estado da aplicação (links profundos, sincronização do estado na URL)
- Persistência fácil do estado entre recarregamentos de página

### Recursos

- 🧩 **Simples**: Sem providers, reducers, boilerplate ou novos conceitos, API semelhante a `React.useState`
- 📘 **Validação/autocompletar do TypeScript**: O estado é apenas um objeto, validação estática automática no IDE/testes de acordo com a definição do TypeScript
- ✨ **Dados complexos**: Objetos aninhados, datas e arrays, funciona como JSON, mas na URL
- ☂ **Valores padrão**: Fornece valores padrão se o parâmetro não estiver na url
- ⌨ **Organizado**: Todos os valores possíveis definidos no início, protege você de obter uma chave inexistente
- **compatível**: Manterá os parâmetros de consulta de terceiros como estão
- **flexível**: Pode usar mais de 1 objeto de estado na mesma página, basta usar chaves diferentes
- **Rápido**: Re-renderizações mínimas, cerca de [1ms](https://github.com/asmyshlyaev177/state-in-url/blob/87c8c7c995c5cd7d9e7aa039c30bfe64b24abe4b/packages/urlstate/encoder/encoder.test.ts#L185) para codificar e decodificar objetos grandes
- **Renderização no servidor**: Pode ser usado em componentes de servidor, Next.js 14, 15 e 16 são suportados
- **Leve**: Zero dependências, biblioteca com menos de 2KB
- **DX**: Boa experiência de desenvolvimento, documentação, comentários JSDoc e exemplos
- **Flexibilidade de frameworks**: Hooks para `Next.js` e `react-router`, helpers para usar com outros frameworks ou JS puro
- **Bem testada**: [Testes unitários e testes Playwright para Chrome/Firefox/Safari](https://github.com/asmyshlyaev177/state-in-url/actions/workflows/tests.yml)
- **Licença permissiva**: MIT

## Índice

<!-- toc:start -->

- [State in url](#state-in-url)
- [Demo](#demo)
  - [Por que usar `state-in-url`?](#por-que-usar-state-in-url)
    - [Casos de uso](#casos-de-uso)
    - [Recursos](#recursos)
  - [Índice](#índice)
  - [Instalação](#instalação)
    - [1. Instalar o pacote](#1-instalar-o-pacote)
    - [2. Editar o tsconfig.json](#2-editar-o-tsconfigjson)
  - [Uso com agentes de codificação de IA](#uso-com-agentes-de-codificação-de-ia)
  - [useUrlState](#useurlstate)
    - [Hook useUrlState para Next.js](#hook-useurlstate-para-nextjs)
      - [Exemplos de uso](#exemplos-de-uso)
        - [Básico](#básico)
        - [Com renderização no servidor](#com-renderização-no-servidor)
        - [Usando o hook no componente `layout`](#usando-o-hook-no-componente-layout)
        - [Com forma de estado arbitrária (não recomendado)](#com-forma-de-estado-arbitrária-não-recomendado)
    - [Hook useUrlState para Remix.js](#hook-useurlstate-para-remixjs)
      - [Exemplo](#exemplo)
    - [Hook useUrlState para React-Router](#hook-useurlstate-para-react-router)
      - [Exemplo](#exemplo-1)
  - [Receitas](#receitas)
        - [Hook personalizado para trabalhar convenientemente com uma fatia do estado](#hook-personalizado-para-trabalhar-convenientemente-com-uma-fatia-do-estado)
        - [Com forma de estado complexa](#com-forma-de-estado-complexa)
        - [Atualizar apenas o estado e sincronizar com a URL manualmente](#atualizar-apenas-o-estado-e-sincronizar-com-a-url-manualmente)
  - [Outros hooks e helpers](#outros-hooks-e-helpers)
    - [Hook `useUrlStateBase` para outros routers](#hook-useurlstatebase-para-outros-routers)
    - [Hook `useSharedState` para React.js](#hook-usesharedstate-para-reactjs)
    - [Hook `useLinkProps` para React.js](#hook-uselinkprops-para-reactjs)
    - [Hook `useUrlEncode` para React.js](#hook-useurlencode-para-reactjs)
    - [Helpers `encodeState` e `decodeState`](#helpers-encodestate-e-decodestate)
    - [Helpers `encode` e `decode`](#helpers-encode-e-decode)
  - [Boas práticas](#boas-práticas)
  - [Pegadinhas](#pegadinhas)
  - [Outros](#outros)
    - [Contribuir e/ou executar localmente](#contribuir-eou-executar-localmente)
  - [Roteiro](#roteiro)
  - [Contato e suporte](#contato-e-suporte)
  - [Changelog](#changelog)
  - [Menções](#menções)
  - [Licença](#licença)
  - [Me contrate](#me-contrate)
  - [Inspiração](#inspiração)

<!-- toc:end -->

## Instalação

### 1. Instalar o pacote

```sh
# npm
npm install --save state-in-url
# yarn
yarn add state-in-url
# pnpm
pnpm add state-in-url
```

### 2. Editar o tsconfig.json

No `tsconfig.json`, em `compilerOptions`, defina `"moduleResolution": "Bundler"`, ou `"moduleResolution": "Node16"`, ou `"moduleResolution": "NodeNext"`.
Possivelmente será necessário definir `"module": "ES2022"`, ou `"module": "ESNext"`

## Uso com agentes de codificação de IA

O `state-in-url` inclui arquivos de habilidades (skills) para o [@tanstack/intent](https://tanstack.com/intent/latest/docs/overview), para que os agentes de IA (Claude Code, Cursor, Copilot, Codex, etc.) carreguem os padrões corretos e evitem erros comuns ao usar a biblioteca. Após instalar o `state-in-url`, execute uma vez no seu projeto:

```sh
npx @tanstack/intent@latest install
```

Isso configura seu agente instalado para descobrir as habilidades em `node_modules/state-in-url/skills/`. Liste as habilidades disponíveis com `npx @tanstack/intent@latest list`.

## useUrlState

Hook principal que recebe o estado inicial como parâmetro e retorna o objeto de estado, um callback para atualizar a url e um callback para atualizar apenas o estado.
Todos os componentes que usam o mesmo objeto `state` são sincronizados automaticamente.

### Hook useUrlState para Next.js

[Documentação completa da API](packages/urlstate/next/useUrlState)

[Exemplo de React-Router](#hook-useurlstate-para-react-router)

#### Exemplos de uso

##### Básico

1. Defina a forma do estado com valores padrão

 ```typescript
 // userState.ts
 // Somente os parâmetros com valor diferente do padrão irão para a url.
 export const userState: UserState = { name: '', age: 0 }

 // Use `Type`, não `Interface`!
 type UserState = { name: string, age: number }
 ```

2. Importe e use

```typescript
'use client'
import { useUrlState } from 'state-in-url/next';

import { userState } from './userState';

function MyComponent() {
  // pode passar o argumento `replace`, ele controla se `setUrl` usará `router.push` ou `router.replace`, por padrão replace=true
  // pode passar `searchParams` de componentes de servidor, passe `useHistory: false` se precisar buscar algo no componente de servidor
  const { urlState, setUrl, setState } = useUrlState(userState);

  return (
    <div>
      // urlState.name retornará o valor padrão de `userState` se a url estiver vazia
      <input value={urlState.name}
        // mesma api que React.useState, por exemplo setUrl(currVal => currVal + 1)
        onChange={(ev) => setUrl({ name: ev.target.value }) }
      />
      <input value={urlState.age}
        onChange={(ev) => setUrl({ age: +ev.target.value }) }
      />

      <input value={urlState.name}
        onChange={(ev) => { setState(curr => ({ ...curr, name: ev.target.value })) }}
        // Pode atualizar o estado imediatamente, mas sincronizar a alteração com a url conforme necessário
        onBlur={() => setUrl()}
      />

      <button onClick={() => setUrl((_, initial) => initial)}>
        Reset
      </button>

    </div>
  )
}
```

##### Com renderização no servidor

<details>
  <Summary>Exemplo</Summary>

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

##### Usando o hook no componente `layout`

<details>
  <Summary>Exemplo</Summary>
  Essa é uma parte complicada, já que o nextjs com app router não permite acessar searchParams do lado do servidor. Há uma solução alternativa usando middleware, mas não é bonita e pode parar de funcionar após uma atualização do nextjs.

```typescript
// adicione ao `layout.tsx` apropriado
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

##### Com forma de estado arbitrária (não recomendado)

<details>
  <Summary>Exemplo</Summary>

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

A API é a mesma da versão para Next.js, exceto que você pode passar opções do tipo [NavigateOptions](https://github.com/remix-run/react-router/blob/bc693ed9f39170bda13b9e1b282fb8e9d5925f66/packages/react-router/lib/context.ts#L99).

[Documentação da API](packages/urlstate/remix/useUrlState)

#### Exemplo

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
        // Pode atualizar o estado imediatamente, mas sincronizar a alteração com a url conforme necessário
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

[Exemplo de código](packages/example-remix2/app/routes/Form-for-test.tsx)

### Hook useUrlState para React-Router

A API é a mesma da versão para Next.js, exceto que você pode passar opções do tipo [NavigateOptions](https://github.com/remix-run/react-router/blob/bc693ed9f39170bda13b9e1b282fb8e9d5925f66/packages/react-router/lib/context.ts#L99).

[Documentação da API](packages/urlstate/react-router/useUrlState)

#### Exemplo

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
        // Pode atualizar o estado imediatamente, mas sincronizar a alteração com a url conforme necessário
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

[Exemplo de código](packages/example-react-router6/src/Form-for-test.tsx)

## Receitas
##### Hook personalizado para trabalhar convenientemente com uma fatia do estado
<details>
  <Summary>Exemplo</Summary>

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

    // a primeira navegação adicionará uma nova entrada ao histórico
    // todas as seguintes apenas substituirão essa entrada
    // assim, o histórico terá apenas 2 entradas - ['/url', '/url?key=param']

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

##### Com forma de estado complexa

<details>
  <Summary>Exemplo</Summary>

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
  // `urlState` será inferido do tipo Form!
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

[Exemplo de código da página de demonstração](https://github.com/asmyshlyaev177/state-in-url/blob/master/packages/example-nextjs15/src/app/Form.tsx)
</details>

##### Atualizar apenas o estado e sincronizar com a URL manualmente

<details>
  <Summary>Exemplo</Summary>

  ```typescript

  const timer = React.useRef(0 as unknown as NodeJS.Timeout);
  React.useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      // comparará o estado por conteúdo e não por referência, e disparará a atualização apenas para novos valores
      setUrl(urlState);
    }, 500);

    return () => {
      clearTimeout(timer.current);
    };
  }, [urlState, setUrl]);
```

Sincronizar o estado em `onBlur` estará mais alinhado com o uso no mundo real.

```typescript
<input onBlur={() => updateUrl()} .../>
```

</details>

## Outros hooks e helpers

### Hook `useUrlStateBase` para outros routers

Hooks para criar seus próprios hooks `useUrlState` com outros routers, por exemplo react-router ou tanstack router.

[Documentação da API](packages/urlstate/useUrlStateBase)

### Hook `useSharedState` para React.js

Hook para compartilhar estado entre quaisquer componentes React, testado com Next.js e Vite.

```typescript
'use client'
import { useSharedState } from 'state-in-url';

export const someState = { name: '' };

function SettingsComponent() {
  const { state, setState } = useSharedState(someState);
}
```

[Documentação da API](packages/urlstate/useSharedState/README.pt-BR.md)

### Hook `useLinkProps` para React.js

Hook para levar o estado até um link que aponta para outra rota, por exemplo um seletor de idioma. `setUrl` sempre escreve no caminho atual; este não.

```tsx
'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLinkProps } from 'state-in-url/useLinkProps';

export const form = { name: '' };

function LanguagePicker() {
  const linkProps = useLinkProps(form, useRouter().push);

  return <Link {...linkProps('/de/pricing')}>Deutsch</Link>;
}
```

A marcação mantém o `href` simples, então rastreadores e `hreflang` enxergam a URL canônica; o estado é lido no clique.

[Documentação da API](packages/urlstate/useLinkProps/README.pt-BR.md)

### Hook `useUrlEncode` para React.js

[Documentação da API](packages/urlstate/useUrlEncode/README.pt-BR.md)

### Helpers `encodeState` e `decodeState`

[Documentação da API](packages/urlstate/encodeState/README.pt-BR.md)

### Helpers `encode` e `decode`

[Documentação da API](packages/urlstate/encoder/README.pt-BR.md)

## Boas práticas

- Defina a forma do seu estado como uma constante
- Use TypeScript para maior segurança de tipos e autocompletar
- Evite armazenar informações sensíveis nos parâmetros da URL (SSN, chaves de API, etc.)
- Use esta [extensão](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors) para erros de TS legíveis

Você pode criar hooks de estado para fatias do estado e reutilizá-los em toda a aplicação. Por exemplo:
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

  // outra lógica

  // redefinir os parâmetros de consulta ao navegar para outra página
  React.useEffect(() => {
    return reset
  }, [])

  return { userState: urlState, setUserState: setUrl };;
}

```

## Pegadinhas

1. Só é possível passar valores serializáveis; `Function`, `BigInt` ou `Symbol` não funcionarão, e provavelmente coisas como `ArrayBuffer` também não. Tudo o que pode ser serializado para JSON funcionará.
2. Os servidores da Vercel limitam o tamanho dos cabeçalhos (string de consulta e outras coisas) a **14KB**, então mantenha o estado da sua URL abaixo de ~5000 palavras. <https://vercel.com/docs/errors/URL_TOO_LONG>
3. Testado com `next.js` 14/15/16 com app router; sem planos de suportar pages.

## Outros

### Contribuir e/ou executar localmente

Veja o [documento de contribuição](CONTRIBUTING.md)

## Roteiro

- [x] hook para `Next.js`
- [x] hook para `react-router`
- [x] hook para `remix`
- [ ] hook para `svelte`
- [ ] hook para `astro`
- [ ] hook para armazenar estado no hash ?

## Contato e suporte

- Crie uma [GitHub issue](https://github.com/asmyshlyaev177/state-in-url/issues) para relatórios de bugs, solicitações de recursos ou perguntas

## [Changelog](CHANGELOG.md)

## Menções

 - [This Week in React 209](https://thisweekinreact.com/newsletter/209)
 - [JavaScript Weekly](https://javascriptweekly.com/issues/741)
 - [This Week in React 240](https://thisweekinreact.com/newsletter/240)

## Licença

Este projeto está licenciado sob a [licença MIT](LICENSE).

## Me contrate

Sou **Aleksandr Smyshliaev** — único autor e mantenedor desta biblioteca.
Engenheiro frontend sênior (React / Next.js / TypeScript, mais de 8 anos) e **disponível para trabalho remoto em tempo integral agora mesmo**.

Esta biblioteca é a versão resumida do que eu faço bem: uma API tipada sobre um primitivo de navegador bagunçado, zero dependências e estabilidade entre Next.js, Remix e React Router ao longo de várias versões maiores do React.

- **Melhor em** — bibliotecas de componentes, gerenciamento de estado e suítes de teste que sobrevivem a um refactor.
- **Também são meus** —
  [react-horizontal-scrolling-menu](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu)
  (~84k instalações semanais),
  [test-proxy-recorder](https://github.com/asmyshlyaev177/test-proxy-recorder)
  (gravação/reprodução para Playwright),
  [llm-queue](https://github.com/asmyshlyaev177/llm-queue).
- **Onde** — Tbilisi, Geórgia (GMT+4), sobreposição total com CET. Entidade contratante registrada, então o engajamento B2B não precisa de configuração de employer-of-record.
- **Fale comigo** — [asmyshlyaev177.dev](https://asmyshlyaev177.dev) ·
  [asmyshlyaev177@gmail.com](mailto:asmyshlyaev177@gmail.com) ·
  [LinkedIn](https://linkedin.com/in/asmyshlyaev177) · Telegram @asmyshlyaev177

## Inspiração

[NUQS](https://github.com/47ng/nuqs)

[Usando a URL para armazenar estado no Vue](https://dev.to/jacobandrewsky/using-url-to-store-state-in-vue-275c)

[Armazenando estado na URL](https://antonz.org/storing-state/)

[NextJS useSearchParams](https://nextjs.org/docs/app/api-reference/functions/use-search-params)
