<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · Español · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=es source=README.md source-blob=40edfb0d91bbc55f4ad8f487521aaa8b90d1df98 status=translated -->
<!-- i18n:end -->

# API

Este módulo proporciona funciones para codificar y decodificar objetos de estado a y desde cadenas de consulta de URL.

## `encodeState`

Codifica un objeto de estado en una cadena de consulta de URL.

### Parámetros

- `state: object` - El objeto de estado a codificar.
- `defaults?: object` - Valores por defecto opcionales para el objeto de estado.
- `paramsToKeep?: string | URLSearchParams` - Parámetros existentes opcionales a mantener en la cadena de consulta resultante.

### Devuelve

Una cadena que representa la cadena de consulta de URL codificada.

### Ejemplo

```typescript
import { encodeState } from 'state-in-url/encodeState';

const form = { name: '' };
const encodedState = encodeState({ name: 'test' }, form, 'someExistingParam=123');
console.log(encodedState); // Salida: name=test&someExistingParam=123
```

## `decodeState`

Decodifica una cadena URI en un objeto.

### Parámetros

- `uriString: string | URLSearchParams` - La cadena URI o el objeto URLSearchParams a decodificar.
- `defaults?: T` - Valores por defecto opcionales para el objeto resultante.

### Devuelve

El objeto decodificado.

### Ejemplo

```typescript
import { decodeState } from 'state-in-url/encodeState';

const form = { name: '', key: '' };
const decodedState = decodeState('key=value&name=Alex', form);
console.log(decodedState); // Salida: { name: 'Alex', key: 'value }
```
