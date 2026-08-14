<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · Français · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=fr source=README.md source-blob=1f4f64a26bb4e480a8007ed2024bb5b0ae89e257 status=translated -->
<!-- i18n:end -->

# API

Ce module fournit un hook React qui emporte l'état de l'URL vers un lien pointant sur **une autre route**.

## Hook `useLinkProps`

Renvoie une fonction qui construit `{ href, onClick }`, à répandre sur un `<a>` ou sur le `<Link>` du framework.

Le balisage conserve le `href` que vous avez passé : les robots d'indexation, le préchargement et `hreflang` voient donc l'URL canonique. Un clic gauche sans modificateur navigue vers cette même route, l'état courant encodé dans sa chaîne de requête. Les clics avec modificateur (⌘, Ctrl, Maj, Alt, bouton du milieu), les liens portant un `target` et les href externes sont laissés au navigateur.

L'état est lu au moment du clic, pas pendant le rendu. Rien n'est re-rendu, et le composant n'a pas besoin de son propre `useUrlState`.

### Paramètres

- `shape: T` - État par défaut — le même objet de portée module que reçoit `useUrlState`.
- `navigate: (url: string) => void` - La navigation de votre framework, par exemple `useRouter().push` (Next.js) ou `useNavigate()` (React Router, Remix).

### Valeur de retour

`(href: string) => { href: string, onClick: (event) => void }`

### Exemple

```tsx
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLinkProps } from 'state-in-url/useLinkProps';

// portée module : le même objet que le reste de l'application passe à `useUrlState`
export const form = { name: '', age: 0 };

function LanguagePicker() {
  const linkProps = useLinkProps(form, useRouter().push);

  return <Link {...linkProps('/de/pricing')}>Deutsch</Link>;
}
```

Avec `{ name: 'John', age: 0 }` dans l'état, un clic sur ce lien mène à `/de/pricing?name='John'`.

### Quels paramètres font le voyage

Les mêmes que ceux qu'aurait gardés [`setUrl`](../next/useUrlState/README.md#updateurl), sur le href que vous avez passé :

- les valeurs égales à la valeur par défaut sont omises, exactement comme les omet `setUrl` ;
- les paramètres de l'URL courante qui n'appartiennent pas à `shape` — `utm_source` et consorts — font le voyage, pour qu'un changement de langue ne perde pas l'attribution ;
- les paramètres écrits dans le `href` lui-même l'emportent sur les deux ;
- le `#hash` du `href` est conservé.

### À réserver aux liens d'une route à l'autre

Pour un lien vers la *même* route, l'outil est `setUrl` : il regroupe les écritures et ne navigue pas. `useLinkProps` couvre le cas que `setUrl` ne sait pas exprimer : un autre chemin, le même état.

> [!WARNING]
> N'écrivez pas l'état dans le `href` lui-même pour y parvenir. Au rendu serveur l'état n'est pas encore connu : le balisage et le premier rendu client divergent, et c'est une erreur d'hydratation sur chaque URL portant des paramètres. Le gestionnaire de clic existe précisément pour l'éviter.
