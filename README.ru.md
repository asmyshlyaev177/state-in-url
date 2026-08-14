<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · Русский · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · [Tiếng Việt](./README.vi.md)
<!-- i18n:meta locale=ru source=README.md source-blob=01b5b4f72aa3c8871c185cfce21c6d696edb847b status=translated -->
<!-- i18n:end -->

<div align="center">
  <img src="/packages/example-nextjs14/public/Logo_symbol.png" alt="логотип state-in-url" width="120px" />

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

<h4 align="center">Не стесняйтесь открывать issue, если нашли баг или хотите запросить новую функцию</h4>

![Demo-gif](https://github.com/asmyshlyaev177/state-in-url/blob/master/assets/Demo-gif.gif)

# Демо

<a href="https://state-in-url.dev" target="_blank">Демо</a> |
<a href="https://state-in-url.netlify.app/" target="_blank">Зеркало</a>

<a href="https://github.com/asmyshlyaev177/state-in-url/blob/master/Limits.md"  target="_blank">Ограничение размера URI — безопасно <b>до 12KB</b></a>

<hr />

Добавьте <a href="#"><img src="https://raw.githubusercontent.com/acervenky/animated-github-badges/master/assets/starbadge.gif" width="25" height="25"></a>  и <a href="https://github.com/asmyshlyaev177" target="_blank">подпишитесь на меня</a>, чтобы поддержать проект!

Буду признателен за ваши отзывы и мнения в [обсуждениях](https://github.com/asmyshlyaev177/state-in-url/discussions/1)

Поделитесь, если это было вам полезно.
[X.com](https://twitter.com/intent/tweet?&url=https://github.com/asmyshlyaev177/state-in-url)
[LinkedIn](https://www.linkedin.com/sharing/share-offsite/?url=https://github.com/asmyshlyaev177/state-in-url)
[FB](https://www.facebook.com/sharer.php?u=https://github.com/asmyshlyaev177/state-in-url)
[VK](http://vk.com/share.php?url=https://github.com/asmyshlyaev177/state-in-url)

  <hr />

  </div>

[Сразу покажите код!](#useurlstate)

## Зачем использовать `state-in-url`?

Храните любое пользовательское состояние в параметрах запроса — представьте JSON в URL браузера. При этом сохраняются типы и структура данных: например, числа декодируются как числа, а не строки, даты — как даты и т. д., поддерживаются объекты и массивы.
До безобразия просто, быстро и со статической проверкой TypeScript. Глубокие ссылки, то есть синхронизация URL, становятся лёгкими.

Содержит hook `useUrlState` для Next.js и react-router, а также вспомогательные функции для всего остального на JS.
Современные браузеры поддерживают огромные URL, а пользователям всё равно на строку запроса (это просто «выделить всё и скопировать/вставить»).

Пора использовать строку запроса для управления состоянием, как это и было задумано изначально.
Библиотека делает всю рутинную работу за вас.

Библиотека — хорошая альтернатива NUQS.

### Сценарии использования

- Хранение несохранённых пользовательских форм или фильтров страниц в URL
- Синхронизация URL с состоянием React
- Просто синхронизация данных между несвязанными клиентскими компонентами, не трогая URI
- URL, которыми можно делиться, вместе с состоянием приложения (глубокие ссылки, синхронизация состояния в URL)
- Простое сохранение состояния между перезагрузками страницы

### Возможности

- 🧩 **Просто**: Без провайдеров, редьюсеров, бойлерплейта и новых концепций, API похож на `React.useState`
- 📘 **Проверка/автодополнение TypeScript**: Состояние — просто объект, автоматическая статическая проверка в IDE/тестах по описанию TypeScript
- ✨ **Сложные данные**: Вложенные объекты, даты и массивы, работает как JSON, но в URL
- ☂ **Значения по умолчанию**: Возвращает значения по умолчанию, если параметра нет в URL
- ⌨ **Упорядоченно**: Все возможные значения заданы сразу — защищает от обращения к несуществующему ключу
- **совместимо**: Сохраняет сторонние параметры запроса как есть
- **гибко**: Можно использовать несколько объектов состояния на одной странице — просто с разными ключами
- **Быстро**: Минимум ре-рендеров, около [1ms](https://github.com/asmyshlyaev177/state-in-url/blob/87c8c7c995c5cd7d9e7aa039c30bfe64b24abe4b/packages/urlstate/encoder/encoder.test.ts#L185) на кодирование и декодирование большого объекта
- **Серверный рендеринг**: Можно использовать в серверных компонентах, поддерживаются Next.js 14, 15 и 16
- **Лёгкость**: Ноль зависимостей, библиотека меньше 2KB
- **DX**: Хороший developer experience, документация, JSDoc-комментарии и примеры
- **Гибкость по фреймворкам**: Hook'и для `Next.js` и `react-router`, вспомогательные функции для других фреймворков или чистого JS
- **Хорошо протестирована**: [Юнит-тесты и тесты Playwright для Chrome/Firefox/Safari](https://github.com/asmyshlyaev177/state-in-url/actions/workflows/tests.yml)
- **Разрешительная лицензия**: MIT

## Содержание

<!-- toc:start -->

- [State in url](#state-in-url)
- [Демо](#демо)
  - [Зачем использовать `state-in-url`?](#зачем-использовать-state-in-url)
    - [Сценарии использования](#сценарии-использования)
    - [Возможности](#возможности)
  - [Содержание](#содержание)
  - [Установка](#установка)
    - [1. Установка пакета](#1-установка-пакета)
    - [2. Правка tsconfig.json](#2-правка-tsconfigjson)
  - [Использование с AI-агентами для кодинга](#использование-с-ai-агентами-для-кодинга)
  - [useUrlState](#useurlstate)
    - [Hook useUrlState для Next.js](#hook-useurlstate-для-nextjs)
      - [Примеры использования](#примеры-использования)
        - [Базовый](#базовый)
        - [С серверным рендерингом](#с-серверным-рендерингом)
        - [Использование hook в компоненте `layout`](#использование-hook-в-компоненте-layout)
        - [С произвольной формой состояния (не рекомендуется)](#с-произвольной-формой-состояния-не-рекомендуется)
    - [Hook useUrlState для Remix.js](#hook-useurlstate-для-remixjs)
      - [Пример](#пример)
    - [Hook useUrlState для React-Router](#hook-useurlstate-для-react-router)
      - [Пример](#пример-1)
  - [Рецепты](#рецепты)
        - [Пользовательский hook для удобной работы со срезом состояния](#пользовательский-hook-для-удобной-работы-со-срезом-состояния)
        - [Со сложной формой состояния](#со-сложной-формой-состояния)
        - [Обновлять только состояние и синхронизировать с URL вручную](#обновлять-только-состояние-и-синхронизировать-с-url-вручную)
  - [Другие hook'и и вспомогательные функции](#другие-hookи-и-вспомогательные-функции)
    - [Hook `useUrlStateBase` для других роутеров](#hook-useurlstatebase-для-других-роутеров)
    - [Hook `useSharedState` для React.js](#hook-usesharedstate-для-reactjs)
    - [Hook `useUrlEncode` для React.js](#hook-useurlencode-для-reactjs)
    - [Вспомогательные функции `encodeState` и `decodeState`](#вспомогательные-функции-encodestate-и-decodestate)
    - [Вспомогательные функции `encode` и `decode`](#вспомогательные-функции-encode-и-decode)
  - [Рекомендации](#рекомендации)
  - [Подводные камни](#подводные-камни)
  - [Прочее](#прочее)
    - [Участие и/или локальный запуск](#участие-иили-локальный-запуск)
  - [Дорожная карта](#дорожная-карта)
  - [Контакты и поддержка](#контакты-и-поддержка)
  - [История изменений](#история-изменений)
  - [Упоминания](#упоминания)
  - [Лицензия](#лицензия)
  - [Наймите меня](#наймите-меня)
  - [Вдохновение](#вдохновение)

<!-- toc:end -->

## Установка

### 1. Установка пакета

```sh
# npm
npm install --save state-in-url
# yarn
yarn add state-in-url
# pnpm
pnpm add state-in-url
```

### 2. Правка tsconfig.json

В `tsconfig.json` в `compilerOptions` задайте `"moduleResolution": "Bundler"`, либо `"moduleResolution": "Node16"`, либо `"moduleResolution": "NodeNext"`.
Возможно, понадобится задать `"module": "ES2022"` или `"module": "ESNext"`

## Использование с AI-агентами для кодинга

`state-in-url` поставляется с файлами навыков (skills) для [@tanstack/intent](https://tanstack.com/intent/latest/docs/overview), поэтому AI-агенты (Claude Code, Cursor, Copilot, Codex и т. д.) загружают правильные паттерны и избегают типичных ошибок при работе с библиотекой. После установки `state-in-url` выполните один раз в своём проекте:

```sh
npx @tanstack/intent@latest install
```

Это настроит установленного агента так, чтобы он находил навыки в `node_modules/state-in-url/skills/`. Список доступных навыков — `npx @tanstack/intent@latest list`.

## useUrlState

Основной hook, который принимает начальное состояние как параметр и возвращает объект состояния, колбэк для обновления URL и колбэк для обновления только состояния.
Все компоненты, использующие один и тот же объект `state`, синхронизируются автоматически.

### Hook useUrlState для Next.js

[Полная документация по API](packages/urlstate/next/useUrlState)

[Пример React-Router](#hook-useurlstate-для-react-router)

#### Примеры использования

##### Базовый

1. Определите форму состояния со значениями по умолчанию

 ```typescript
 // userState.ts
 // В URL попадут только параметры, чьё значение отличается от значения по умолчанию.
 export const userState: UserState = { name: '', age: 0 }

 // Используйте `Type`, а не `Interface`!
 type UserState = { name: string, age: number }
 ```

2. Импортируйте и используйте

```typescript
'use client'
import { useUrlState } from 'state-in-url/next';

import { userState } from './userState';

function MyComponent() {
  // Можно передать аргумент `replace` — он управляет тем, использует ли `setUrl` `router.push` или `router.replace`, по умолчанию replace=true
  // Можно передать `searchParams` из серверных компонентов; передайте `useHistory: false`, если нужно что-то получить в серверном компоненте
  const { urlState, setUrl, setState } = useUrlState(userState);

  return (
    <div>
      // urlState.name вернёт значение по умолчанию из `userState`, если URL пуст
      <input value={urlState.name}
        // Тот же API, что и у React.useState, например setUrl(currVal => currVal + 1)
        onChange={(ev) => setUrl({ name: ev.target.value }) }
      />
      <input value={urlState.age}
        onChange={(ev) => setUrl({ age: +ev.target.value }) }
      />

      <input value={urlState.name}
        onChange={(ev) => { setState(curr => ({ ...curr, name: ev.target.value })) }}
        // Можно обновить состояние сразу, но синхронизировать изменения с URL по мере необходимости
        onBlur={() => setUrl()}
      />

      <button onClick={() => setUrl((_, initial) => initial)}>
        Reset
      </button>

    </div>
  )
}
```

##### С серверным рендерингом

<details>
  <Summary>Пример</Summary>

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

##### Использование hook в компоненте `layout`

<details>
  <Summary>Пример</Summary>
  Это непростой момент: nextjs с app router не позволяет получить доступ к searchParams со стороны сервера. Есть обходной путь через middleware, но он некрасивый и может перестать работать после обновления nextjs.

```typescript
// добавьте в подходящий `layout.tsx`
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

// Целевой компонент layout
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

##### С произвольной формой состояния (не рекомендуется)

<details>
  <Summary>Пример</Summary>

```typescript
'use client'
import { useUrlState } from 'state-in-url/next';

const someObj = {};

function SettingsComponent() {
  const { urlState, setUrl, setState } = useUrlState<object>(someObj);
}
```

</details>

### Hook useUrlState для Remix.js

API такой же, как у версии для Next.js, за исключением того, что можно передать опции из типа [NavigateOptions](https://github.com/remix-run/react-router/blob/bc693ed9f39170bda13b9e1b282fb8e9d5925f66/packages/react-router/lib/context.ts#L99).

[Документация по API](packages/urlstate/remix/useUrlState)

#### Пример

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
        // Можно обновить состояние сразу, но синхронизировать изменения с URL по мере необходимости
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

[Пример кода](packages/example-remix2/app/routes/Form-for-test.tsx)

### Hook useUrlState для React-Router

API такой же, как у версии для Next.js, за исключением того, что можно передать опции из типа [NavigateOptions](https://github.com/remix-run/react-router/blob/bc693ed9f39170bda13b9e1b282fb8e9d5925f66/packages/react-router/lib/context.ts#L99).

[Документация по API](packages/urlstate/react-router/useUrlState)

#### Пример

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
// для react-router v6
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
        // Можно обновить состояние сразу, но синхронизировать изменения с URL по мере необходимости
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

[Пример кода](packages/example-react-router6/src/Form-for-test.tsx)

## Рецепты
##### Пользовательский hook для удобной работы со срезом состояния
<details>
  <Summary>Пример</Summary>

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

    // первая навигация добавит новую запись в историю
    // все последующие будут лишь заменять эту запись
    // так в истории будет только 2 записи - ['/url', '/url?key=param']

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

##### Со сложной формой состояния

<details>
  <Summary>Пример</Summary>

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
  // `urlState` будет выведен из типа Form!
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

[Пример кода демо-страницы](https://github.com/asmyshlyaev177/state-in-url/blob/master/packages/example-nextjs15/src/app/Form.tsx)
</details>

##### Обновлять только состояние и синхронизировать с URL вручную

<details>
  <Summary>Пример</Summary>

  ```typescript

  const timer = React.useRef(0 as unknown as NodeJS.Timeout);
  React.useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      // сравнит состояние по содержимому, а не по ссылке, и вызовет обновление только для новых значений
      setUrl(urlState);
    }, 500);

    return () => {
      clearTimeout(timer.current);
    };
  }, [urlState, setUrl]);
```

Синхронизация состояния по `onBlur` лучше соответствует реальному использованию.

```typescript
<input onBlur={() => updateUrl()} .../>
```

</details>

## Другие hook'и и вспомогательные функции

### Hook `useUrlStateBase` для других роутеров

Hook'и для создания собственных hook'ов `useUrlState` с другими роутерами, например react-router или tanstack router.

[Документация по API](packages/urlstate/useUrlStateBase)

### Hook `useSharedState` для React.js

Hook для обмена состоянием между любыми React-компонентами; протестирован с Next.js и Vite.

```typescript
'use client'
import { useSharedState } from 'state-in-url';

export const someState = { name: '' };

function SettingsComponent() {
  const { state, setState } = useSharedState(someState);
}
```

[Документация по API](packages/urlstate/useSharedState/README.ru.md)

### Hook `useUrlEncode` для React.js

[Документация по API](packages/urlstate/useUrlEncode/README.ru.md)

### Вспомогательные функции `encodeState` и `decodeState`

[Документация по API](packages/urlstate/encodeState/README.ru.md)

### Вспомогательные функции `encode` и `decode`

[Документация по API](packages/urlstate/encoder/README.ru.md)

## Рекомендации

- Определяйте форму состояния как константу
- Используйте TypeScript для усиленной типобезопасности и автодополнения
- Не храните в параметрах URL конфиденциальные данные (SSN, ключи API и т. п.)
- Используйте это [расширение](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors) для читаемых ошибок TS

Можно создавать hook'и состояния для срезов состояния и переиспользовать их по всему приложению. Например:
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

  // прочая логика

  // сбросить параметры запроса при переходе на другую страницу
  React.useEffect(() => {
    return reset
  }, [])

  return { userState: urlState, setUserState: setUrl };;
}

```

## Подводные камни

1. Можно передавать только сериализуемые значения: `Function`, `BigInt` или `Symbol` не сработают, как и, вероятно, `ArrayBuffer`. Всё, что можно сериализовать в JSON, будет работать.
2. Серверы Vercel ограничивают размер заголовков (строка запроса и прочее) **14KB**, поэтому держите состояние в URL в пределах ~5000 слов. <https://vercel.com/docs/errors/URL_TOO_LONG>
3. Протестировано с `next.js` 14/15/16 с app router; поддержка pages не планируется.

## Прочее

### Участие и/или локальный запуск

См. [документ по участию](CONTRIBUTING.md)

## Дорожная карта

- [x] hook для `Next.js`
- [x] hook для `react-router`
- [x] hook для `remix`
- [ ] hook для `svelte`
- [ ] hook для `astro`
- [ ] hook для хранения состояния в hash ?

## Контакты и поддержка

- Создайте [GitHub issue](https://github.com/asmyshlyaev177/state-in-url/issues) для сообщений об ошибках, запросов функций или вопросов

## [История изменений](CHANGELOG.md)

## Упоминания

 - [This Week in React 209](https://thisweekinreact.com/newsletter/209)
 - [JavaScript Weekly](https://javascriptweekly.com/issues/741)
 - [This Week in React 240](https://thisweekinreact.com/newsletter/240)

## Лицензия

Проект распространяется по [лицензии MIT](LICENSE).

## Наймите меня

Я — **Aleksandr Smyshliaev**, единственный автор и мейнтейнер этой библиотеки.
Сеньор фронтенд-инженер (React / Next.js / TypeScript, 8+ лет), **готов к полной удалённой работе прямо сейчас**.

Эта библиотека — краткая версия того, что я умею: типизированный API поверх неаккуратного браузерного примитива, ноль зависимостей и стабильность в Next.js, Remix и React Router на протяжении нескольких мажорных версий React.

- **Сильнее всего в** — библиотеки компонентов, управление состоянием и тестовые наборы, переживающие рефакторинг.
- **Также моё** —
  [react-horizontal-scrolling-menu](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu)
  (~84k установок в неделю),
  [test-proxy-recorder](https://github.com/asmyshlyaev177/test-proxy-recorder)
  (запись/воспроизведение для Playwright),
  [llm-queue](https://github.com/asmyshlyaev177/llm-queue).
- **Где** — Тбилиси, Грузия (GMT+4), полное пересечение с CET. Зарегистрирован как подрядчик, поэтому для B2B-сотрудничества не нужен employer-of-record.
- **Связаться со мной** — [asmyshlyaev177.dev](https://asmyshlyaev177.dev) ·
  [asmyshlyaev177@gmail.com](mailto:asmyshlyaev177@gmail.com) ·
  [LinkedIn](https://linkedin.com/in/asmyshlyaev177) · Telegram @asmyshlyaev177

## Вдохновение

[NUQS](https://github.com/47ng/nuqs)

[Хранение состояния в URL во Vue](https://dev.to/jacobandrewsky/using-url-to-store-state-in-vue-275c)

[Хранение состояния в URL](https://antonz.org/storing-state/)

[NextJS useSearchParams](https://nextjs.org/docs/app/api-reference/functions/use-search-params)
