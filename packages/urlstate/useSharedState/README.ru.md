<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · Русский · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=ru source=README.md source-blob=0af71643c66bc3b309c1d1952ab56b8224a5b420 status=translated -->
<!-- i18n:end -->

# API

Этот модуль предоставляет пользовательский React hook для обмена состоянием между несвязанными компонентами в приложениях React.

## Hook `useSharedState`

Пользовательский React hook, который управляет общим состоянием между компонентами.

### Параметры:

- `defaultState: T` - Объект, представляющий значения состояния по умолчанию.
- `_getInitial?: () => T` - Необязательная функция для получения начального состояния; полезна для SSR

### Возвращает:

Объект, содержащий:

- `state: T` - Текущее состояние.
- `getState: () => T` - Функция для получения текущего состояния.
- `setState: T | Partial<T> | (T) => void` - Функция для обновления состояния.

### Пример:

```typescript
import { useSharedState } from 'state-in-url/useSharedState';

const form = { name: '', age: 0 };
const { state, getState, setState } = useSharedState(form);

// Обновить состояние
setState({ name: 'test' });

// Или обновить состояние через функцию
setState(curr => ({ ...curr, name: 'test' }));

// Получить текущее состояние
const currentState = getState();
```

## `setState`

Обновляет общее состояние.

### Параметры:

- `value: T | ((currState: T) => T)` - Новое значение состояния, либо функция, которая получает текущее состояние и возвращает новое состояние.

## `getState`

Возвращает текущее состояние.

### Возвращает:

- Текущий объект состояния.
