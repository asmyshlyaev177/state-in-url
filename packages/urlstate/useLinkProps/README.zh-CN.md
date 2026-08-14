<!-- i18n:start -->
[English](./README.md) · 简体中文 · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=zh-CN source=README.md source-blob=1f4f64a26bb4e480a8007ed2024bb5b0ae89e257 status=translated -->
<!-- i18n:end -->

# API

本模块提供一个 React 钩子，用于把 URL 状态带到指向**另一个路由**的链接上。

## `useLinkProps` 钩子

返回一个函数，它构造出 `{ href, onClick }`，可展开到 `<a>` 或框架的 `<Link>` 上。

标记中保留你传入的原始 `href`，因此爬虫、预取和 `hreflang` 看到的都是规范 URL。不带修饰键的左键点击会跳转到该路由，并把当前状态编码进查询字符串。带修饰键的点击（⌘、Ctrl、Shift、Alt、中键）、带 `target` 的链接以及外部 href 都交给浏览器处理。

状态在点击链接时读取，而不是在渲染时。不会触发重新渲染，组件也不需要自己调用 `useUrlState`。

### 参数

- `shape: T` - 默认状态，与传给 `useUrlState` 的是同一个模块作用域对象。
- `navigate: (url: string) => void` - 你所用框架的导航方法，例如 `useRouter().push`（Next.js）或 `useNavigate()`（React Router、Remix）。

### 返回值

`(href: string) => { href: string, onClick: (event) => void }`

### 示例

```tsx
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLinkProps } from 'state-in-url/useLinkProps';

// 模块作用域，与应用其他地方传给 `useUrlState` 的是同一个对象
export const form = { name: '', age: 0 };

function LanguagePicker() {
  const linkProps = useLinkProps(form, useRouter().push);

  return <Link {...linkProps('/de/pricing')}>Deutsch</Link>;
}
```

当状态为 `{ name: 'John', age: 0 }` 时，点击该链接会跳转到 `/de/pricing?name='John'`。

### 哪些参数会被带上

对于你传入的 href，与 [`setUrl`](../next/useUrlState/README.md#updateurl) 保留的完全一致：

- 与默认值相同的值不会写出，和 `setUrl` 的处理一样；
- 当前 URL 中不属于 `shape` 的参数（例如 `utm_source` 之类）会被带上，这样切换语言不会丢失来源归因；
- 写在 `href` 里的参数优先于以上两者；
- `href` 中的 `#hash` 会被保留。

### 只用于跨路由的链接

指向*同一个*路由的链接应当使用 `setUrl`，它会合并写入且不做跳转。`useLinkProps` 面向的是 `setUrl` 无法表达的场景：路径不同，状态相同。

> [!WARNING]
> 不要为此把状态直接拼进 `href`。服务端渲染时状态尚不可知，标记与首次客户端渲染就会不一致，于是每个带参数的 URL 都会出现 hydration 不匹配。点击处理函数正是为避免这一点而存在。
