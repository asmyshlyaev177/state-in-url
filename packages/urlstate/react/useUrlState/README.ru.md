<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · Русский · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=ru source=README.md source-blob=da24fd34a3d4ed9b3d2fdcdc46897b6756d2a208 status=translated -->
<!-- i18n:end -->

# API

Этот модуль предоставляет пользовательский React hook для управления состоянием, синхронизированным с параметрами поиска в URL, для React-приложений **без роутера** — Vite, Create React App, виджет, встроенный в страницу, которой вы не управляете.

Поскольку роутера для навигации нет, hook пишет URL через `window.history` и читает его обратно при переходах назад/вперёд, при собственных записях и при любом другом `pushState`/`replaceState`. Все компоненты, использующие один и тот же объект состояния по умолчанию, разделяют состояние, поэтому передавать его через props не нужно.

Если в приложении роутер есть, используйте соответствующую точку входа: `state-in-url/next`, `state-in-url/react-router`, `state-in-url/react-router6`, `state-in-url/remix`. Для роутера, для которого этот пакет не поставляет точку входа (например, TanStack Router), соберите свой hook на основе [`useUrlStateBase`](../../useUrlStateBase). `state-in-url/astro` — это тот же самый hook, описанный для [островов](../../astro/useUrlState).

## Hook `useUrlState`

Пользовательский React hook, который управляет состоянием и синхронизирует его с параметрами поиска в URL.

### Параметры

- `defaultState: object` - Объект, представляющий значения состояния по умолчанию. Должен быть константой в области модуля: состояние разделяется по идентичности этого объекта.
- `searchParams?: object` - Параметры запроса из серверного рендеринга, в виде простого объекта, чтобы первый рендер совпал с URL. Приложение, работающее только на клиенте, его не передаёт, и тогда hook читает URL сам.
- `replace?: boolean` - Управляет тем, использует ли `setUrl` метод `replaceState` или `pushState`; по умолчанию replace=true, можно переопределить через `setUrl(stateObj, { replace: false })`

### Возвращает

Объект, содержащий:

- `urlState: object` - Текущее состояние.
- `setState: Function` - Функция для обновления состояния без обновления URL.
- `setUrl: Function` - Функция для обновления и состояния, и URL.
- `reset: Function` - Функция для сброса состояния к значениям по умолчанию.

### Пример

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

Любой другой компонент, вызывающий `useFilters()`, читает и пишет то же самое состояние и перерисовывается вместе с ним. Здесь нет provider и нечего передавать через props.

Вызывайте `setState` и `setUrl` из обработчиков событий или эффектов и никогда — во время рендера:

```typescript
// Обновить состояние без изменения URL
setState({ sort: 'date' });
setState(currVal => ({ ...currVal, sort: 'date' }) );

// сбросить состояние
setState((_curr, initial) => initial);

// Обновить состояние и URL
setUrl({ sort: 'date' }, { replace: false });

// сбросить состояние и URL
setUrl((_curr, initial) => initial);
```

Для текстового поля вызывайте `setState` на каждое нажатие клавиши, а `setUrl` — по blur или с debounce: запись в URL throttling-ается, и если повесить `setUrl` на `onChange`, ввод будет ощущаться медленным.
