<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · Português (BR) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=pt-BR source=README.md source-blob=7f1a0b9b6347360148100d95626ead84f8200c12 status=translated -->
<!-- i18n:end -->

# API

Este módulo fornece um hook React personalizado para gerenciar o estado sincronizado com os parâmetros de busca da URL em aplicações react-router@6-7.

## Hook `useUrlState`

Um hook React personalizado que gerencia o estado e o sincroniza com os parâmetros de busca da URL.

### Parâmetros

- `defaultState: object` - Um objeto que representa os valores de estado padrão.
- `replace?: boolean` - Controla se `setUrl` usará o método `replace` ou `push` no router, padrão replace=true, pode ser substituído por `updateUrl(stateObj, { replace: false })`
- `options?: NavigateOptions` - O argumento `replace` e os tipos de [`NavigateOptions`](https://api.reactrouter.com/v7/interfaces/react_router.NavigateOptions.html) do tipo `react-router`, o mesmo que as opções de `useNavigate`
- `useHistory` - Opcionalmente pode usar window.history para navegação
- `preventScrollReset` - Opção do navigate do react-router

### Retorna

Um objeto contendo:

- `urlState: object` - O estado atual.
- `setState: Function` - Função para atualizar o estado sem atualizar a URL.
- `setUrl: Function` - Função para atualizar tanto o estado quanto a URL.
- `reset: Function` - Função para redefinir o estado para o padrão.

### Exemplo

```typescript
import { useUrlState } from 'state-in-url/react-router6';

const form = { name: '', age: 0 };
const { urlState, setState, setUrl } = useUrlState(form);

// Atualizar o estado sem alterar a URL
setState({ name: 'test' });
setState(currVal => ({ ...currVal, name: 'test' }) );

// redefinir o estado
setState((_curr, initial) => initial);

// Atualizar o estado e a URL
// opções do tipo `NavigateOptions` do 'react-router`
setUrl({ name: 'test' }, { replace: false, preventScrollReset: false });

// redefinir o estado e a URL
setUrl((_curr, initial) => initial);
```

## `setState`

Atualiza o estado sem modificar a URL.

### Parâmetros de `setState`

- `value: Partial<T> | (curr: T, initial: T) => T` - Novo valor de estado, ou uma função que recebe o estado atual e o estado inicial e retorna o novo estado.
- `...NavigateOptions` - props de NavigateOptions do tipo `react-router`, o mesmo que as opções de `useNavigate`

## `setUrl`

Atualiza tanto o estado quanto a URL.

### Parâmetros de `setUrl`

- `value?: (Partial<T> | (curr: T, initial: T) => T, options)` - Novo valor de estado opcional, ou uma função que recebe o estado atual e o estado inicial e retorna o novo estado.
- `options?: NavigateOptions` - Objeto de opções opcional do tipo [`NavigateOptions`](https://api.reactrouter.com/v7/interfaces/react_router.NavigateOptions.html) do react-router.

## `reset`

Atualiza tanto o estado quanto a URL.

### Parâmetros de `reset`

- `options?: NavigateOptions` - Objeto de opções opcional do tipo [`NavigateOptions`](https://api.reactrouter.com/v7/interfaces/react_router.NavigateOptions.html) do react-router.
