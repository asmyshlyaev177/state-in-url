<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · Español · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=es source=README.md source-blob=1f4f64a26bb4e480a8007ed2024bb5b0ae89e257 status=translated -->
<!-- i18n:end -->

# API

Este módulo proporciona un hook de React para llevar el estado de la URL a un enlace que apunta a **otra ruta**.

## Hook `useLinkProps`

Devuelve una función que construye `{ href, onClick }` para desplegarlos sobre un `<a>` o sobre el `<Link>` del framework.

El marcado conserva el `href` tal como lo pasaste, de modo que los rastreadores, la precarga y `hreflang` ven la URL canónica. Un clic izquierdo sin modificadores navega a esa misma ruta con el estado actual codificado en su cadena de consulta. Los clics con modificadores (⌘, Ctrl, Shift, Alt, botón central), los enlaces con `target` y los href externos se dejan en manos del navegador.

El estado se lee al hacer clic en el enlace, no durante el renderizado. Nada se vuelve a renderizar y el componente no necesita su propio `useUrlState`.

### Parámetros

- `shape: T` - Estado por defecto: el mismo objeto de ámbito de módulo que recibe `useUrlState`.
- `navigate: (url: string) => void` - La navegación de tu framework, por ejemplo `useRouter().push` (Next.js) o `useNavigate()` (React Router, Remix).

### Devuelve

`(href: string) => { href: string, onClick: (event) => void }`

### Ejemplo

```tsx
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLinkProps } from 'state-in-url/useLinkProps';

// ámbito de módulo: el mismo objeto que el resto de la app pasa a `useUrlState`
export const form = { name: '', age: 0 };

function LanguagePicker() {
  const linkProps = useLinkProps(form, useRouter().push);

  return <Link {...linkProps('/de/pricing')}>Deutsch</Link>;
}
```

Con `{ name: 'John', age: 0 }` en el estado, al pulsar ese enlace se navega a `/de/pricing?name='John'`.

### Qué parámetros viajan contigo

Los mismos que habría conservado [`setUrl`](../next/useUrlState/README.md#updateurl), en el href que pasaste:

- los valores iguales al valor por defecto quedan fuera, exactamente como los omite `setUrl`;
- los parámetros de la URL actual que no pertenecen a `shape` — `utm_source` y compañía — viajan también, para que un cambio de idioma no pierda la atribución;
- los parámetros escritos en el propio `href` prevalecen sobre ambos;
- el `#hash` del `href` se conserva.

### Úsalo solo para enlaces entre rutas

Para un enlace a la *misma* ruta, la herramienta es `setUrl`: agrupa las escrituras y no navega. `useLinkProps` cubre el caso que `setUrl` no puede expresar: otra ruta, el mismo estado.

> [!WARNING]
> No metas el estado dentro del propio `href` para conseguirlo. Al renderizar en el servidor el estado aún no se conoce, así que el marcado y el primer renderizado en cliente no coinciden: un desajuste de hidratación en toda URL que lleve parámetros. El manejador de clic existe justamente para evitarlo.
