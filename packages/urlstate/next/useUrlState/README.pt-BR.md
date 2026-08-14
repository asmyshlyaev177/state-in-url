<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · Português (BR) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=pt-BR source=README.md source-blob=dc43c5e03232b105d24b651ab42a37b8222d1f2c status=translated -->
<!-- i18n:end -->

# API

Este módulo fornece um hook React personalizado para gerenciar o estado sincronizado com os parâmetros de busca da URL em aplicações Next.js.

## Hook `useUrlState`

Um hook React personalizado que gerencia o estado e o sincroniza com os parâmetros de busca da URL.

### Parâmetros

- `defaultState: object` - Um objeto que representa os valores de estado padrão.
- `searchParams?: object` - Objeto de parâmetros de busca opcional do componente de servidor do Next.js.
- `replace?: boolean` - Controla se `setUrl` usará o método `replace` ou `push` no router, padrão replace=true, pode ser substituído por `setUrl(stateObj, { replace: false })`
- `useHistory` - Opcionalmente pode usar window.history para navegação, `true` por padrão sem requisições _rsc <https://github.com/vercel/next.js/discussions/59167>
- `scroll?: boolean` - Opção do push/replace do router do Next.js

### Retorna

Um objeto contendo:

- `urlState: object` - O estado atual.
- `setState: Function` - Função para atualizar o estado sem atualizar a URL.
- `setUrl: Function` - Função para atualizar tanto o estado quanto a URL.
- `reset: Function` - Função para redefinir o estado para o padrão.

### Pré-renderização

O hook não chama `useSearchParams`, então um componente que o usa não precisa de um limite `<Suspense>` e não exclui sua página da pré-renderização. Ele lê o estado inicial dos `searchParams` que você passa no servidor e de `window.location.search` no cliente, e rastreia alterações posteriores observando diretamente a History API — o que também captura alterações de URL que o router do Next nunca vê, como as que o próprio hook faz no modo `useHistory: true` padrão.

Uma página pré-renderizada ainda renderiza com o estado padrão, porque no momento do build não há string de consulta. Passe `searchParams` de um componente de servidor renderizado dinamicamente quando a primeira renderização precisar corresponder a uma URL com estado.

### Exemplo

```typescript
import { useUrlState } from 'state-in-url/next';

const form = { name: '', age: 0 };
const { urlState, setState, setUrl } = useUrlState(form);

// Atualizar o estado sem alterar a URL
setState({ name: 'test' });

// API igual ao React.useState
setState(currVal => ({ ...currVal, name: 'test' }) );

// redefinir o estado
setState((_curr, initial) => initial);

// Atualizar o estado e a URL
setUrl({ name: 'test' }, { replace: false, scroll: true });

// redefinir o estado e a URL
setUrl((_curr, initial) => initial);
```

## `setState`

Atualiza o estado sem modificar a URL.

### Parâmetros de `setState`

- `value: Partial<T> | (curr: T, initial: T) => T` - Novo valor de estado, ou uma função que recebe o estado atual e o estado inicial e retorna o novo estado.

## `setUrl`

Atualiza tanto o estado quanto a URL.

### Parâmetros de `setUrl`

- `value?: (Partial<T> | (curr: T, initial: T) => T, options)` - Novo valor de estado opcional, ou uma função que recebe o estado atual e o estado inicial e retorna o novo estado.
- `options?: Options` - Objeto de opções opcional. Quando `replace` é true usará router.replace. O `scroll` do Nextjs é `false` por padrão.

## `reset`

Atualiza tanto o estado quanto a URL.

### Parâmetros de `reset`

- `options?: Options` - Objeto de opções opcional. Quando `replace` é true usará router.replace. O `scroll` do Nextjs é `false` por padrão.
