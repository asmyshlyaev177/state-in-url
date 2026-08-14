<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · Português (BR) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=pt-BR source=README.md source-blob=40edfb0d91bbc55f4ad8f487521aaa8b90d1df98 status=translated -->
<!-- i18n:end -->

# API

Este módulo fornece funções para codificar e decodificar objetos de estado de e para strings de consulta de URL.

## `encodeState`

Codifica um objeto de estado em uma string de consulta de URL.

### Parâmetros

- `state: object` - O objeto de estado a ser codificado.
- `defaults?: object` - Valores padrão opcionais para o objeto de estado.
- `paramsToKeep?: string | URLSearchParams` - Parâmetros existentes opcionais a serem mantidos na string de consulta resultante.

### Retorna

Uma string que representa a string de consulta de URL codificada.

### Exemplo

```typescript
import { encodeState } from 'state-in-url/encodeState';

const form = { name: '' };
const encodedState = encodeState({ name: 'test' }, form, 'someExistingParam=123');
console.log(encodedState); // Saída: name=test&someExistingParam=123
```

## `decodeState`

Decodifica uma string URI em um objeto.

### Parâmetros

- `uriString: string | URLSearchParams` - A string URI ou o objeto URLSearchParams a ser decodificado.
- `defaults?: T` - Valores padrão opcionais para o objeto resultante.

### Retorna

O objeto decodificado.

### Exemplo

```typescript
import { decodeState } from 'state-in-url/encodeState';

const form = { name: '', key: '' };
const decodedState = decodeState('key=value&name=Alex', form);
console.log(decodedState); // Saída: { name: 'Alex', key: 'value }
```
