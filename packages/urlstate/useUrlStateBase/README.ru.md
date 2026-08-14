<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · Русский · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=ru source=README.md source-blob=ccf4feacda4d25a7cbd63d3d1c7165c9b4b4cb00 status=translated -->
<!-- i18n:end -->

# API

Этот hook можно использовать как основу для создания hook'ов под разные роутеры.

## Hook `useUrlStateBase`

Пользовательский React hook для создания собственных hook'ов `useUrlState`.

### Параметры:

- `defaultState: object` - Объект, представляющий значения состояния по умолчанию.
- `router: object` - Объект роутера с методами `push` и `replace`
- `getInitialState?: function` - Необязательная функция, возвращающая начальное состояние.

### Возвращает:

Объект, содержащий:

- `state: object` - Текущее состояние.
- `getState: Function` - Функция для получения состояния.
- `updateState: Function` - Функция для обновления состояния без обновления URL.
- `updateUrl: Function` - Функция для обновления и состояния, и URL.
- `reset: Function` - Функция для сброса состояния и URL к значениям по умолчанию

### Пример:

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

Обновляет состояние, не изменяя URL.

### Параметры:

- `value: T | Partial<T> | T => T` - Новое значение состояния, либо функция, которая получает текущее состояние и возвращает новое состояние.

## `updateUrl`

Обновляет и состояние, и URL.

### Параметры:

- `value?: T | Partial<T> | (currState: T) => T` - Необязательное новое значение состояния, либо функция, которая получает текущее состояние и возвращает новое состояние.
- `options?: Options` - Необязательный объект опций. Если `replace` истинно, используется router.replace. Прочие нативные опции nextjs для push/replace `router`.

## `reset`

Сбрасывает состояние и URL к значениям по умолчанию.

### Параметры:

- `options?: Options` - Необязательный объект опций. Если `replace` истинно, используется router.replace. Прочие нативные опции nextjs для push/replace `router`.
