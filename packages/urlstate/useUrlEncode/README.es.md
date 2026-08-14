<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · Español · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=es source=README.md source-blob=5da4daf6f900b7408d4efca27beecf84275de38f status=translated -->
<!-- i18n:end -->

# API

Este módulo proporciona un hook de React para codificar y decodificar objetos de estado a y desde parámetros de búsqueda de URL.

## Hook `useUrlEncode`

Un hook de React personalizado que devuelve las funciones `stringify` y `parse` para codificar y decodificar el estado a y desde parámetros de búsqueda de URL.
Es un envoltorio de las funciones `encodeState` y `decodeState`, pero puedes proporcionar la forma del estado una sola vez.

### Parámetros

- `stateShape: object` - Un objeto que representa la forma del estado.

### Devuelve

Un objeto que contiene dos funciones:

- `stringify`: Función para convertir el estado en una cadena de consulta de URL.
- `parse`: Función para convertir una cadena de consulta de URL en un objeto de estado.

### Ejemplo

```typescript
import { useUrlEncode } from 'state-in-url/useUrlEncode';

const form = { name: '' };
const { parse, stringify } = useUrlEncode(form);

// Convertir el estado en una cadena de consulta de URL
const queryString = stringify({ name: 'John' }, 'someExistingParamToKeep=123');
console.log(queryString); // Salida: name='John'&someExistingParamToKeep=123

// Convertir una cadena de consulta de URL en un objeto de estado
const state = parse("name='Tom'");
console.log(state); // Salida: { name: 'Tom' }
```

## `stringify`

Convierte un objeto de estado en una cadena de consulta de URL.

### Parámetros

- `state: T` - El objeto de estado a convertir en cadena.
- `paramsToKeep?: string | URLSearchParams` - Parámetros existentes opcionales a mantener en la cadena de consulta resultante.

### Devuelve

Una cadena que representa la cadena de consulta de URL.

## `parse`

Convierte una cadena de consulta de URL o un objeto URLSearchParams en un objeto de estado.

### Parámetros

- `strOrSearchParams: string | URLSearchParams` - La cadena de consulta de URL o el objeto URLSearchParams a convertir.

### Devuelve

El objeto de estado convertido.

### Ejemplo

```typescript
// Convertir una cadena de consulta de URL en un objeto de estado
const state = parse("name='Tom'");
console.log(state); // Salida: { name: 'Tom' }
```
