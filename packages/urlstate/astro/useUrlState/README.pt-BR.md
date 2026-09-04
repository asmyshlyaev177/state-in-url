<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · Português (BR) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=pt-BR source=README.md source-blob=1e2218fc31f03646440896464e1dece6dd29d65d status=translated -->
<!-- i18n:end -->

# API

Este módulo fornece um hook React personalizado para gerenciar o estado sincronizado com os parâmetros de busca da URL em aplicações Astro, dentro de ilhas React.

O Astro não tem um router no lado do cliente por padrão, então o hook escreve a URL com `window.history` e a lê de volta ao navegar para trás/para frente, nas suas próprias escritas e em qualquer outro `pushState`/`replaceState`, incluindo o próprio `<ClientRouter />` do Astro. As ilhas de uma mesma página compartilham o estado: a chave é o objeto de estado padrão, e todas as ilhas importam o mesmo módulo. Sob o `<ClientRouter />`, uma ilha cujo estado estava em uso na página anterior renderiza esse estado primeiro e ressincroniza a partir da URL após a montagem.

As ilhas Preact, por meio de `@astrojs/preact` com `compat: true`, usam o mesmo import.

## Hook `useUrlState`

Um hook React personalizado que gerencia o estado e o sincroniza com os parâmetros de busca da URL.

### Parâmetros

- `defaultState: object` - Um objeto que representa os valores de estado padrão.
- `searchParams?: object` - `Object.fromEntries(Astro.url.searchParams)`, passado para a ilha como prop, para que a renderização no servidor corresponda à URL e a hidratação não tenha nada a corrigir. Um objeto simples, não `URLSearchParams`: as props de ilhas são serializadas, e um `URLSearchParams` chega como `{}`. A página precisa ser renderizada sob demanda (`output: 'server'`, ou `export const prerender = false` na página, com um adapter): uma página pré-renderizada não tem requisição, então a ilha recebe `{}` e lê a URL após a hidratação.
- `replace?: boolean` - Controla se `setUrl` usará `replaceState` ou `pushState`, padrão replace=true, pode ser substituído por `setUrl(stateObj, { replace: false })`

### Retorna

Um objeto contendo:

- `urlState: object` - O estado atual.
- `setState: Function` - Função para atualizar o estado sem atualizar a URL.
- `setUrl: Function` - Função para atualizar tanto o estado quanto a URL.
- `reset: Function` - Função para redefinir o estado para o padrão.

### Exemplo

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

Chame `setState` e `setUrl` a partir de manipuladores de eventos ou efeitos, nunca durante a renderização:

```typescript
// Atualizar o estado sem alterar a URL
setState({ name: 'test' });
setState(currVal => ({ ...currVal, name: 'test' }) );

// redefinir o estado
setState((_curr, initial) => initial);

// Atualizar o estado e a URL
setUrl({ name: 'test' }, { replace: false });

// redefinir o estado e a URL
setUrl((_curr, initial) => initial);
```

Sem ilhas, em uma página sem nenhum framework no cliente, `decodeState` e `encodeState` de `state-in-url/encodeState` fazem o mesmo trabalho no frontmatter: decodificam `Astro.url.searchParams` em um objeto tipado e constroem a próxima URL para um link.

## `setState`

Atualiza o estado sem modificar a URL.

### Parâmetros de `setState`

- `value: Partial<T> | (curr: T, initial: T) => T` - Novo valor de estado, ou uma função que recebe o estado atual e o estado inicial e retorna o novo estado.

## `setUrl`

Atualiza tanto o estado quanto a URL.

### Parâmetros de `setUrl`

- `value?: Partial<T> | (curr: T, initial: T) => T` - Novo valor de estado opcional, ou uma função que recebe o estado atual e o estado inicial e retorna o novo estado.
- `options?: { replace?: boolean }` - `replaceState` (padrão) ou `pushState`.

## `reset`

Redefine tanto o estado quanto a URL para o padrão.

### Parâmetros de `reset`

- `options?: { replace?: boolean }` - `replaceState` (padrão) ou `pushState`.
