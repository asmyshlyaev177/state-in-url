<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · Português (BR) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=pt-BR source=README.md source-blob=ccf4feacda4d25a7cbd63d3d1c7165c9b4b4cb00 status=translated -->
<!-- i18n:end -->

# API

Este hook pode ser usado como base para criar hooks para diferentes routers.

## Hook `useUrlStateBase`

Um hook React personalizado para criar hooks `useUrlState` personalizados.

### Parâmetros:

- `defaultState: object` - Um objeto que representa os valores de estado padrão.
- `router: object` - Objeto router com os métodos `push` e `replace`
- `getInitialState?: function` - Função opcional que retorna o estado inicial.

### Retorna:

Um objeto contendo:

- `state: object` - O estado atual.
- `getState: Function` - Função para obter o estado.
- `updateState: Function` - Função para atualizar o estado sem atualizar a URL.
- `updateUrl: Function` - Função para atualizar tanto o estado quanto a URL.
- `reset: Function` - Função para redefinir o estado e a url para os valores padrão

### Exemplo:

```typescript
import { useUrlStateBase } from 'state-in-url/useUrlStateBase';

function useUrlStateCustom<T>(state: T) {
  const router = React.useMemo({
    push: (url: string) => window.history.pushState(url),
    replace: (url: string) => window.history.replaceState(url)
  }, []);
  return useUrlState(state, router);
}
```

## `updateState`

Atualiza o estado sem modificar a URL.

### Parâmetros:

- `value: T | Partial<T> | T => T` - Novo valor de estado, ou uma função que recebe o estado atual e retorna o novo estado.

## `updateUrl`

Atualiza tanto o estado quanto a URL.

### Parâmetros:

- `value?: T | Partial<T> | (currState: T) => T` - Novo valor de estado opcional, ou uma função que recebe o estado atual e retorna o novo estado.
- `options?: Options` - Objeto de opções opcional. Quando `replace` é true usará router.replace. Outras opções nativas do nextjs para push/replace do `router`.

## `reset`

Redefine o estado e a URL para os valores padrão.

### Parâmetros:

- `options?: Options` - Objeto de opções opcional. Quando `replace` é true usará router.replace. Outras opções nativas do nextjs para push/replace do `router`.
