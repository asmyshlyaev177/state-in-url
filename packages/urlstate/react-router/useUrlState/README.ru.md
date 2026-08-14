<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · Русский · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=ru source=README.md source-blob=1c8bfbd0d0f5f8b7ac5ea33a5a298550b0141f5f status=translated -->
<!-- i18n:end -->

# API

Этот модуль предоставляет пользовательский React hook для управления состоянием, синхронизированным с параметрами поиска в URL, в приложениях react-router@6-7.

## Hook `useUrlState`

Пользовательский React hook, который управляет состоянием и синхронизирует его с параметрами поиска в URL.

### Параметры

- `defaultState: object` - Объект, представляющий значения состояния по умолчанию.
- `replace?: boolean` - Управляет тем, использует ли `setUrl` метод `replace` или `push` у роутера; по умолчанию replace=true, можно переопределить через `updateUrl(stateObj, { replace: false })`
- `options?: NavigateOptions` - Аргумент `replace` и типы из [`NavigateOptions`](https://api.reactrouter.com/v7/interfaces/react_router.NavigateOptions.html) типа `react-router`, то же, что и опции `useNavigate`
- `useHistory` - Опционально можно использовать window.history для навигации
- `preventScrollReset` - Опция из navigate react-router

### Возвращает

Объект, содержащий:

- `urlState: object` - Текущее состояние.
- `setState: Function` - Функция для обновления состояния без обновления URL.
- `setUrl: Function` - Функция для обновления и состояния, и URL.
- `reset: Function` - Функция для сброса состояния к значениям по умолчанию.

### Пример

```typescript
import { useUrlState } from 'state-in-url/react-router';

const form = { name: '', age: 0 };
const { urlState, setState, setUrl } = useUrlState(form);

// Обновить состояние без изменения URL
setState({ name: 'test' });
setState(currVal => ({ ...currVal, name: 'test' }) );

// сбросить состояние
setState((_curr, initial) => initial);

// Обновить состояние и URL
// опции из типа `NavigateOptions` из 'react-router`
setUrl({ name: 'test' }, { replace: false, preventScrollReset: false });

// сбросить состояние и URL
setUrl((_curr, initial) => initial);
```

## `setState`

Обновляет состояние, не изменяя URL.

### Параметры `setState`

- `value: Partial<T> | (curr: T, initial: T) => T` - Новое значение состояния, либо функция, которая получает текущее состояние и начальное состояние и возвращает новое состояние.
- `...NavigateOptions` - свойства из NavigateOptions типа `react-router`, то же, что и опции `useNavigate`

## `setUrl`

Обновляет и состояние, и URL.

### Параметры `setUrl`

- `value?: (Partial<T> | (curr: T, initial: T) => T, options)` - Необязательное новое значение состояния, либо функция, которая получает текущее состояние и начальное состояние и возвращает новое состояние.
- `options?: NavigateOptions` - Необязательный объект опций из типа [`NavigateOptions`](https://api.reactrouter.com/v7/interfaces/react_router.NavigateOptions.html) react-router.

## `reset`

Обновляет и состояние, и URL.

### Параметры `reset`

- `options?: NavigateOptions` - Необязательный объект опций из типа [`NavigateOptions`](https://api.reactrouter.com/v7/interfaces/react_router.NavigateOptions.html) react-router.
