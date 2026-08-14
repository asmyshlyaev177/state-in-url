<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · Português (BR) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=pt-BR source=README.md source-blob=1f4f64a26bb4e480a8007ed2024bb5b0ae89e257 status=translated -->
<!-- i18n:end -->

# API

Este módulo fornece um hook React para levar o estado da URL até um link que aponta para **outra rota**.

## Hook `useLinkProps`

Retorna uma função que monta `{ href, onClick }` para espalhar sobre um `<a>` ou sobre o `<Link>` do framework.

A marcação mantém o `href` que você passou, então rastreadores, pré-carregamento e `hreflang` enxergam a URL canônica. Um clique esquerdo sem modificadores navega para essa mesma rota com o estado atual codificado na query string. Cliques com modificadores (⌘, Ctrl, Shift, Alt, botão do meio), links com `target` e hrefs externos ficam por conta do navegador.

O estado é lido no momento do clique, não durante a renderização. Nada é renderizado de novo, e o componente não precisa do próprio `useUrlState`.

### Parâmetros

- `shape: T` - Estado padrão — o mesmo objeto em escopo de módulo que `useUrlState` recebe.
- `navigate: (url: string) => void` - A navegação do seu framework, por exemplo `useRouter().push` (Next.js) ou `useNavigate()` (React Router, Remix).

### Retorno

`(href: string) => { href: string, onClick: (event) => void }`

### Exemplo

```tsx
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLinkProps } from 'state-in-url/useLinkProps';

// escopo de módulo: o mesmo objeto que o resto do app passa para `useUrlState`
export const form = { name: '', age: 0 };

function LanguagePicker() {
  const linkProps = useLinkProps(form, useRouter().push);

  return <Link {...linkProps('/de/pricing')}>Deutsch</Link>;
}
```

Com `{ name: 'John', age: 0 }` no estado, clicar nesse link leva a `/de/pricing?name='John'`.

### Quais parâmetros vão junto

Os mesmos que [`setUrl`](../next/useUrlState/README.md#updateurl) teria mantido, no href que você passou:

- valores iguais ao padrão ficam de fora, exatamente como `setUrl` os omite;
- parâmetros da URL atual que não pertencem ao `shape` — `utm_source` e afins — vão junto, para que uma troca de idioma não perca a atribuição;
- parâmetros escritos no próprio `href` prevalecem sobre os dois casos acima;
- o `#hash` do `href` é preservado.

### Use apenas em links entre rotas

Para um link para a *mesma* rota, a ferramenta é `setUrl`: ele agrupa as escritas e não navega. `useLinkProps` atende ao caso que `setUrl` não consegue expressar: outro caminho, o mesmo estado.

> [!WARNING]
> Não coloque o estado dentro do próprio `href` para conseguir isso. Na renderização do servidor o estado ainda não é conhecido, então a marcação e a primeira renderização no cliente divergem — um erro de hidratação em toda URL que carregue parâmetros. O manipulador de clique existe justamente para evitar isso.
