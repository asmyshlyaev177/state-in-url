<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · Русский · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=ru source=README.md source-blob=dc43c5e03232b105d24b651ab42a37b8222d1f2c status=translated -->
<!-- i18n:end -->

# API

Этот модуль предоставляет пользовательский React hook для управления состоянием, синхронизированным с параметрами поиска в URL, в приложениях Next.js.

## Hook `useUrlState`

Пользовательский React hook, который управляет состоянием и синхронизирует его с параметрами поиска в URL.

### Параметры

- `defaultState: object` - Объект, представляющий значения состояния по умолчанию.
- `searchParams?: object` - Необязательный объект параметров поиска из серверного компонента Next.js.
- `replace?: boolean` - Управляет тем, использует ли `setUrl` метод `replace` или `push` у роутера; по умолчанию replace=true, можно переопределить через `setUrl(stateObj, { replace: false })`
- `useHistory` - Опционально можно использовать window.history для навигации; по умолчанию `true`, без _rsc-запросов <https://github.com/vercel/next.js/discussions/59167>
- `scroll?: boolean` - Опция из push/replace роутера Next.js

### Возвращает

Объект, содержащий:

- `urlState: object` - Текущее состояние.
- `setState: Function` - Функция для обновления состояния без обновления URL.
- `setUrl: Function` - Функция для обновления и состояния, и URL.
- `reset: Function` - Функция для сброса состояния к значениям по умолчанию.

### Предварительный рендеринг

Этот hook не вызывает `useSearchParams`, поэтому использующий его компонент не нуждается в границе `<Suspense>` и не исключает свою страницу из предварительного рендеринга. Начальное состояние он читает из переданных вами на сервере `searchParams`, а на клиенте — из `window.location.search`, и отслеживает последующие изменения, напрямую наблюдая за History API — что также перехватывает изменения URL, которые роутер Next не видит, например те, что сам hook делает в режиме `useHistory: true` по умолчанию.

Предварительно отрендеренная страница всё равно рендерится с состоянием по умолчанию, потому что на этапе сборки строки запроса нет. Передавайте `searchParams` из динамически рендерящегося серверного компонента, когда первая отрисовка должна соответствовать URL с состоянием.

### Пример

```typescript
import { useUrlState } from 'state-in-url/next';

const form = { name: '', age: 0 };
const { urlState, setState, setUrl } = useUrlState(form);

// Обновить состояние без изменения URL
setState({ name: 'test' });

// API такой же, как у React.useState
setState(currVal => ({ ...currVal, name: 'test' }) );

// сбросить состояние
setState((_curr, initial) => initial);

// Обновить состояние и URL
setUrl({ name: 'test' }, { replace: false, scroll: true });

// сбросить состояние и URL
setUrl((_curr, initial) => initial);
```

## `setState`

Обновляет состояние, не изменяя URL.

### Параметры `setState`

- `value: Partial<T> | (curr: T, initial: T) => T` - Новое значение состояния, либо функция, которая получает текущее состояние и начальное состояние и возвращает новое состояние.

## `setUrl`

Обновляет и состояние, и URL.

### Параметры `setUrl`

- `value?: (Partial<T> | (curr: T, initial: T) => T, options)` - Необязательное новое значение состояния, либо функция, которая получает текущее состояние и начальное состояние и возвращает новое состояние.
- `options?: Options` - Необязательный объект опций. Если `replace` истинно, используется router.replace. `scroll` у Nextjs по умолчанию `false`.

## `reset`

Обновляет и состояние, и URL.

### Параметры `reset`

- `options?: Options` - Необязательный объект опций. Если `replace` истинно, используется router.replace. `scroll` у Nextjs по умолчанию `false`.
