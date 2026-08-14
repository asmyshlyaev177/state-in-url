<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · 한국어 · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=ko source=README.md source-blob=5da4daf6f900b7408d4efca27beecf84275de38f status=translated -->
<!-- i18n:end -->

# API

이 모듈은 상태 객체를 URL 검색 파라미터로 인코딩하고 다시 디코딩하는 React 훅을 제공합니다.

## `useUrlEncode` 훅

상태를 URL 검색 파라미터로 인코딩하고 디코딩하는 `stringify` 및 `parse` 함수를 반환하는 커스텀 React 훅입니다.
`encodeState` 및 `decodeState` 함수의 래퍼이며, 상태 형태를 한 번만 지정하면 됩니다.

### 매개변수

- `stateShape: object` - 상태의 형태를 나타내는 객체입니다.

### 반환값

두 함수를 포함하는 객체입니다:

- `stringify`: 상태를 URL 쿼리 문자열로 변환하는 함수입니다.
- `parse`: URL 쿼리 문자열을 상태 객체로 파싱하는 함수입니다.

### 예제

```typescript
import { useUrlEncode } from 'state-in-url/useUrlEncode';

const form = { name: '' };
const { parse, stringify } = useUrlEncode(form);

// 상태를 URL 쿼리 문자열로 문자열화
const queryString = stringify({ name: 'John' }, 'someExistingParamToKeep=123');
console.log(queryString); // 출력: name='John'&someExistingParamToKeep=123

// URL 쿼리 문자열을 상태 객체로 파싱
const state = parse("name='Tom'");
console.log(state); // 출력: { name: 'Tom' }
```

## `stringify`

상태 객체를 URL 쿼리 문자열로 변환합니다.

### 매개변수

- `state: T` - 문자열화할 상태 객체입니다.
- `paramsToKeep?: string | URLSearchParams` - 결과 쿼리 문자열에 유지할 선택적 기존 매개변수입니다.

### 반환값

URL 쿼리 문자열을 나타내는 문자열입니다.

## `parse`

URL 쿼리 문자열 또는 URLSearchParams 객체를 상태 객체로 파싱합니다.

### 매개변수

- `strOrSearchParams: string | URLSearchParams` - 파싱할 URL 쿼리 문자열 또는 URLSearchParams 객체입니다.

### 반환값

파싱된 상태 객체입니다.

### 예제

```typescript
// URL 쿼리 문자열을 상태 객체로 파싱
const state = parse("name='Tom'");
console.log(state); // 출력: { name: 'Tom' }
```
