<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · Русский · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=ru source=README.md source-blob=5da4daf6f900b7408d4efca27beecf84275de38f status=translated -->
<!-- i18n:end -->

# API

Этот модуль предоставляет React hook для кодирования и декодирования объектов состояния в параметры поиска URL и обратно.

## Hook `useUrlEncode`

Пользовательский React hook, который возвращает функции `stringify` и `parse` для кодирования и декодирования состояния в параметры поиска URL и обратно.
Это обёртка над функциями `encodeState` и `decodeState`, но форму состояния можно задать один раз.

### Параметры

- `stateShape: object` - Объект, представляющий форму состояния.

### Возвращает

Объект, содержащий две функции:

- `stringify`: Функция для преобразования состояния в строку запроса URL.
- `parse`: Функция для разбора строки запроса URL в объект состояния.

### Пример

```typescript
import { useUrlEncode } from 'state-in-url/useUrlEncode';

const form = { name: '' };
const { parse, stringify } = useUrlEncode(form);

// Преобразовать состояние в строку запроса URL
const queryString = stringify({ name: 'John' }, 'someExistingParamToKeep=123');
console.log(queryString); // Вывод: name='John'&someExistingParamToKeep=123

// Разобрать строку запроса URL в объект состояния
const state = parse("name='Tom'");
console.log(state); // Вывод: { name: 'Tom' }
```

## `stringify`

Преобразует объект состояния в строку запроса URL.

### Параметры

- `state: T` - Объект состояния для преобразования в строку.
- `paramsToKeep?: string | URLSearchParams` - Необязательные существующие параметры, которые нужно сохранить в итоговой строке запроса.

### Возвращает

Строку, представляющую строку запроса URL.

## `parse`

Разбирает строку запроса URL или объект URLSearchParams в объект состояния.

### Параметры

- `strOrSearchParams: string | URLSearchParams` - Строка запроса URL или объект URLSearchParams для разбора.

### Возвращает

Разобранный объект состояния.

### Пример

```typescript
// Разобрать строку запроса URL в объект состояния
const state = parse("name='Tom'");
console.log(state); // Вывод: { name: 'Tom' }
```
