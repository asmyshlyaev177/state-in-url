<!-- i18n:start -->
English · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=en -->
<!-- i18n:end -->

# API

This module provides a React hook for carrying url state to a link that points at a **different route**.

## `useLinkProps` hook

Returns a function that builds `{ href, onClick }` to spread onto an `<a>` or a framework `<Link>`.

The markup keeps the plain `href` you passed, so crawlers, prefetching and `hreflang` see the canonical URL. A plain left click navigates to that same route with the current state encoded into its query string. Modified clicks (⌘, Ctrl, Shift, Alt, middle button), links with a `target` and external hrefs are left to the browser.

State is read when the link is clicked, not during render. Nothing re-renders, and the component does not need its own `useUrlState`.

### Parameters

- `shape: T` - Default state — the same module-scoped object `useUrlState` gets.
- `navigate: (url: string) => void` - Your framework's navigation, e.g. `useRouter().push` (Next.js) or `useNavigate()` (React Router, Remix).

### Returns

`(href: string) => { href: string, onClick: (event) => void }`

### Example

```tsx
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLinkProps } from 'state-in-url/useLinkProps';

// module scope, same object the rest of the app passes to `useUrlState`
export const form = { name: '', age: 0 };

function LanguagePicker() {
  const linkProps = useLinkProps(form, useRouter().push);

  return <Link {...linkProps('/de/pricing')}>Deutsch</Link>;
}
```

With `{ name: 'John', age: 0 }` in state, clicking that link navigates to `/de/pricing?name='John'`.

### Which params come along

The same ones [`setUrl`](../next/useUrlState/README.md#updateurl) would have kept, at the href you passed:

- values equal to the default are left out, exactly as `setUrl` leaves them out;
- params of the current url that the shape does not own — `utm_source` and friends — come along, so a language switch does not lose attribution;
- params written into the `href` itself win over both;
- a `#hash` in the `href` is preserved.

### Use it for cross-route links only

For a link to the *same* route, `setUrl` is the tool — it batches writes and does not navigate. `useLinkProps` is for the case `setUrl` cannot express: a different path, same state.

> [!WARNING]
> Do not put state into the `href` itself to achieve this. Rendered on the server, the state is not known yet, so the markup and the first client render disagree — a hydration mismatch on every url that carries params. The click handler exists to avoid it.
