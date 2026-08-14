<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · 한국어 · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=ko source=README.md source-blob=bff98298b23252671a744c36020c2f4288a27fa8 status=translated -->
<!-- i18n:end -->

# API

## `encode`

JSON 직렬화 가능한 값을 문자열로 인코딩합니다.

### 매개변수

- `object` - 인코딩할 상태 객체입니다.

### 반환값

인코딩된 문자열입니다.

### 예제

```typescript
import { encode } from 'state-in-url/encoder';

// 파라미터로
const params = new URLSearchParams();
for (const [key, value] of Object.entries(state)) {
  params.set(key, encode(value));
}
const str = params.toString();
```

## `decode`

이전에 인코딩한 문자열을 객체로 다시 파싱합니다.

### 매개변수

- `payload: string` - 디코딩할 문자열입니다.
- `defaults?: object` - 형태 객체로, 이 값들이 기본값으로 사용됩니다.

### 반환값

디코딩된 객체입니다.

### 예제

```typescript
import { decode } from 'state-in-url/encoder';

// 파라미터에서
const obj = Object.fromEntries(
  [...params.entries()].map(([key, value]) => [
    key,
    // decode(value, optionalFallback),
    decode(value),
  ]),
)

```
