<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · Русский · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=ru source=README.md source-blob=1e2218fc31f03646440896464e1dece6dd29d65d status=translated -->
<!-- i18n:end -->

# API

Этот модуль предоставляет пользовательский React hook для управления состоянием, синхронизированным с параметрами поиска в URL, в приложениях Astro — внутри React-островов.

У Astro по умолчанию нет клиентского роутера, поэтому hook записывает URL через `window.history` и считывает его обратно при переходах назад/вперёд, при собственных записях и при любом другом `pushState`/`replaceState`, включая собственный `<ClientRouter />` Astro. Острова на одной странице используют общее состояние: ключом служит объект состояния по умолчанию, и каждый остров импортирует один и тот же модуль. Под `<ClientRouter />` остров, состояние которого использовалось на предыдущей странице, сначала рендерит это состояние и после монтирования заново синхронизируется с URL.

Preact-острова, через `@astrojs/preact` с `compat: true`, используют тот же импорт.

## Hook `useUrlState`

Пользовательский React hook, который управляет состоянием и синхронизирует его с параметрами поиска в URL.

### Параметры

- `defaultState: object` - Объект, представляющий значения состояния по умолчанию.
- `searchParams?: object` - `Object.fromEntries(Astro.url.searchParams)`, передаётся в остров как prop, чтобы серверный рендер совпадал с URL и гидратации нечего было исправлять. Обычный объект, а не `URLSearchParams`: props островов сериализуются, а `URLSearchParams` приходит как `{}`. Страница должна рендериться по запросу (`output: 'server'` или `export const prerender = false` на странице, с адаптером): у предрендеренной страницы нет запроса, поэтому остров получает `{}` и читает URL после гидратации.
- `replace?: boolean` - Управляет тем, использует ли `setUrl` `replaceState` или `pushState`; по умолчанию replace=true, можно переопределить через `setUrl(stateObj, { replace: false })`

### Возвращает

Объект, содержащий:

- `urlState: object` - Текущее состояние.
- `setState: Function` - Функция для обновления состояния без обновления URL.
- `setUrl: Function` - Функция для обновления и состояния, и URL.
- `reset: Function` - Функция для сброса состояния к значениям по умолчанию.

### Пример

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

Вызывайте `setState` и `setUrl` из обработчиков событий или эффектов, но никогда во время рендера:

```typescript
// Обновить состояние без изменения URL
setState({ name: 'test' });
setState(currVal => ({ ...currVal, name: 'test' }) );

// сбросить состояние
setState((_curr, initial) => initial);

// Обновить состояние и URL
setUrl({ name: 'test' }, { replace: false });

// сбросить состояние и URL
setUrl((_curr, initial) => initial);
```

Без островов, на странице без клиентского фреймворка, ту же работу в frontmatter выполняют `decodeState` и `encodeState` из `state-in-url/encodeState`: декодируют `Astro.url.searchParams` в типизированный объект и строят следующий URL для ссылки.

## `setState`

Обновляет состояние, не изменяя URL.

### Параметры `setState`

- `value: Partial<T> | (curr: T, initial: T) => T` - Новое значение состояния, либо функция, которая получает текущее состояние и начальное состояние и возвращает новое состояние.

## `setUrl`

Обновляет и состояние, и URL.

### Параметры `setUrl`

- `value?: Partial<T> | (curr: T, initial: T) => T` - Необязательное новое значение состояния, либо функция, которая получает текущее состояние и начальное состояние и возвращает новое состояние.
- `options?: { replace?: boolean }` - `replaceState` (по умолчанию) или `pushState`.

## `reset`

Сбрасывает и состояние, и URL к значениям по умолчанию.

### Параметры `reset`

- `options?: { replace?: boolean }` - `replaceState` (по умолчанию) или `pushState`.