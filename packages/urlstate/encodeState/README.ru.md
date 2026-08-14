<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · Русский · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=ru source=README.md source-blob=40edfb0d91bbc55f4ad8f487521aaa8b90d1df98 status=translated -->
<!-- i18n:end -->

# API

Этот модуль предоставляет функции для кодирования и декодирования объектов состояния в строки запроса URL и обратно.

## `encodeState`

Кодирует объект состояния в строку запроса URL.

### Параметры

- `state: object` - Объект состояния для кодирования.
- `defaults?: object` - Необязательные значения по умолчанию для объекта состояния.
- `paramsToKeep?: string | URLSearchParams` - Необязательные существующие параметры, которые нужно сохранить в итоговой строке запроса.

### Возвращает

Строку, представляющую закодированную строку запроса URL.

### Пример

```typescript
import { encodeState } from 'state-in-url/encodeState';

const form = { name: '' };
const encodedState = encodeState({ name: 'test' }, form, 'someExistingParam=123');
console.log(encodedState); // Вывод: name=test&someExistingParam=123
```

## `decodeState`

Декодирует строку URI в объект.

### Параметры

- `uriString: string | URLSearchParams` - Строка URI или объект URLSearchParams для декодирования.
- `defaults?: T` - Необязательные значения по умолчанию для итогового объекта.

### Возвращает

Декодированный объект.

### Пример

```typescript
import { decodeState } from 'state-in-url/encodeState';

const form = { name: '', key: '' };
const decodedState = decodeState('key=value&name=Alex', form);
console.log(decodedState); // Вывод: { name: 'Alex', key: 'value }
```
