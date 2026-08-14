<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · Tiếng Việt
<!-- i18n:meta locale=vi source=README.md source-blob=1f4f64a26bb4e480a8007ed2024bb5b0ae89e257 status=translated -->
<!-- i18n:end -->

# API

Module này cung cấp một hook React để mang trạng thái trên URL sang một liên kết trỏ tới **một route khác**.

## Hook `useLinkProps`

Trả về một hàm dựng ra `{ href, onClick }` để bạn trải vào một `<a>` hoặc `<Link>` của framework.

Phần đánh dấu vẫn giữ nguyên `href` bạn truyền vào, nên trình thu thập dữ liệu, cơ chế tải trước và `hreflang` đều thấy URL chuẩn tắc. Một cú nhấp chuột trái không kèm phím bổ trợ sẽ điều hướng tới đúng route đó, với trạng thái hiện tại được mã hoá vào chuỗi truy vấn. Nhấp kèm phím bổ trợ (⌘, Ctrl, Shift, Alt, nút giữa), liên kết có `target` và href ngoài trang đều được để cho trình duyệt xử lý.

Trạng thái được đọc lúc bạn nhấp vào liên kết, không phải lúc render. Không có gì phải render lại, và component cũng không cần `useUrlState` của riêng nó.

### Tham số

- `shape: T` - Trạng thái mặc định — chính đối tượng ở phạm vi module mà `useUrlState` nhận.
- `navigate: (url: string) => void` - Cơ chế điều hướng của framework bạn dùng, ví dụ `useRouter().push` (Next.js) hoặc `useNavigate()` (React Router, Remix).

### Giá trị trả về

`(href: string) => { href: string, onClick: (event) => void }`

### Ví dụ

```tsx
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLinkProps } from 'state-in-url/useLinkProps';

// phạm vi module: cùng một đối tượng mà phần còn lại của ứng dụng truyền cho `useUrlState`
export const form = { name: '', age: 0 };

function LanguagePicker() {
  const linkProps = useLinkProps(form, useRouter().push);

  return <Link {...linkProps('/de/pricing')}>Deutsch</Link>;
}
```

Với trạng thái `{ name: 'John', age: 0 }`, nhấp vào liên kết đó sẽ đưa bạn tới `/de/pricing?name='John'`.

### Những tham số nào đi cùng

Đúng những tham số mà [`setUrl`](../next/useUrlState/README.md#updateurl) đã giữ lại, trên href bạn truyền vào:

- giá trị trùng với mặc định sẽ bị bỏ qua, y như cách `setUrl` bỏ qua chúng;
- các tham số của URL hiện tại không thuộc về `shape` — `utm_source` và những tham số tương tự — vẫn đi cùng, để việc đổi ngôn ngữ không làm mất nguồn truy cập;
- tham số viết thẳng trong `href` thắng cả hai trường hợp trên;
- `#hash` trong `href` được giữ nguyên.

### Chỉ dùng cho liên kết sang route khác

Với liên kết tới *cùng* một route, công cụ đúng là `setUrl`: nó gộp các lần ghi và không điều hướng. `useLinkProps` dành cho trường hợp `setUrl` không diễn đạt được: khác đường dẫn, cùng trạng thái.

> [!WARNING]
> Đừng nhét trạng thái vào chính `href` để làm việc này. Khi render trên máy chủ, trạng thái còn chưa biết, nên phần đánh dấu và lần render đầu tiên ở phía client sẽ lệch nhau — lỗi hydration trên mọi URL có tham số. Trình xử lý sự kiện nhấp tồn tại chính là để tránh điều đó.
