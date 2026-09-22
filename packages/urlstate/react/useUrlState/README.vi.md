<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · Tiếng Việt
<!-- i18n:meta locale=vi source=README.md source-blob=da24fd34a3d4ed9b3d2fdcdc46897b6756d2a208 status=translated -->
<!-- i18n:end -->

# API

Module này cung cấp một React hook tuỳ biến để quản lý trạng thái được đồng bộ với tham số tìm kiếm trên URL, dành cho các ứng dụng React **không có router** — Vite, Create React App, hay một widget gắn vào trang mà bạn không kiểm soát.

Vì không có router để điều hướng, hook ghi URL bằng `window.history` và đọc lại khi người dùng lùi/tiến, khi chính nó ghi, và khi có bất kỳ `pushState`/`replaceState` nào khác. Mọi component dùng chung đối tượng trạng thái mặc định đều dùng chung trạng thái, nên không cần truyền xuống qua props.

Nếu ứng dụng có router, hãy dùng entry point tương ứng: `state-in-url/next`, `state-in-url/react-router`, `state-in-url/react-router6`, `state-in-url/remix`. Với router mà gói này không có entry point riêng, ví dụ TanStack Router, hãy tự dựng hook bằng [`useUrlStateBase`](../../useUrlStateBase). `state-in-url/astro` chính là hook này, được viết tài liệu cho [island](../../astro/useUrlState).

## Hook `useUrlState`

Một React hook tuỳ biến quản lý trạng thái và đồng bộ nó với tham số tìm kiếm trên URL.

### Tham số

- `defaultState: object` - Đối tượng chứa các giá trị trạng thái mặc định. Phải là hằng ở phạm vi module: trạng thái được chia sẻ theo định danh của đối tượng này.
- `searchParams?: object` - Tham số truy vấn từ lần render trên máy chủ, dưới dạng đối tượng thuần, để lần render đầu tiên khớp với URL. Ứng dụng chỉ chạy phía client có thể bỏ qua, khi đó hook tự đọc URL.
- `replace?: boolean` - Quyết định `setUrl` dùng `replaceState` hay `pushState`, mặc định replace=true, có thể ghi đè bằng `setUrl(stateObj, { replace: false })`

### Trả về

Một đối tượng gồm:

- `urlState: object` - Trạng thái hiện tại.
- `setState: Function` - Hàm cập nhật trạng thái mà không cập nhật URL.
- `setUrl: Function` - Hàm cập nhật cả trạng thái lẫn URL.
- `reset: Function` - Hàm đặt lại trạng thái về mặc định.

### Ví dụ

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

Bất kỳ component nào khác gọi `useFilters()` đều đọc và ghi cùng một trạng thái và render lại theo nó. Không có provider và không phải truyền gì qua props.

Hãy gọi `setState` và `setUrl` từ trình xử lý sự kiện hoặc effect, tuyệt đối không gọi trong lúc render:

```typescript
// Cập nhật trạng thái mà không đổi URL
setState({ sort: 'date' });
setState(currVal => ({ ...currVal, sort: 'date' }) );

// đặt lại trạng thái
setState((_curr, initial) => initial);

// Cập nhật trạng thái và URL
setUrl({ sort: 'date' }, { replace: false });

// đặt lại trạng thái và URL
setUrl((_curr, initial) => initial);
```

Với ô nhập văn bản, hãy gọi `setState` mỗi lần gõ phím và gọi `setUrl` khi blur hoặc sau debounce — thao tác ghi URL bị tiết lưu, và gắn `setUrl` vào `onChange` sẽ khiến việc gõ có cảm giác chậm.
