<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · Português (BR) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=pt-BR source=README.md source-blob=da24fd34a3d4ed9b3d2fdcdc46897b6756d2a208 status=translated -->
<!-- i18n:end -->

# API

Este módulo fornece um hook React personalizado para gerenciar estado sincronizado com os parâmetros de busca da URL, para aplicações React **sem router** — Vite, Create React App, ou um widget montado em uma página que você não controla.

Como não há router pelo qual navegar, o hook escreve a URL com `window.history` e a lê de volta ao voltar/avançar, nas próprias escritas e em qualquer outro `pushState`/`replaceState`. Todo componente que compartilha o objeto de estado padrão compartilha o estado, então não é preciso passar nada adiante.

Use o ponto de entrada do router quando a aplicação tiver um: `state-in-url/next`, `state-in-url/react-router`, `state-in-url/react-router6`, `state-in-url/remix`. Para um router sem ponto de entrada neste pacote, por exemplo o TanStack Router, monte seu próprio hook com [`useUrlStateBase`](../../useUrlStateBase). `state-in-url/astro` é este mesmo hook, documentado para [ilhas](../../astro/useUrlState).

## Hook `useUrlState`

Um hook React personalizado que gerencia o estado e o sincroniza com os parâmetros de busca da URL.

### Parâmetros

- `defaultState: object` - Um objeto com os valores padrão do estado. Precisa ser uma constante no escopo do módulo: o estado é compartilhado pela identidade desse objeto.
- `searchParams?: object` - Os parâmetros de consulta de uma renderização no servidor, como objeto simples, para que a primeira renderização combine com a URL. Uma aplicação só de cliente omite isso e o hook lê a URL sozinho.
- `replace?: boolean` - Controla se `setUrl` usa `replaceState` ou `pushState`; o padrão é replace=true, e dá para sobrescrever com `setUrl(stateObj, { replace: false })`

### Retorna

Um objeto contendo:

- `urlState: object` - O estado atual.
- `setState: Function` - Função para atualizar o estado sem atualizar a URL.
- `setUrl: Function` - Função para atualizar tanto o estado quanto a URL.
- `reset: Function` - Função para redefinir o estado para o padrão.

### Exemplo

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

Qualquer outro componente que chame `useFilters()` lê e escreve o mesmo estado e re-renderiza junto. Não há provider nem nada para passar por props.

Chame `setState` e `setUrl` a partir de manipuladores de eventos ou efeitos, nunca durante a renderização:

```typescript
// Atualizar o estado sem mudar a URL
setState({ sort: 'date' });
setState(currVal => ({ ...currVal, sort: 'date' }) );

// redefinir o estado
setState((_curr, initial) => initial);

// Atualizar o estado e a URL
setUrl({ sort: 'date' }, { replace: false });

// redefinir o estado e a URL
setUrl((_curr, initial) => initial);
```

Em um campo de texto, chame `setState` a cada tecla e `setUrl` no blur ou com um debounce — as escritas na URL são limitadas, e amarrar `setUrl` ao `onChange` faz a digitação parecer lenta.
