<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · Tiếng Việt
<!-- i18n:meta locale=vi source=README.md source-blob=ccf4feacda4d25a7cbd63d3d1c7165c9b4b4cb00 status=translated -->
<!-- i18n:end -->

# API

Hook này có thể được dùng làm nền tảng để tạo các hook cho các router khác nhau.

## Hook `useUrlStateBase`

Một React hook tùy chỉnh để tạo các hook `useUrlState` tùy chỉnh.

### Tham số:

- `defaultState: object` - Một object đại diện cho các giá trị state mặc định.
- `router: object` - Object router với các phương thức `push` và `replace`
- `getInitialState?: function` - Hàm tùy chọn trả về state ban đầu.

### Trả về:

Một object chứa:

- `state: object` - State hiện tại.
- `getState: Function` - Hàm lấy state.
- `updateState: Function` - Hàm cập nhật state mà không cập nhật URL.
- `updateUrl: Function` - Hàm cập nhật cả state và URL.
- `reset: Function` - Hàm đặt lại state và url về giá trị mặc định

### Ví dụ:

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

Cập nhật state mà không sửa đổi URL.

### Tham số:

- `value: T | Partial<T> | T => T` - Giá trị state mới, hoặc một hàm nhận state hiện tại và trả về state mới.

## `updateUrl`

Cập nhật cả state và URL.

### Tham số:

- `value?: T | Partial<T> | (currState: T) => T` - Giá trị state mới tùy chọn, hoặc một hàm nhận state hiện tại và trả về state mới.
- `options?: Options` - Object tùy chọn. Khi `replace` là true, sẽ dùng router.replace. Các tùy chọn nextjs native khác cho push/replace của `router`.

## `reset`

Đặt lại state và URL về giá trị mặc định.

### Tham số:

- `options?: Options` - Object tùy chọn. Khi `replace` là true, sẽ dùng router.replace. Các tùy chọn nextjs native khác cho push/replace của `router`.
