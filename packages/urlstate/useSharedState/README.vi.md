<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · Tiếng Việt
<!-- i18n:meta locale=vi source=README.md source-blob=0af71643c66bc3b309c1d1952ab56b8224a5b420 status=translated -->
<!-- i18n:end -->

# API

Module này cung cấp một React hook tùy chỉnh để chia sẻ state giữa các component không liên quan trong các ứng dụng React.

## Hook `useSharedState`

Một React hook tùy chỉnh quản lý state dùng chung giữa các component.

### Tham số:

- `defaultState: T` - Một object đại diện cho các giá trị state mặc định.
- `_getInitial?: () => T` - Hàm tùy chọn để lấy state ban đầu, hữu ích cho SSR

### Trả về:

Một object chứa:

- `state: T` - State hiện tại.
- `getState: () => T` - Hàm lấy state hiện tại.
- `setState: T | Partial<T> | (T) => void` - Hàm cập nhật state.

### Ví dụ:

```typescript
import { useSharedState } from 'state-in-url/useSharedState';

const form = { name: '', age: 0 };
const { state, getState, setState } = useSharedState(form);

// Cập nhật state
setState({ name: 'test' });

// Hoặc cập nhật state bằng hàm
setState(curr => ({ ...curr, name: 'test' }));

// Lấy state hiện tại
const currentState = getState();
```

## `setState`

Cập nhật state dùng chung.

### Tham số:

- `value: T | ((currState: T) => T)` - Giá trị state mới, hoặc một hàm nhận state hiện tại và trả về state mới.

## `getState`

Trả về state hiện tại.

### Trả về:

- Object state hiện tại.
