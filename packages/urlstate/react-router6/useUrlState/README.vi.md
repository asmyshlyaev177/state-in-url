<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · Tiếng Việt
<!-- i18n:meta locale=vi source=README.md source-blob=7f1a0b9b6347360148100d95626ead84f8200c12 status=translated -->
<!-- i18n:end -->

# API

Module này cung cấp một React hook tùy chỉnh để quản lý state được đồng bộ với tham số tìm kiếm của URL trong các ứng dụng react-router@6-7.

## Hook `useUrlState`

Một React hook tùy chỉnh quản lý state và đồng bộ nó với tham số tìm kiếm của URL.

### Tham số

- `defaultState: object` - Một object đại diện cho các giá trị state mặc định.
- `replace?: boolean` - Kiểm soát việc `setUrl` dùng phương thức `replace` hay `push` trên router, mặc định replace=true, có thể ghi đè bằng `updateUrl(stateObj, { replace: false })`
- `options?: NavigateOptions` - Đối số `replace` và các kiểu từ [`NavigateOptions`](https://api.reactrouter.com/v7/interfaces/react_router.NavigateOptions.html) của kiểu `react-router`, giống các tùy chọn của `useNavigate`
- `useHistory` - Tùy chọn có thể dùng window.history để điều hướng
- `preventScrollReset` - Tùy chọn từ navigate của react-router

### Trả về

Một object chứa:

- `urlState: object` - State hiện tại.
- `setState: Function` - Hàm cập nhật state mà không cập nhật URL.
- `setUrl: Function` - Hàm cập nhật cả state và URL.
- `reset: Function` - Hàm đặt lại state về mặc định.

### Ví dụ

```typescript
import { useUrlState } from 'state-in-url/react-router6';

const form = { name: '', age: 0 };
const { urlState, setState, setUrl } = useUrlState(form);

// Cập nhật state mà không thay đổi URL
setState({ name: 'test' });
setState(currVal => ({ ...currVal, name: 'test' }) );

// đặt lại state
setState((_curr, initial) => initial);

// Cập nhật state và URL
// tùy chọn từ kiểu `NavigateOptions` của 'react-router`
setUrl({ name: 'test' }, { replace: false, preventScrollReset: false });

// đặt lại state và URL
setUrl((_curr, initial) => initial);
```

## `setState`

Cập nhật state mà không sửa đổi URL.

### Tham số của `setState`

- `value: Partial<T> | (curr: T, initial: T) => T` - Giá trị state mới, hoặc một hàm nhận state hiện tại và state ban đầu rồi trả về state mới.
- `...NavigateOptions` - props từ NavigateOptions của kiểu `react-router`, giống các tùy chọn của `useNavigate`

## `setUrl`

Cập nhật cả state và URL.

### Tham số của `setUrl`

- `value?: (Partial<T> | (curr: T, initial: T) => T, options)` - Giá trị state mới tùy chọn, hoặc một hàm nhận state hiện tại và state ban đầu rồi trả về state mới.
- `options?: NavigateOptions` - Object tùy chọn từ kiểu [`NavigateOptions`](https://api.reactrouter.com/v7/interfaces/react_router.NavigateOptions.html) của react-router.

## `reset`

Cập nhật cả state và URL.

### Tham số của `reset`

- `options?: NavigateOptions` - Object tùy chọn từ kiểu [`NavigateOptions`](https://api.reactrouter.com/v7/interfaces/react_router.NavigateOptions.html) của react-router.
