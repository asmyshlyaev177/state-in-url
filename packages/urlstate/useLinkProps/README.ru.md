<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · Русский · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=ru source=README.md source-blob=1f4f64a26bb4e480a8007ed2024bb5b0ae89e257 status=translated -->
<!-- i18n:end -->

# API

Этот модуль предоставляет React-хук, который переносит состояние из URL на ссылку, ведущую на **другой маршрут**.

## Хук `useLinkProps`

Возвращает функцию, собирающую `{ href, onClick }` — их можно раскрыть в `<a>` или во фреймворковый `<Link>`.

В разметке остаётся тот `href`, который вы передали, поэтому краулеры, префетч и `hreflang` видят канонический URL. Обычный левый клик выполняет переход на тот же маршрут, закодировав текущее состояние в строку запроса. Клики с модификаторами (⌘, Ctrl, Shift, Alt, средняя кнопка), ссылки с `target` и внешние href остаются на усмотрение браузера.

Состояние читается в момент клика, а не во время рендеринга. Ничего не перерисовывается, и компоненту не нужен собственный `useUrlState`.

### Параметры

- `shape: T` - Состояние по умолчанию — тот же объект уровня модуля, который получает `useUrlState`.
- `navigate: (url: string) => void` - Навигация вашего фреймворка, например `useRouter().push` (Next.js) или `useNavigate()` (React Router, Remix).

### Возвращаемое значение

`(href: string) => { href: string, onClick: (event) => void }`

### Пример

```tsx
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLinkProps } from 'state-in-url/useLinkProps';

// уровень модуля: тот же объект, что остальное приложение передаёт в `useUrlState`
export const form = { name: '', age: 0 };

function LanguagePicker() {
  const linkProps = useLinkProps(form, useRouter().push);

  return <Link {...linkProps('/de/pricing')}>Deutsch</Link>;
}
```

Если в состоянии `{ name: 'John', age: 0 }`, клик по этой ссылке приведёт на `/de/pricing?name='John'`.

### Какие параметры едут с вами

Те же, что сохранил бы [`setUrl`](../next/useUrlState/README.md#updateurl), но по переданному вами href:

- значения, равные значению по умолчанию, не попадают в URL — ровно так же, как их опускает `setUrl`;
- параметры текущего URL, не принадлежащие `shape`, — `utm_source` и ему подобные — едут дальше, чтобы смена языка не теряла источник перехода;
- параметры, записанные в самом `href`, важнее и тех и других;
- `#hash` в `href` сохраняется.

### Только для ссылок между маршрутами

Для ссылки на *тот же* маршрут нужен `setUrl`: он объединяет записи и не выполняет переход. `useLinkProps` — для случая, который `setUrl` выразить не может: другой путь, то же состояние.

> [!WARNING]
> Не подставляйте ради этого состояние прямо в `href`. При рендеринге на сервере состояние ещё неизвестно, поэтому разметка и первый клиентский рендер разойдутся — рассогласование гидратации на каждом URL с параметрами. Обработчик клика существует именно для того, чтобы этого избежать.
