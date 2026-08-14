<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · Português (BR) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=pt-BR source=README.md source-blob=0af71643c66bc3b309c1d1952ab56b8224a5b420 status=translated -->
<!-- i18n:end -->

# API

Este módulo fornece um hook React personalizado para compartilhar estado entre componentes não relacionados em aplicações React.

## Hook `useSharedState`

Um hook React personalizado que gerencia o estado compartilhado entre componentes.

### Parâmetros:

- `defaultState: T` - Um objeto que representa os valores de estado padrão.
- `_getInitial?: () => T` - Função opcional para obter o estado inicial, útil para SSR

### Retorna:

Um objeto contendo:

- `state: T` - O estado atual.
- `getState: () => T` - Função para obter o estado atual.
- `setState: T | Partial<T> | (T) => void` - Função para atualizar o estado.

### Exemplo:

```typescript
import { useSharedState } from 'state-in-url/useSharedState';

const form = { name: '', age: 0 };
const { state, getState, setState } = useSharedState(form);

// Atualizar o estado
setState({ name: 'test' });

// Ou atualizar o estado usando uma função
setState(curr => ({ ...curr, name: 'test' }));

// Obter o estado atual
const currentState = getState();
```

## `setState`

Atualiza o estado compartilhado.

### Parâmetros:

- `value: T | ((currState: T) => T)` - Novo valor de estado, ou uma função que recebe o estado atual e retorna o novo estado.

## `getState`

Retorna o estado atual.

### Retorna:

- O objeto de estado atual.
