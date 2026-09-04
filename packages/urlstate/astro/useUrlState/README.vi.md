<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · Tiếng Việt
<!-- i18n:meta locale=vi source=README.md source-blob=1e2218fc31f03646440896464e1dece6dd29d65d status=translated -->
<!-- i18n:end -->

# API

Module này cung cấp một React hook tùy chỉnh để quản lý state được đồng bộ với tham số tìm kiếm của URL trong các ứng dụng Astro, bên trong các React island.

Astro mặc định không có router phía client, nên hook ghi URL bằng `window.history` và đọc lại nó khi back/forward, khi chính nó ghi, và khi có bất kỳ lời gọi `pushState`/`replaceState` nào khác, kể cả `<ClientRouter />` của chính Astro. Các island trên cùng một trang chia sẻ state: state được định danh theo object state mặc định, và mọi island đều import cùng một module. Dưới `<ClientRouter />`, một island có state đang được dùng ở trang trước sẽ render state đó trước, rồi đồng bộ lại từ URL sau khi mount.

Preact island, thông qua `@astrojs/preact` với `compat: true`, dùng cùng một import.

## Hook `useUrlState`

Một React hook tùy chỉnh quản lý state và đồng bộ nó với tham số tìm kiếm của URL.

### Tham số

- `defaultState: object` - Một object đại diện cho các giá trị state mặc định.
- `searchParams?: object` - `Object.fromEntries(Astro.url.searchParams)`, được truyền vào island dưới dạng prop, để kết quả render trên server khớp với URL và hydration không phải sửa gì. Là một object thuần, không phải `URLSearchParams`: prop của island được tuần tự hóa, và một `URLSearchParams` sẽ đến nơi dưới dạng `{}`. Trang phải được render theo yêu cầu (`output: 'server'`, hoặc `export const prerender = false` trên trang, kèm một adapter): trang prerender không có request, nên island nhận `{}` và đọc URL sau khi hydration.
- `replace?: boolean` - Kiểm soát việc `setUrl` dùng `replaceState` hay `pushState`, mặc định replace=true, có thể ghi đè bằng `setUrl(stateObj, { replace: false })`

### Trả về

Một object chứa:

- `urlState: object` - State hiện tại.
- `setState: Function` - Hàm cập nhật state mà không cập nhật URL.
- `setUrl: Function` - Hàm cập nhật cả state và URL.
- `reset: Function` - Hàm đặt lại state về mặc định.

### Ví dụ

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

Gọi `setState` và `setUrl` từ các trình xử lý sự kiện hoặc effect, không bao giờ gọi trong lúc render:

```typescript
// Cập nhật state mà không thay đổi URL
setState({ name: 'test' });
setState(currVal => ({ ...currVal, name: 'test' }) );

// đặt lại state
setState((_curr, initial) => initial);

// Cập nhật state và URL
setUrl({ name: 'test' }, { replace: false });

// đặt lại state và URL
setUrl((_curr, initial) => initial);
```

Không dùng island, trên một trang không có framework phía client, `decodeState` và `encodeState` từ `state-in-url/encodeState` làm cùng việc đó trong frontmatter: giải mã `Astro.url.searchParams` thành một object có kiểu, và dựng URL tiếp theo cho một liên kết.

## `setState`

Cập nhật state mà không sửa đổi URL.

### Tham số của `setState`

- `value: Partial<T> | (curr: T, initial: T) => T` - Giá trị state mới, hoặc một hàm nhận state hiện tại và state ban đầu rồi trả về state mới.

## `setUrl`

Cập nhật cả state và URL.

### Tham số của `setUrl`

- `value?: Partial<T> | (curr: T, initial: T) => T` - Giá trị state mới tùy chọn, hoặc một hàm nhận state hiện tại và state ban đầu rồi trả về state mới.
- `options?: { replace?: boolean }` - `replaceState` (mặc định) hoặc `pushState`.

## `reset`

Đặt lại cả state và URL về mặc định.

### Tham số của `reset`

- `options?: { replace?: boolean }` - `replaceState` (mặc định) hoặc `pushState`.
