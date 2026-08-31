<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · Français · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=fr source=README.md source-blob=065a903cd2cf7bc001b9e40ed8e0ad01c79f17d9 status=translated -->
<!-- i18n:end -->

<div align="center">
  <img src="/packages/example-nextjs14/public/Logo_symbol.png" alt="logo de state-in-url" width="120px" />

  # State in url
</div>

<div align="center">
</div>

<div align="center">

[![Available for hire](https://img.shields.io/badge/available%20for%20hire-senior%20react%20engineer-2ea44f?style=flat-square)](https://asmyshlyaev177.dev)

[![npm](https://img.shields.io/npm/v/state-in-url.svg)](https://www.npmjs.com/package/state-in-url)
![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/state-in-url.svg)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/73be54068b7f41b0b74a252579ac09ec)](https://app.codacy.com/gh/asmyshlyaev177/state-in-url/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)

![Tests](https://github.com/asmyshlyaev177/state-in-url/actions/workflows/tests.yml/badge.svg?branch=master)
[![Codacy Badge](https://app.codacy.com/project/badge/Coverage/73be54068b7f41b0b74a252579ac09ec)](https://app.codacy.com/gh/asmyshlyaev177/state-in-url/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_coverage)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](https://github.com/asmyshlyaev177/state-in-url/)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)]([https://github.com/semantic-release/semantic-release](https://github.com/asmyshlyaev177/state-in-url))

[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/asmyshlyaev177/state-in-url/badge)](https://scorecard.dev/viewer/?uri=github.com/asmyshlyaev177/state-in-url)
[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9679/badge)](https://www.bestpractices.dev/projects/9679)
[![license](https://img.shields.io/github/license/asmyshlyaev177/state-in-url.svg?style=flat-square)](https://github.com/asmyshlyaev177/state-in-url/blob/master/LICENSE)
<!-- or by embedding this in your HTML:
<a href="https://www.bestpractices.dev/projects/9679"><img src="https://www.bestpractices.dev/projects/9679/badge"></a>  -->

</div>

<div align="center">

<h4 align="center">N'hésitez pas à ouvrir une issue si vous avez trouvé un bug, ou pour demander des fonctionnalités</h4>

![Demo-gif](https://github.com/asmyshlyaev177/state-in-url/blob/master/assets/Demo-gif.gif)

# Démo

<a href="https://state-in-url.dev" target="_blank">Démo</a> |
<a href="https://state-in-url.netlify.app/" target="_blank">Lien miroir</a>

<a href="https://github.com/asmyshlyaev177/state-in-url/blob/master/Limits.md"  target="_blank">Limitation de la taille de l'URI, <b>jusqu'à 12KB</b> est sûr</a>

<hr />

Ajoutez une <a href="#"><img src="https://raw.githubusercontent.com/acervenky/animated-github-badges/master/assets/starbadge.gif" width="25" height="25"></a>  et <a href="https://github.com/asmyshlyaev177" target="_blank">suivez-moi</a> pour soutenir le projet !

J'apprécierai vos retours/avis dans les [discussions](https://github.com/asmyshlyaev177/state-in-url/discussions/1)

Partagez si cela vous est utile.
[X.com](https://twitter.com/intent/tweet?&url=https://github.com/asmyshlyaev177/state-in-url)
[LinkedIn](https://www.linkedin.com/sharing/share-offsite/?url=https://github.com/asmyshlyaev177/state-in-url)
[FB](https://www.facebook.com/sharer.php?u=https://github.com/asmyshlyaev177/state-in-url)
[VK](http://vk.com/share.php?url=https://github.com/asmyshlyaev177/state-in-url)

  <hr />

  </div>

[Montrez-moi juste le code !](#useurlstate)

## Pourquoi utiliser `state-in-url` ?

Stockez n'importe quel état utilisateur dans les paramètres de requête ; imaginez du JSON dans une URL de navigateur. Tout cela en conservant les types et la structure des données : par exemple, les nombres seront décodés comme des nombres et non comme des chaînes, les dates comme des dates, etc., les objets et les tableaux sont pris en charge.
Extrêmement simple, rapide et avec une validation TypeScript statique. Les liens profonds, autrement dit la synchronisation d'URL, deviennent faciles.

Contient le hook `useUrlState` pour Next.js et react-router, ainsi que des helpers pour tout le reste en JS.
Comme les navigateurs modernes prennent en charge d'énormes URL et que les utilisateurs ne se soucient pas des chaînes de requête (c'est un flux de travail « tout sélectionner et copier/coller »).

Il est temps d'utiliser la chaîne de requête pour la gestion d'état, comme cela était prévu à l'origine.
Cette bibliothèque fait tout le travail ingrat à votre place.

Cette bibliothèque est une bonne alternative à NUQS.

### Cas d'utilisation

- Stocker des formulaires utilisateur non enregistrés ou des filtres de page dans l'URL
- Synchroniser l'URL avec l'état de React
- Synchroniser simplement des données entre des composants client sans rapport, sans toucher à l'URI
- Des URL partageables avec l'état de l'application (liens profonds, synchronisation de l'état dans l'URL)
- Persistance simple de l'état entre les rechargements de page

### Fonctionnalités

- 🧩 **Simple** : Pas de providers, reducers, code répétitif ni nouveaux concepts, une API similaire à `React.useState`
- 📘 **Validation/autocomplétion TypeScript** : L'état n'est qu'un objet, validation statique automatique dans l'IDE/les tests selon la définition TypeScript
- ✨ **Données complexes** : Objets imbriqués, dates et tableaux, fonctionne comme JSON, mais dans l'URL
- ☂ **Valeurs par défaut** : Vous donne des valeurs par défaut si le paramètre n'est pas dans l'url
- ⌨ **Organisé** : Toutes les valeurs possibles définies au départ, vous protège contre l'obtention d'une clé inexistante
- **compatible** : Conservera les paramètres de requête tiers tels quels
- **flexible** : Peut utiliser plus d'un objet d'état sur la même page, utilisez simplement des clés différentes
- **Rapide** : Re-rendus minimaux, environ [1ms](https://github.com/asmyshlyaev177/state-in-url/blob/87c8c7c995c5cd7d9e7aa039c30bfe64b24abe4b/packages/urlstate/encoder/encoder.test.ts#L185) pour encoder et décoder un gros objet
- **Rendu côté serveur** : Utilisable dans les composants serveur, Next.js 14, 15 et 16 sont pris en charge
- **Léger** : Zéro dépendance, bibliothèque de moins de 2KB
- **DX** : Bonne expérience de développement, documentation, commentaires JSDoc et exemples
- **Flexibilité de frameworks** : Hooks pour `Next.js` et `react-router`, helpers pour l'utiliser avec d'autres frameworks ou du JS pur
- **Bien testée** : [Tests unitaires et tests Playwright pour Chrome/Firefox/Safari](https://github.com/asmyshlyaev177/state-in-url/actions/workflows/tests.yml)
- **Licence permissive** : MIT

### Comparaison avec nuqs

Vous cherchez une alternative à [nuqs](https://github.com/47ng/nuqs) ? Les deux gardent un état typé dans la query string ; elles diffèrent par la configuration requise et par ce qu’une valeur peut être.

| Quoi | `state-in-url` | `nuqs` |
| --- | --- | --- |
| Mise en place | Aucune — importez le hook et c’est parti | Un composant adaptateur enveloppe l’application |
| Forme de l’état | Un objet typé, comme `React.useState` | Valeurs par clé, un parseur déclaré pour chacune |
| Réutilisation entre composants | Enveloppez le hook une fois — chaque composant partage l’état, sans props | Vous extrayez votre propre hook autour de la table de parseurs |
| Objets et tableaux imbriqués | Intégré — structure et types préservés | Parseur JSON plus votre propre validateur |
| Dates | Préservées automatiquement | Parseur intégré, déclaré par clé |
| Taille, import complet | ~2,9 Ko gzip | ~6,7 Ko gzip |
| Dépendances au runtime | Aucune | Une |
| Routeurs | Next.js, React Router v6/v7, Remix, helpers pour JS pur | Next.js, React Router, Remix, TanStack Router, React pur |

Tailles : import de la bibliothèque entière, esbuild minify + gzip, mesuré en août 2026 face à nuqs 2.10.1.

nuqs est une bonne bibliothèque — choisissez-la pour un query param lisible par valeur, ou si vous êtes sur TanStack Router. Choisissez state-in-url pour un objet typé complet dans l’URL, sans configuration.


La comparaison complète — la même fonctionnalité dans les deux, d’autres alternatives (TanStack Router, use-query-params) et des notes de migration — se trouve sur <https://state-in-url.dev/vs/nuqs>.

## Table des matières

<!-- toc:start -->

- [State in url](#state-in-url)
- [Démo](#démo)
  - [Pourquoi utiliser `state-in-url` ?](#pourquoi-utiliser-state-in-url-)
    - [Cas d'utilisation](#cas-dutilisation)
    - [Fonctionnalités](#fonctionnalités)
    - [Comparaison avec nuqs](#comparaison-avec-nuqs)
  - [Table des matières](#table-des-matières)
  - [Installation](#installation)
    - [1. Installer le paquet](#1-installer-le-paquet)
    - [2. Modifier tsconfig.json](#2-modifier-tsconfigjson)
  - [Utilisation avec des agents de codage IA](#utilisation-avec-des-agents-de-codage-ia)
  - [useUrlState](#useurlstate)
    - [Hook useUrlState pour Next.js](#hook-useurlstate-pour-nextjs)
      - [Exemples d'utilisation](#exemples-dutilisation)
        - [Basique](#basique)
        - [Avec le rendu côté serveur](#avec-le-rendu-côté-serveur)
        - [Utiliser le hook dans le composant `layout`](#utiliser-le-hook-dans-le-composant-layout)
        - [Avec une forme d'état arbitraire (non recommandé)](#avec-une-forme-détat-arbitraire-non-recommandé)
    - [Hook useUrlState pour Remix.js](#hook-useurlstate-pour-remixjs)
      - [Exemple](#exemple)
    - [Hook useUrlState pour React-Router](#hook-useurlstate-pour-react-router)
      - [Exemple](#exemple-1)
  - [Recettes](#recettes)
        - [Hook personnalisé pour travailler confortablement avec une tranche d'état](#hook-personnalisé-pour-travailler-confortablement-avec-une-tranche-détat)
        - [Avec une forme d'état complexe](#avec-une-forme-détat-complexe)
        - [Mettre à jour l'état seul et le synchroniser manuellement avec l'URL](#mettre-à-jour-létat-seul-et-le-synchroniser-manuellement-avec-lurl)
  - [Autres hooks et helpers](#autres-hooks-et-helpers)
    - [Hook `useUrlStateBase` pour d'autres routeurs](#hook-useurlstatebase-pour-dautres-routeurs)
    - [Hook `useSharedState` pour React.js](#hook-usesharedstate-pour-reactjs)
    - [Hook `useLinkProps` pour React.js](#hook-uselinkprops-pour-reactjs)
    - [Hook `useUrlEncode` pour React.js](#hook-useurlencode-pour-reactjs)
    - [Helpers `encodeState` et `decodeState`](#helpers-encodestate-et-decodestate)
    - [Helpers `encode` et `decode`](#helpers-encode-et-decode)
  - [Bonnes pratiques](#bonnes-pratiques)
  - [Pièges](#pièges)
  - [Autres](#autres)
    - [Contribuer et/ou exécuter localement](#contribuer-etou-exécuter-localement)
  - [Feuille de route](#feuille-de-route)
  - [Contact et support](#contact-et-support)
  - [Journal des modifications](#journal-des-modifications)
  - [Mentions](#mentions)
  - [Licence](#licence)
  - [Recrutez-moi](#recrutez-moi)
  - [Inspiration](#inspiration)

<!-- toc:end -->

## Installation

### 1. Installer le paquet

```sh
# npm
npm install --save state-in-url
# yarn
yarn add state-in-url
# pnpm
pnpm add state-in-url
```

### 2. Modifier tsconfig.json

Dans `tsconfig.json`, dans `compilerOptions`, définissez `"moduleResolution": "Bundler"`, ou `"moduleResolution": "Node16"`, ou `"moduleResolution": "NodeNext"`.
Il peut être nécessaire de définir `"module": "ES2022"`, ou `"module": "ESNext"`

## Utilisation avec des agents de codage IA

`state-in-url` fournit des fichiers de compétences (skills) pour [@tanstack/intent](https://tanstack.com/intent/latest/docs/overview), afin que les agents IA (Claude Code, Cursor, Copilot, Codex, etc.) chargent les bons modèles et évitent les erreurs courantes lors de l'utilisation de la bibliothèque. Après avoir installé `state-in-url`, exécutez une fois dans votre projet :

```sh
npx @tanstack/intent@latest install
```

Cela configure votre agent installé pour découvrir les compétences depuis `node_modules/state-in-url/skills/`. Listez les compétences disponibles avec `npx @tanstack/intent@latest list`.

## useUrlState

Hook principal qui prend l'état initial comme paramètre et renvoie l'objet d'état, un callback pour mettre à jour l'url et un callback pour ne mettre à jour que l'état.
Tous les composants qui utilisent le même objet `state` sont automatiquement synchronisés.

### Hook useUrlState pour Next.js

[Documentation complète de l'API](packages/urlstate/next/useUrlState)

[Exemple React-Router](#hook-useurlstate-pour-react-router)

#### Exemples d'utilisation

##### Basique

1. Définissez la forme de l'état avec des valeurs par défaut

 ```typescript
 // userState.ts
 // Seuls les paramètres dont la valeur diffère de la valeur par défaut iront dans l'url.
 export const userState: UserState = { name: '', age: 0 }

 // Utilisez `Type`, pas `Interface` !
 type UserState = { name: string, age: number }
 ```

2. Importez-le et utilisez-le

```typescript
'use client'
import { useUrlState } from 'state-in-url/next';

import { userState } from './userState';

function MyComponent() {
  // peut passer l'argument `replace`, il contrôle si `setUrl` utilisera `router.push` ou `router.replace`, par défaut replace=true
  // peut passer `searchParams` depuis des composants serveur, passez `useHistory: false` si vous devez récupérer quelque chose dans le composant serveur
  const { urlState, setUrl, setState } = useUrlState(userState);

  return (
    <div>
      // urlState.name renverra la valeur par défaut de `userState` si l'url est vide
      <input value={urlState.name}
        // même api que React.useState, par exemple setUrl(currVal => currVal + 1)
        onChange={(ev) => setUrl({ name: ev.target.value }) }
      />
      <input value={urlState.age}
        onChange={(ev) => setUrl({ age: +ev.target.value }) }
      />

      <input value={urlState.name}
        onChange={(ev) => { setState(curr => ({ ...curr, name: ev.target.value })) }}
        // Peut mettre à jour l'état immédiatement mais synchroniser le changement avec l'url selon les besoins
        onBlur={() => setUrl()}
      />

      <button onClick={() => setUrl((_, initial) => initial)}>
        Reset
      </button>

    </div>
  )
}
```

##### Avec le rendu côté serveur

<details>
  <Summary>Exemple</Summary>

```typescript
export default async function Home({ searchParams }: { searchParams: object }) {
  return (
    <Form searchParams={searchParams} />
  )
}

// Form.tsx
'use client'
import React from 'react';
import { useUrlState } from 'state-in-url/next';
import { form } from './form';

const Form = ({ searchParams }: { searchParams: object }) => {
  const { urlState, setState, setUrl } = useUrlState(form, { searchParams });
}
```

</details>

##### Utiliser le hook dans le composant `layout`

<details>
  <Summary>Exemple</Summary>
  C'est une partie délicate, car nextjs avec app router ne permet pas d'accéder à searchParams côté serveur. Il existe une solution de contournement avec un middleware, mais elle n'est pas élégante et peut cesser de fonctionner après une mise à jour de nextjs.

```typescript
// ajoutez au `layout.tsx` approprié
export const runtime = 'edge';

// middleware.ts
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.url?.includes('_next') ? null : request.url;
  const sp = url?.split?.('?')?.[1] || '';

  const response = NextResponse.next();

  if (url !== null) {
    response.headers.set('searchParams', sp);
  }

  return response;
}

// Composant layout cible
import { headers } from 'next/headers';
import { decodeState } from 'state-in-url/encodeState';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sp = headers().get('searchParams') || '';

  return (
    <div>
      <Comp1 searchParams={decodeState(sp, stateShape)} />
      {children}
    </div>
  );
}


```

</details>

##### Avec une forme d'état arbitraire (non recommandé)

<details>
  <Summary>Exemple</Summary>

```typescript
'use client'
import { useUrlState } from 'state-in-url/next';

const someObj = {};

function SettingsComponent() {
  const { urlState, setUrl, setState } = useUrlState<object>(someObj);
}
```

</details>

### Hook useUrlState pour Remix.js

L'API est la même que pour la version Next.js, sauf que vous pouvez passer des options du type [NavigateOptions](https://github.com/remix-run/react-router/blob/bc693ed9f39170bda13b9e1b282fb8e9d5925f66/packages/react-router/lib/context.ts#L99).

[Documentation de l'API](packages/urlstate/remix/useUrlState)

#### Exemple

```typescript
export const form: Form = {
  name: '',
  age: undefined,
  agree_to_terms: false,
  tags: [],
};

type Form = {
  name: string;
  age?: number;
  agree_to_terms: boolean;
  tags: { id: string; value: { text: string; time: Date } }[];
};

```

```typescript
import { useUrlState } from 'state-in-url/remix';

import { form } from './form';

function TagsComponent() {
  const { urlState, setUrl, setState } = useUrlState(form);

  const onChangeTags = React.useCallback(
    (tag: (typeof tags)[number]) => {
      setUrl((curr) => ({
        ...curr,
        tags: curr.tags.find((t) => t.id === tag.id)
          ? curr.tags.filter((t) => t.id !== tag.id)
          : curr.tags.concat(tag),
      }));
    },
    [setUrl],
  );

  return (
    <div>
      <Field text="Tags">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag
              active={!!urlState.tags.find((t) => t.id === tag.id)}
              text={tag.value.text}
              onClick={() => onChangeTags(tag)}
              key={tag.id}
            />
          ))}
        </div>
      </Field>

      <input value={urlState.name}
        onChange={(ev) => { setState(curr => ({ ...curr, name: ev.target.value })) }}
        // Peut mettre à jour l'état immédiatement mais synchroniser le changement avec l'url selon les besoins
        onBlur={() => setUrl()}
      />
    </div>
  );
}

const tags = [
  {
    id: '1',
    value: { text: 'React.js', time: new Date('2024-07-17T04:53:17.000Z') },
  },
  {
    id: '2',
    value: { text: 'Next.js', time: new Date('2024-07-18T04:53:17.000Z') },
  },
  {
    id: '3',
    value: { text: 'TailwindCSS', time: new Date('2024-07-19T04:53:17.000Z') },
  },
];
```

[Exemple de code](packages/example-remix2/app/routes/Form-for-test.tsx)

### Hook useUrlState pour React-Router

L'API est la même que pour la version Next.js, sauf que vous pouvez passer des options du type [NavigateOptions](https://github.com/remix-run/react-router/blob/bc693ed9f39170bda13b9e1b282fb8e9d5925f66/packages/react-router/lib/context.ts#L99).

[Documentation de l'API](packages/urlstate/react-router/useUrlState)

#### Exemple

```typescript
export const form: Form = {
  name: '',
  age: undefined,
  agree_to_terms: false,
  tags: [],
};

type Form = {
  name: string;
  age?: number;
  agree_to_terms: boolean;
  tags: { id: string; value: { text: string; time: Date } }[];
};

```

```typescript
import { useUrlState } from 'state-in-url/react-router';
// pour react-router v6
// import { useUrlState } from 'state-in-url/react-router6';

import { form } from './form';

function TagsComponent() {
  const { urlState, setUrl, setState } = useUrlState(form);

  const onChangeTags = React.useCallback(
    (tag: (typeof tags)[number]) => {
      setUrl((curr) => ({
        ...curr,
        tags: curr.tags.find((t) => t.id === tag.id)
          ? curr.tags.filter((t) => t.id !== tag.id)
          : curr.tags.concat(tag),
      }));
    },
    [setUrl],
  );

  return (
    <div>
      <Field text="Tags">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag
              active={!!urlState.tags.find((t) => t.id === tag.id)}
              text={tag.value.text}
              onClick={() => onChangeTags(tag)}
              key={tag.id}
            />
          ))}
        </div>
      </Field>

      <input value={urlState.name}
        onChange={(ev) => { setState(curr => ({ ...curr, name: ev.target.value })) }}
        // Peut mettre à jour l'état immédiatement mais synchroniser le changement avec l'url selon les besoins
        onBlur={() => setUrl()}
      />
    </div>
  );
}

const tags = [
  {
    id: '1',
    value: { text: 'React.js', time: new Date('2024-07-17T04:53:17.000Z') },
  },
  {
    id: '2',
    value: { text: 'Next.js', time: new Date('2024-07-18T04:53:17.000Z') },
  },
  {
    id: '3',
    value: { text: 'TailwindCSS', time: new Date('2024-07-19T04:53:17.000Z') },
  },
];
```

[Exemple de code](packages/example-react-router6/src/Form-for-test.tsx)

## Recettes
##### Hook personnalisé pour travailler confortablement avec une tranche d'état
<details>
  <Summary>Exemple</Summary>

  ```typescript
'use client';

import React from 'react';
import { useUrlState } from 'state-in-url/next';

const form: Form = {
    name: '',
    age: undefined,
    agree_to_terms: false,
    tags: [],
};

type Form = {
    name: string;
    age?: number;
    agree_to_terms: boolean;
    tags: {id: string; value: {text: string; time: Date } }[];
};

export const useFormState = ({ searchParams }: { searchParams?: object }) => {
    const { urlState, setUrl: setUrlBase, reset } = useUrlState(form, {
      searchParams,
    });

    // la première navigation ajoutera une nouvelle entrée à l'historique
    // toutes les suivantes ne feront que remplacer cette entrée
    // ainsi l'historique n'aura que 2 entrées - ['/url', '/url?key=param']

    const replace = React.useRef(false);
    const setUrl = React.useCallback((
        state: Parameters<typeof setUrlBase>[0],
        opts?: Parameters<typeof setUrlBase>[1]
      ) => {
        setUrlBase(state, { replace: replace.current, ...opts });
        replace.current = true;
    }, [setUrlBase]);

    return { urlState, setUrl, resetUrl: reset };
};
  ```
</details>

<hr />

##### Avec une forme d'état complexe

<details>
  <Summary>Exemple</Summary>

```typescript
export const form: Form = {
  name: '',
  age: undefined,
  agree_to_terms: false,
  tags: [],
};

type Form = {
  name: string;
  age?: number;
  agree_to_terms: boolean;
  tags: { id: string; value: { text: string; time: Date } }[];
};
```

```typescript
'use client'
import { useUrlState } from 'state-in-url/next';

import { form } from './form';

function TagsComponent() {
  // `urlState` sera inféré du type Form !
  const { urlState, setUrl } = useUrlState(form);

  const onChangeTags = React.useCallback(
    (tag: (typeof tags)[number]) => {
      setUrl((curr) => ({
        ...curr,
        tags: curr.tags.find((t) => t.id === tag.id)
          ? curr.tags.filter((t) => t.id !== tag.id)
          : curr.tags.concat(tag),
      }));
    },
    [setUrl],
  );

  return (
    <div>
      <Field text="Tags">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag
              active={!!urlState.tags.find((t) => t.id === tag.id)}
              text={tag.value.text}
              onClick={() => onChangeTags(tag)}
              key={tag.id}
            />
          ))}
        </div>
      </Field>
    </div>
  );
}

const tags = [
  {
    id: '1',
    value: { text: 'React.js', time: new Date('2024-07-17T04:53:17.000Z') },
  },
  {
    id: '2',
    value: { text: 'Next.js', time: new Date('2024-07-18T04:53:17.000Z') },
  },
  {
    id: '3',
    value: { text: 'TailwindCSS', time: new Date('2024-07-19T04:53:17.000Z') },
  },
];
```

[Exemple de code de la page de démonstration](https://github.com/asmyshlyaev177/state-in-url/blob/master/packages/example-nextjs15/src/app/Form.tsx)
</details>

##### Mettre à jour l'état seul et le synchroniser manuellement avec l'URL

<details>
  <Summary>Exemple</Summary>

  ```typescript

  const timer = React.useRef(0 as unknown as NodeJS.Timeout);
  React.useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      // comparera l'état par le contenu et non par la référence, et ne déclenchera la mise à jour que pour les nouvelles valeurs
      setUrl(urlState);
    }, 500);

    return () => {
      clearTimeout(timer.current);
    };
  }, [urlState, setUrl]);
```

Synchroniser l'état sur `onBlur` sera plus conforme à l'usage réel.

```typescript
<input onBlur={() => updateUrl()} .../>
```

</details>

## Autres hooks et helpers

### Hook `useUrlStateBase` pour d'autres routeurs

Hooks pour créer vos propres hooks `useUrlState` avec d'autres routeurs, par exemple react-router ou tanstack router.

[Documentation de l'API](packages/urlstate/useUrlStateBase)

### Hook `useSharedState` pour React.js

Hook pour partager l'état entre n'importe quels composants React, testé avec Next.js et Vite.

```typescript
'use client'
import { useSharedState } from 'state-in-url';

export const someState = { name: '' };

function SettingsComponent() {
  const { state, setState } = useSharedState(someState);
}
```

[Documentation de l'API](packages/urlstate/useSharedState/README.fr.md)

### Hook `useLinkProps` pour React.js

Hook qui emporte l'état vers un lien pointant sur une autre route, par exemple un sélecteur de langue. `setUrl` écrit toujours sur le chemin courant ; celui-ci non.

```tsx
'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLinkProps } from 'state-in-url/useLinkProps';

export const form = { name: '' };

function LanguagePicker() {
  const linkProps = useLinkProps(form, useRouter().push);

  return <Link {...linkProps('/de/pricing')}>Deutsch</Link>;
}
```

Le balisage conserve le `href` tel quel : les robots d'indexation et `hreflang` voient donc l'URL canonique ; l'état est lu au clic.

[Documentation de l'API](packages/urlstate/useLinkProps/README.fr.md)

### Hook `useUrlEncode` pour React.js

[Documentation de l'API](packages/urlstate/useUrlEncode/README.fr.md)

### Helpers `encodeState` et `decodeState`

[Documentation de l'API](packages/urlstate/encodeState/README.fr.md)

### Helpers `encode` et `decode`

[Documentation de l'API](packages/urlstate/encoder/README.fr.md)

## Bonnes pratiques

- Définissez la forme de votre état comme une constante
- Utilisez TypeScript pour une meilleure sûreté de typage et l'autocomplétion
- Évitez de stocker des informations sensibles dans les paramètres d'URL (SSN, clés API, etc.)
- Utilisez cette [extension](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors) pour des erreurs TS lisibles

Vous pouvez créer des hooks d'état pour des tranches d'état et les réutiliser dans toute l'application. Par exemple :
```Typescript
type UserState = {
  name: string;
  age: number;
  other: { id: string, value: number }[]
};
const userState = {
  name: '',
  age: 0,
  other: [],
};

export const useUserState = () => {
  const { urlState, setUrl, reset } = useUrlState(userState);

  // autre logique

  // réinitialiser les paramètres de requête lors de la navigation vers une autre page
  React.useEffect(() => {
    return reset
  }, [])

  return { userState: urlState, setUserState: setUrl };;
}

```

## Pièges

1. Vous ne pouvez passer que des valeurs sérialisables ; `Function`, `BigInt` ou `Symbol` ne fonctionneront pas, ni probablement des choses comme `ArrayBuffer`. Tout ce qui peut être sérialisé en JSON fonctionnera.
2. Les serveurs Vercel limitent la taille des en-têtes (chaîne de requête et autres) à **14KB**, gardez donc l'état de votre URL sous ~5000 mots. <https://vercel.com/docs/errors/URL_TOO_LONG>
3. Testé avec `next.js` 14/15/16 avec app router ; pas de plan pour prendre en charge pages.

## Autres

### Contribuer et/ou exécuter localement

Voir le [document de contribution](CONTRIBUTING.md)

## Feuille de route

- [x] hook pour `Next.js`
- [x] hook pour `react-router`
- [x] hook pour `remix`
- [ ] hook pour `svelte`
- [ ] hook pour `astro`
- [ ] hook pour stocker l'état dans le hash ?

## Contact et support

- Créez une [GitHub issue](https://github.com/asmyshlyaev177/state-in-url/issues) pour les signalements de bugs, les demandes de fonctionnalités ou les questions

## [Journal des modifications](CHANGELOG.md)

## Mentions

 - [This Week in React 209](https://thisweekinreact.com/newsletter/209)
 - [JavaScript Weekly](https://javascriptweekly.com/issues/741)
 - [This Week in React 240](https://thisweekinreact.com/newsletter/240)

## Licence

Ce projet est distribué sous la [licence MIT](LICENSE).

## Recrutez-moi

Je suis **Aleksandr Smyshliaev**, unique auteur et mainteneur de cette bibliothèque.
Ingénieur frontend senior (React / Next.js / TypeScript, plus de 8 ans), et **disponible pour un travail à distance à temps plein dès maintenant**.

Cette bibliothèque est la version condensée de ce dans quoi je suis bon : une API typée au-dessus d'une primitive de navigateur désordonnée, zéro dépendance et une stabilité sur Next.js, Remix et React Router à travers plusieurs versions majeures de React.

- **Le meilleur en** — bibliothèques de composants, gestion d'état et suites de tests qui survivent à un refactor.
- **Également à moi** —
  [react-horizontal-scrolling-menu](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu)
  (~84k installations hebdomadaires),
  [test-proxy-recorder](https://github.com/asmyshlyaev177/test-proxy-recorder)
  (enregistrement/relecture pour Playwright),
  [llm-queue](https://github.com/asmyshlyaev177/llm-queue).
- **Où** — Tbilissi, Géorgie (GMT+4), chevauchement complet avec CET. Entité contractante enregistrée, donc l'engagement B2B ne nécessite pas de configuration employer-of-record.
- **Me joindre** — [asmyshlyaev177.dev](https://asmyshlyaev177.dev) ·
  [asmyshlyaev177@gmail.com](mailto:asmyshlyaev177@gmail.com) ·
  [LinkedIn](https://linkedin.com/in/asmyshlyaev177) · Telegram @asmyshlyaev177

## Inspiration

[NUQS](https://github.com/47ng/nuqs)

[Utiliser l'URL pour stocker l'état dans Vue](https://dev.to/jacobandrewsky/using-url-to-store-state-in-vue-275c)

[Stocker l'état dans l'URL](https://antonz.org/storing-state/)

[NextJS useSearchParams](https://nextjs.org/docs/app/api-reference/functions/use-search-params)
