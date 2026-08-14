<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · Tiếng Việt
<!-- i18n:meta locale=vi source=README.md source-blob=dc43c5e03232b105d24b651ab42a37b8222d1f2c status=translated -->
<!-- i18n:end -->

# API

Module này cung cấp một React hook tùy chỉnh để quản lý state được đồng bộ với tham số tìm kiếm của URL trong các ứng dụng Next.js.

## Hook `useUrlState`

Một React hook tùy chỉnh quản lý state và đồng bộ nó với tham số tìm kiếm của URL.

### Tham số

- `defaultState: object` - Một object đại diện cho các giá trị state mặc định.
- `searchParams?: object` - Object tham số tìm kiếm tùy chọn từ server component của Next.js.
- `replace?: boolean` - Kiểm soát việc `setUrl` dùng phương thức `replace` hay `push` trên router, mặc định replace=true, có thể ghi đè bằng `setUrl(stateObj, { replace: false })`
- `useHistory` - Tùy chọn có thể dùng window.history để điều hướng, mặc định `true` không có request _rsc <https://github.com/vercel/next.js/discussions/59167>
- `scroll?: boolean` - Tùy chọn từ push/replace của router Next.js

### Trả về

Một object chứa:

- `urlState: object` - State hiện tại.
- `setState: Function` - Hàm cập nhật state mà không cập nhật URL.
- `setUrl: Function` - Hàm cập nhật cả state và URL.
- `reset: Function` - Hàm đặt lại state về mặc định.

### Prerendering

Hook này không gọi `useSearchParams`, nên component dùng nó không cần ranh giới `<Suspense>` và không khiến trang bị loại khỏi prerendering. Nó đọc state ban đầu từ `searchParams` bạn truyền ở server và từ `window.location.search` ở client, rồi theo dõi các thay đổi sau đó bằng cách quan sát trực tiếp History API — điều này cũng bắt được các thay đổi URL mà router của Next không bao giờ thấy, chẳng hạn như các thay đổi do chính hook này thực hiện trong chế độ `useHistory: true` mặc định.

Trang được prerender vẫn hiển thị với state mặc định, vì tại thời điểm build không có chuỗi truy vấn. Hãy truyền `searchParams` từ một server component được render động khi lần hiển thị đầu tiên phải khớp với một URL có state.

### Ví dụ

```typescript
import { useUrlState } from 'state-in-url/next';

const form = { name: '', age: 0 };
const { urlState, setState, setUrl } = useUrlState(form);

// Cập nhật state mà không thay đổi URL
setState({ name: 'test' });

// API giống React.useState
setState(currVal => ({ ...currVal, name: 'test' }) );

// đặt lại state
setState((_curr, initial) => initial);

// Cập nhật state và URL
setUrl({ name: 'test' }, { replace: false, scroll: true });

// đặt lại state và URL
setUrl((_curr, initial) => initial);
```

## `setState`

Cập nhật state mà không sửa đổi URL.

### Tham số của `setState`

- `value: Partial<T> | (curr: T, initial: T) => T` - Giá trị state mới, hoặc một hàm nhận state hiện tại và state ban đầu rồi trả về state mới.

## `setUrl`

Cập nhật cả state và URL.

### Tham số của `setUrl`

- `value?: (Partial<T> | (curr: T, initial: T) => T, options)` - Giá trị state mới tùy chọn, hoặc một hàm nhận state hiện tại và state ban đầu rồi trả về state mới.
- `options?: Options` - Object tùy chọn. Khi `replace` là true, sẽ dùng router.replace. `scroll` của Nextjs mặc định là `false`.

## `reset`

Cập nhật cả state và URL.

### Tham số của `reset`

- `options?: Options` - Object tùy chọn. Khi `replace` là true, sẽ dùng router.replace. `scroll` của Nextjs mặc định là `false`.
