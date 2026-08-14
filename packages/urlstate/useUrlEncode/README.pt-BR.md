<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · Português (BR) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=pt-BR source=README.md source-blob=5da4daf6f900b7408d4efca27beecf84275de38f status=translated -->
<!-- i18n:end -->

# API

Este módulo fornece um hook React para codificar e decodificar objetos de estado de e para parâmetros de busca de URL.

## Hook `useUrlEncode`

Um hook React personalizado que retorna as funções `stringify` e `parse` para codificar e decodificar o estado de e para parâmetros de busca de URL.
É um wrapper das funções `encodeState` e `decodeState`, mas você pode fornecer a forma do estado uma única vez.

### Parâmetros

- `stateShape: object` - Um objeto que representa a forma do estado.

### Retorna

Um objeto contendo duas funções:

- `stringify`: Função para converter o estado em uma string de consulta de URL.
- `parse`: Função para converter uma string de consulta de URL em um objeto de estado.

### Exemplo

```typescript
import { useUrlEncode } from 'state-in-url/useUrlEncode';

const form = { name: '' };
const { parse, stringify } = useUrlEncode(form);

// Converter o estado em uma string de consulta de URL
const queryString = stringify({ name: 'John' }, 'someExistingParamToKeep=123');
console.log(queryString); // Saída: name='John'&someExistingParamToKeep=123

// Converter uma string de consulta de URL em um objeto de estado
const state = parse("name='Tom'");
console.log(state); // Saída: { name: 'Tom' }
```

## `stringify`

Converte um objeto de estado em uma string de consulta de URL.

### Parâmetros

- `state: T` - O objeto de estado a ser convertido em string.
- `paramsToKeep?: string | URLSearchParams` - Parâmetros existentes opcionais a serem mantidos na string de consulta resultante.

### Retorna

Uma string que representa a string de consulta de URL.

## `parse`

Converte uma string de consulta de URL ou um objeto URLSearchParams em um objeto de estado.

### Parâmetros

- `strOrSearchParams: string | URLSearchParams` - A string de consulta de URL ou o objeto URLSearchParams a ser convertido.

### Retorna

O objeto de estado convertido.

### Exemplo

```typescript
// Converter uma string de consulta de URL em um objeto de estado
const state = parse("name='Tom'");
console.log(state); // Saída: { name: 'Tom' }
```
