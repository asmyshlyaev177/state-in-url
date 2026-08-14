<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · 한국어 · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=ko source=README.md source-blob=40edfb0d91bbc55f4ad8f487521aaa8b90d1df98 status=translated -->
<!-- i18n:end -->

# API

이 모듈은 상태 객체를 URL 쿼리 문자열로 인코딩하고 다시 디코딩하는 함수를 제공합니다.

## `encodeState`

상태 객체를 URL 쿼리 문자열로 인코딩합니다.

### 매개변수

- `state: object` - 인코딩할 상태 객체입니다.
- `defaults?: object` - 상태 객체의 선택적 기본값입니다.
- `paramsToKeep?: string | URLSearchParams` - 결과 쿼리 문자열에 유지할 선택적 기존 매개변수입니다.

### 반환값

인코딩된 URL 쿼리 문자열을 나타내는 문자열입니다.

### 예제

```typescript
import { encodeState } from 'state-in-url/encodeState';

const form = { name: '' };
const encodedState = encodeState({ name: 'test' }, form, 'someExistingParam=123');
console.log(encodedState); // 출력: name=test&someExistingParam=123
```

## `decodeState`

URI 문자열을 객체로 디코딩합니다.

### 매개변수

- `uriString: string | URLSearchParams` - 디코딩할 URI 문자열 또는 URLSearchParams 객체입니다.
- `defaults?: T` - 결과 객체에 사용할 선택적 기본값입니다.

### 반환값

디코딩된 객체입니다.

### 예제

```typescript
import { decodeState } from 'state-in-url/encodeState';

const form = { name: '', key: '' };
const decodedState = decodeState('key=value&name=Alex', form);
console.log(decodedState); // 출력: { name: 'Alex', key: 'value }
```
