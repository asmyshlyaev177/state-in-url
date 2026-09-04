<!-- i18n:start -->
[English](./README.md) · [简体中文](./README.zh-CN.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Русский](./README.ru.md) · [Español](./README.es.md) · [Português (BR)](./README.pt-BR.md) · [Français](./README.fr.md) · Tiếng Việt
<!-- i18n:meta locale=vi source=README.md source-blob=4d98ba970e6aab8f29987fbcba29fb6c61c2fc67 status=translated -->
<!-- i18n:end -->

<div align="center">
  <img src="/packages/example-nextjs14/public/Logo_symbol.png" alt="logo state-in-url" width="120px" />

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

<h4 align="center">Đừng ngần ngại mở một issue nếu bạn tìm thấy bug, hoặc để yêu cầu tính năng</h4>

![Demo-gif](https://github.com/asmyshlyaev177/state-in-url/blob/master/assets/Demo-gif.gif)

# Demo

<a href="https://state-in-url.dev" target="_blank">Demo</a> |
<a href="https://state-in-url.netlify.app/" target="_blank">Liên kết dự phòng</a>

<a href="https://github.com/asmyshlyaev177/state-in-url/blob/master/Limits.md"  target="_blank">Giới hạn kích thước URI, <b>tối đa 12KB</b> là an toàn</a>

<hr />

Hãy thêm một <a href="#"><img src="https://raw.githubusercontent.com/acervenky/animated-github-badges/master/assets/starbadge.gif" width="25" height="25"></a>  và <a href="https://github.com/asmyshlyaev177" target="_blank">theo dõi tôi</a> để ủng hộ dự án!

Rất trân trọng phản hồi/ý kiến của bạn trên [thảo luận](https://github.com/asmyshlyaev177/state-in-url/discussions/1)

Hãy chia sẻ nếu nó hữu ích cho bạn.
[X.com](https://twitter.com/intent/tweet?&url=https://github.com/asmyshlyaev177/state-in-url)
[LinkedIn](https://www.linkedin.com/sharing/share-offsite/?url=https://github.com/asmyshlyaev177/state-in-url)
[FB](https://www.facebook.com/sharer.php?u=https://github.com/asmyshlyaev177/state-in-url)
[VK](http://vk.com/share.php?url=https://github.com/asmyshlyaev177/state-in-url)

  <hr />

  </div>

[Cho tôi xem code ngay!](#useurlstate)

## Tại sao dùng `state-in-url`?

Lưu bất kỳ state người dùng nào trong tham số truy vấn; hãy tưởng tượng JSON trong URL của trình duyệt. Tất cả đều giữ nguyên kiểu và cấu trúc dữ liệu, ví dụ số sẽ được giải mã thành số chứ không phải chuỗi, ngày thành ngày, v.v., hỗ trợ object và array.
Cực kỳ đơn giản, nhanh và có kiểm tra TypeScript tĩnh. Deep link, hay còn gọi là đồng bộ URL, trở nên dễ dàng.

Bao gồm hook `useUrlState` cho Next.js, react-router, Remix và Astro, cùng các helper cho mọi thứ khác trên JS.
Vì các trình duyệt hiện đại hỗ trợ URL khổng lồ và người dùng không quan tâm đến chuỗi truy vấn (đó là quy trình chọn tất cả và sao chép/dán).

Đã đến lúc dùng chuỗi truy vấn cho việc quản lý state, như mục đích ban đầu của nó.
Thư viện này làm mọi việc tẻ nhạt cho bạn.

Thư viện này là một lựa chọn thay thế tốt cho NUQS.

### Trường hợp sử dụng

- Lưu biểu mẫu người dùng chưa lưu hoặc bộ lọc trang trong URL
- Đồng bộ URL với state React
- Chỉ đồng bộ dữ liệu giữa các client component không liên quan mà không chạm vào URI
- URL có thể chia sẻ kèm state ứng dụng (deep link, đồng bộ state trong URL)
- Dễ dàng duy trì state qua các lần tải lại trang

### Tính năng

- 🧩 **Đơn giản**: Không provider, reducer, boilerplate hay khái niệm mới, API tương tự `React.useState`
- 📘 **Kiểm tra/tự hoàn thành TypeScript**: State chỉ là một object, kiểm tra tĩnh tự động trong IDE/test theo định nghĩa TypeScript
- ✨ **Dữ liệu phức tạp**: Object lồng nhau, ngày và array, hoạt động giống JSON nhưng trong URL
- ☂ **Giá trị mặc định**: Cung cấp giá trị mặc định nếu tham số không có trong url
- ⌨ **Có tổ chức**: Tất cả giá trị có thể được định nghĩa ngay từ đầu, bảo vệ bạn khỏi việc lấy key không tồn tại
- **tương thích**: Sẽ giữ nguyên các tham số truy vấn của bên thứ ba
- **linh hoạt**: Có thể dùng nhiều hơn 1 object state trên cùng một trang, chỉ cần dùng key khác nhau
- **Nhanh**: Re-render tối thiểu, khoảng [1ms](https://github.com/asmyshlyaev177/state-in-url/blob/87c8c7c995c5cd7d9e7aa039c30bfe64b24abe4b/packages/urlstate/encoder/encoder.test.ts#L185) để mã hóa và giải mã object lớn
- **Server Side Rendering**: Có thể dùng trong Server Component, hỗ trợ Next.js 14, 15 và 16
- **Nhẹ**: Không phụ thuộc, thư viện dưới 2KB
- **DX**: Trải nghiệm lập trình tốt, tài liệu, chú thích JSDoc và ví dụ
- **Linh hoạt framework**: Hook cho `Next.js`, `react-router`, `Remix` và `Astro`, helper để dùng với framework khác hoặc JS thuần
- **Được kiểm thử kỹ**: [Unit test và Playwright test cho Chrome/Firefox/Safari](https://github.com/asmyshlyaev177/state-in-url/actions/workflows/tests.yml)
- **Giấy phép thoáng**: MIT

### So sánh với nuqs

Đang tìm một lựa chọn thay thế [nuqs](https://github.com/47ng/nuqs)? Cả hai đều lưu state có kiểu trong query string; khác nhau ở lượng cấu hình cần thiết và giá trị có thể là gì.

| Tiêu chí | `state-in-url` | `nuqs` |
| --- | --- | --- |
| Cài đặt | Không cần — import hook là dùng được | Component adapter bọc quanh ứng dụng |
| Hình dạng state | Một object có kiểu, giống `React.useState` | Giá trị theo từng khóa, mỗi khóa khai báo một parser |
| Tái sử dụng giữa các component | Bọc hook một lần — mọi component chia sẻ state, không cần props | Bạn tự tách hook quanh bộ parser |
| Object và mảng lồng nhau | Có sẵn — giữ nguyên cấu trúc và kiểu | Parser JSON cộng thêm validator tự viết |
| Ngày tháng | Giữ nguyên tự động | Parser có sẵn, khai báo theo từng khóa |
| Kích thước, import toàn bộ | ~2.9 KB gzip | ~6.7 KB gzip |
| Phụ thuộc runtime | Không | Một |
| Router | Next.js, React Router v6/v7, Remix, Astro, helper cho JS thuần | Next.js, React Router, Remix, TanStack Router, React thuần |

Kích thước: import cả thư viện, esbuild minify + gzip, đo tháng 8/2026 với nuqs 2.10.1.

nuqs là một thư viện tốt — hãy chọn nó khi bạn muốn mỗi giá trị là một query param dễ đọc, hoặc đang dùng TanStack Router. Chọn state-in-url khi bạn muốn cả một object có kiểu nằm trong URL mà không cần cấu hình.


Bản so sánh đầy đủ — cùng một tính năng trong cả hai, các lựa chọn khác (TanStack Router, use-query-params) và ghi chú di chuyển — nằm tại <https://state-in-url.dev/vs/nuqs>.

## Mục lục

<!-- toc:start -->

- [State in url](#state-in-url)
- [Demo](#demo)
  - [Tại sao dùng `state-in-url`?](#tại-sao-dùng-state-in-url)
    - [Trường hợp sử dụng](#trường-hợp-sử-dụng)
    - [Tính năng](#tính-năng)
    - [So sánh với nuqs](#so-sánh-với-nuqs)
  - [Mục lục](#mục-lục)
  - [Cài đặt](#cài-đặt)
    - [1. Cài đặt package](#1-cài-đặt-package)
    - [2. Sửa tsconfig.json](#2-sửa-tsconfigjson)
  - [Dùng với AI coding agent](#dùng-với-ai-coding-agent)
  - [useUrlState](#useurlstate)
    - [Hook useUrlState cho Next.js](#hook-useurlstate-cho-nextjs)
      - [Ví dụ sử dụng](#ví-dụ-sử-dụng)
        - [Cơ bản](#cơ-bản)
        - [Với server side rendering](#với-server-side-rendering)
        - [Dùng hook trong component `layout`](#dùng-hook-trong-component-layout)
        - [Với hình dạng state tùy ý (không khuyến nghị)](#với-hình-dạng-state-tùy-ý-không-khuyến-nghị)
    - [Hook useUrlState cho Remix.js](#hook-useurlstate-cho-remixjs)
      - [Ví dụ](#ví-dụ)
    - [Hook useUrlState cho React-Router](#hook-useurlstate-cho-react-router)
      - [Ví dụ](#ví-dụ-1)
    - [Hook useUrlState cho Astro](#hook-useurlstate-cho-astro)
      - [Ví dụ](#ví-dụ-2)
  - [Công thức nấu ăn](#công-thức-nấu-ăn)
        - [Hook tùy chỉnh để làm việc thuận tiện với một phần của state](#hook-tùy-chỉnh-để-làm-việc-thuận-tiện-với-một-phần-của-state)
        - [Với hình dạng state phức tạp](#với-hình-dạng-state-phức-tạp)
        - [Chỉ cập nhật state và đồng bộ với URL thủ công](#chỉ-cập-nhật-state-và-đồng-bộ-với-url-thủ-công)
  - [Các hook và helper khác](#các-hook-và-helper-khác)
    - [Hook `useUrlStateBase` cho các router khác](#hook-useurlstatebase-cho-các-router-khác)
    - [Hook `useSharedState` cho React.js](#hook-usesharedstate-cho-reactjs)
    - [Hook `useLinkProps` cho React.js](#hook-uselinkprops-cho-reactjs)
    - [Hook `useUrlEncode` cho React.js](#hook-useurlencode-cho-reactjs)
    - [Helper `encodeState` và `decodeState`](#helper-encodestate-và-decodestate)
    - [Helper `encode` và `decode`](#helper-encode-và-decode)
  - [Thực hành tốt](#thực-hành-tốt)
  - [Lưu ý](#lưu-ý)
  - [Khác](#khác)
    - [Đóng góp và/hoặc chạy cục bộ](#đóng-góp-vàhoặc-chạy-cục-bộ)
  - [Lộ trình](#lộ-trình)
  - [Liên hệ & Hỗ trợ](#liên-hệ--hỗ-trợ)
  - [Changelog](#changelog)
  - [Được nhắc đến](#được-nhắc-đến)
  - [Giấy phép](#giấy-phép)
  - [Thuê tôi](#thuê-tôi)
  - [Cảm hứng](#cảm-hứng)

<!-- toc:end -->

## Cài đặt

### 1. Cài đặt package

```sh
# npm
npm install --save state-in-url
# yarn
yarn add state-in-url
# pnpm
pnpm add state-in-url
```

### 2. Sửa tsconfig.json

Trong `tsconfig.json`, trong `compilerOptions`, đặt `"moduleResolution": "Bundler"`, hoặc `"moduleResolution": "Node16"`, hoặc `"moduleResolution": "NodeNext"`.
Có thể cần đặt `"module": "ES2022"`, hoặc `"module": "ESNext"`

## Dùng với AI coding agent

`state-in-url` kèm theo các file skill cho [@tanstack/intent](https://tanstack.com/intent/latest/docs/overview), để các AI agent (Claude Code, Cursor, Copilot, Codex, v.v.) tải đúng pattern và tránh các lỗi thường gặp khi dùng thư viện. Sau khi cài `state-in-url`, chạy một lần trong dự án của bạn:

```sh
npx @tanstack/intent@latest install
```

Điều này cấu hình agent đã cài của bạn để khám phá các skill từ `node_modules/state-in-url/skills/`. Liệt kê các skill có sẵn bằng `npx @tanstack/intent@latest list`.

## useUrlState

Hook chính nhận state ban đầu làm tham số và trả về object state, callback để cập nhật url và callback để chỉ cập nhật state.
Tất cả component dùng cùng object `state` sẽ được đồng bộ tự động.

### Hook useUrlState cho Next.js

[Tài liệu API đầy đủ](packages/urlstate/next/useUrlState)

[Ví dụ React-Router](#hook-useurlstate-cho-react-router)

#### Ví dụ sử dụng

##### Cơ bản

1. Định nghĩa hình dạng state với các giá trị mặc định

 ```typescript
 // userState.ts
 // Chỉ các tham số có giá trị khác mặc định mới được đưa vào url.
 export const userState: UserState = { name: '', age: 0 }

 // Dùng `Type` chứ không phải `Interface`!
 type UserState = { name: string, age: number }
 ```

2. Import và sử dụng

```typescript
'use client'
import { useUrlState } from 'state-in-url/next';

import { userState } from './userState';

function MyComponent() {
  // có thể truyền đối số `replace`, nó kiểm soát việc `setUrl` sẽ dùng `router.push` hay `router.replace`, mặc định replace=true
  // có thể truyền `searchParams` từ server component, truyền `useHistory: false` nếu bạn cần fetch thứ gì đó trong server component
  const { urlState, setUrl, setState } = useUrlState(userState);

  return (
    <div>
      // urlState.name sẽ trả về giá trị mặc định từ `userState` nếu url trống
      <input value={urlState.name}
        // api giống React.useState, ví dụ setUrl(currVal => currVal + 1)
        onChange={(ev) => setUrl({ name: ev.target.value }) }
      />
      <input value={urlState.age}
        onChange={(ev) => setUrl({ age: +ev.target.value }) }
      />

      <input value={urlState.name}
        onChange={(ev) => { setState(curr => ({ ...curr, name: ev.target.value })) }}
        // Có thể cập nhật state ngay lập tức nhưng đồng bộ thay đổi với url khi cần
        onBlur={() => setUrl()}
      />

      <button onClick={() => setUrl((_, initial) => initial)}>
        Reset
      </button>

    </div>
  )
}
```

##### Với server side rendering

<details>
  <Summary>Ví dụ</Summary>

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

##### Dùng hook trong component `layout`

<details>
  <Summary>Ví dụ</Summary>
  Đó là một phần khó, vì nextjs với app router không cho phép truy cập searchParams từ phía server. Có một cách giải quyết bằng middleware, nhưng nó không đẹp và có thể ngừng hoạt động sau khi nextjs cập nhật.

```typescript
// thêm vào `layout.tsx` phù hợp
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

// Component layout mục tiêu
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

##### Với hình dạng state tùy ý (không khuyến nghị)

<details>
  <Summary>Ví dụ</Summary>

```typescript
'use client'
import { useUrlState } from 'state-in-url/next';

const someObj = {};

function SettingsComponent() {
  const { urlState, setUrl, setState } = useUrlState<object>(someObj);
}
```

</details>

### Hook useUrlState cho Remix.js

API giống với phiên bản Next.js, ngoại trừ có thể truyền option từ type [NavigateOptions](https://github.com/remix-run/react-router/blob/bc693ed9f39170bda13b9e1b282fb8e9d5925f66/packages/react-router/lib/context.ts#L99).

[Tài liệu API](packages/urlstate/remix/useUrlState)

#### Ví dụ

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
        // Có thể cập nhật state ngay lập tức nhưng đồng bộ thay đổi với url khi cần
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

[Ví dụ code](packages/example-remix2/app/routes/Form-for-test.tsx)

### Hook useUrlState cho React-Router

API giống với phiên bản Next.js, ngoại trừ có thể truyền option từ type [NavigateOptions](https://github.com/remix-run/react-router/blob/bc693ed9f39170bda13b9e1b282fb8e9d5925f66/packages/react-router/lib/context.ts#L99).

[Tài liệu API](packages/urlstate/react-router/useUrlState)

#### Ví dụ

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
// cho react-router v6
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
        // Có thể cập nhật state ngay lập tức nhưng đồng bộ thay đổi với url khi cần
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

[Ví dụ code](packages/example-react-router6/src/Form-for-test.tsx)

### Hook useUrlState cho Astro

Dành cho React island. Astro mặc định không có router phía client, nên hook ghi URL bằng `window.history` và đọc lại nó khi back/forward cũng như khi có bất kỳ lời gọi `pushState`/`replaceState` nào khác, kể cả `<ClientRouter />` của chính Astro. Các island trên cùng một trang chia sẻ state mà không cần bọc chúng trong bất cứ thứ gì.

[Tài liệu API](packages/urlstate/astro/useUrlState)

#### Ví dụ

```typescript
// src/state.ts
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

Trang phải được render theo yêu cầu (`output: 'server'`, hoặc `export const prerender = false` trên trang, kèm một adapter): trang prerender không có request, nên island nhận `{}` và đọc URL sau khi hydration.

```astro
---
// src/pages/index.astro
import { Form } from '../components/Form';
import { Status } from '../components/Status';

// Kết quả render trên server khớp với URL, nên hydration không phải sửa gì.
// Một object thuần: prop của island được tuần tự hóa, URLSearchParams thì không.
const searchParams = Object.fromEntries(Astro.url.searchParams);
---

<Form client:load searchParams={searchParams} />
<Status client:load searchParams={searchParams} />
```

```typescript
// src/components/Form.tsx
import React from 'react';
import { useUrlState } from 'state-in-url/astro';

import { form } from '../state';

export function Form({ searchParams }: { searchParams?: Record<string, string> }) {
  const { urlState, setUrl, setState } = useUrlState(form, { searchParams });

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
      {tags.map((tag) => (
        <Tag
          active={!!urlState.tags.find((t) => t.id === tag.id)}
          text={tag.value.text}
          onClick={() => onChangeTags(tag)}
          key={tag.id}
        />
      ))}

      <input value={urlState.name}
        onChange={(ev) => { setState(curr => ({ ...curr, name: ev.target.value })) }}
        // Có thể cập nhật state ngay lập tức nhưng đồng bộ thay đổi với url khi cần
        onBlur={() => setUrl()}
      />
    </div>
  );
}

const tags = [
  { id: '1', value: { text: 'React.js', time: new Date('2024-07-17T04:53:17.000Z') } },
  { id: '2', value: { text: 'Next.js', time: new Date('2024-07-18T04:53:17.000Z') } },
  { id: '3', value: { text: 'TailwindCSS', time: new Date('2024-07-19T04:53:17.000Z') } },
];

// Status.tsx, một island thứ hai, đọc cùng state đó
export function Status({ searchParams }: { searchParams?: Record<string, string> }) {
  const { urlState } = useUrlState(form, { searchParams });
  return <pre>{JSON.stringify(urlState, null, 2)}</pre>;
}
```

Preact island hoạt động theo cùng cách: với `@astrojs/preact` và `compat: true`, `react` được phân giải thành `preact/compat` trong cả bản build server lẫn client, và import ở trên giữ nguyên.

Không dùng island, trên một trang hoàn toàn không có framework phía client, cùng state đó nằm trong frontmatter thông qua [`decodeState` và `encodeState`](#helper-encodestate-và-decodestate):

```astro
---
import { decodeState, encodeState } from 'state-in-url/encodeState';

import { form } from '../state';

const state = decodeState(Astro.url.searchParams, form);
const withName = encodeState({ ...state, name: 'Alice' }, form, Astro.url.searchParams);
---

<pre>{JSON.stringify(state)}</pre>
<a href={`?${withName}`}>Alice</a>
```

[Ví dụ code](packages/example-astro/src/components/Form-for-test.tsx), [trang Astro thuần](packages/example-astro/src/pages/pure-astro.astro)

## Công thức nấu ăn
##### Hook tùy chỉnh để làm việc thuận tiện với một phần của state
<details>
  <Summary>Ví dụ</Summary>

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

    // lần điều hướng đầu tiên sẽ push một mục lịch sử mới
    // tất cả các lần sau sẽ chỉ replace mục đó
    // theo cách này lịch sử sẽ chỉ có 2 mục - ['/url', '/url?key=param']

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

##### Với hình dạng state phức tạp

<details>
  <Summary>Ví dụ</Summary>

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
  // `urlState` sẽ được suy ra từ type Form!
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

[Ví dụ code trang demo](https://github.com/asmyshlyaev177/state-in-url/blob/master/packages/example-nextjs15/src/app/Form.tsx)
</details>

##### Chỉ cập nhật state và đồng bộ với URL thủ công

<details>
  <Summary>Ví dụ</Summary>

  ```typescript

  const timer = React.useRef(0 as unknown as NodeJS.Timeout);
  React.useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      // sẽ so sánh state theo nội dung chứ không phải theo tham chiếu và chỉ kích hoạt cập nhật cho các giá trị mới
      setUrl(urlState);
    }, 500);

    return () => {
      clearTimeout(timer.current);
    };
  }, [urlState, setUrl]);
```

Đồng bộ state trong `onBlur` sẽ phù hợp hơn với cách dùng thực tế.

```typescript
<input onBlur={() => updateUrl()} .../>
```

</details>

## Các hook và helper khác

### Hook `useUrlStateBase` cho các router khác

Hook để tạo các hook `useUrlState` của riêng bạn với các router khác, ví dụ react-router hoặc tanstack router.

[Tài liệu API](packages/urlstate/useUrlStateBase)

### Hook `useSharedState` cho React.js

Hook để chia sẻ state giữa bất kỳ component React nào, đã thử nghiệm với Next.js và Vite.

```typescript
'use client'
import { useSharedState } from 'state-in-url';

export const someState = { name: '' };

function SettingsComponent() {
  const { state, setState } = useSharedState(someState);
}
```

[Tài liệu API](packages/urlstate/useSharedState/README.vi.md)

### Hook `useLinkProps` cho React.js

Hook mang trạng thái sang một liên kết trỏ tới route khác, ví dụ bộ chuyển ngôn ngữ. `setUrl` luôn ghi vào đường dẫn hiện tại, hook này thì không.

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

Phần đánh dấu vẫn giữ `href` nguyên bản, nên trình thu thập dữ liệu và `hreflang` thấy URL chuẩn tắc; trạng thái được đọc lúc nhấp chuột.

[Tài liệu API](packages/urlstate/useLinkProps/README.vi.md)

### Hook `useUrlEncode` cho React.js

[Tài liệu API](packages/urlstate/useUrlEncode/README.vi.md)

### Helper `encodeState` và `decodeState`

[Tài liệu API](packages/urlstate/encodeState/README.vi.md)

### Helper `encode` và `decode`

[Tài liệu API](packages/urlstate/encoder/README.vi.md)

## Thực hành tốt

- Định nghĩa hình dạng state của bạn là một hằng số
- Dùng TypeScript để tăng an toàn kiểu và tự hoàn thành
- Tránh lưu thông tin nhạy cảm trong tham số URL (SSN, khóa API, v.v.)
- Dùng [extension](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors) này để có lỗi TS dễ đọc

Bạn có thể tạo các state hook cho từng phần của state và tái sử dụng chúng trong toàn ứng dụng. Ví dụ:
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

  // logic khác

  // đặt lại tham số truy vấn khi điều hướng sang trang khác
  React.useEffect(() => {
    return reset
  }, [])

  return { userState: urlState, setUserState: setUrl };;
}

```

## Lưu ý

1. Chỉ có thể truyền các giá trị tuần tự hóa được; `Function`, `BigInt` hoặc `Symbol` sẽ không hoạt động, và có lẽ cả những thứ như `ArrayBuffer` cũng vậy. Mọi thứ có thể tuần tự hóa thành JSON sẽ hoạt động.
2. Máy chủ Vercel giới hạn kích thước header (chuỗi truy vấn và những thứ khác) ở **14KB**, vì vậy hãy giữ state trong URL dưới ~5000 từ. <https://vercel.com/docs/errors/URL_TOO_LONG>
3. Đã thử nghiệm với `next.js` 14/15/16 với app router, không có kế hoạch hỗ trợ pages.

## Khác

### Đóng góp và/hoặc chạy cục bộ

Xem [tài liệu đóng góp](CONTRIBUTING.md)

## Lộ trình

- [x] hook cho `Next.js`
- [x] hook cho `react-router`
- [x] hook cho `remix`
- [ ] hook cho `svelte`
- [x] hook cho `astro`
- [ ] hook để lưu state trong hash ?

## Liên hệ & Hỗ trợ

- Tạo một [GitHub issue](https://github.com/asmyshlyaev177/state-in-url/issues) cho báo cáo lỗi, yêu cầu tính năng hoặc câu hỏi

## [Changelog](CHANGELOG.md)

## Được nhắc đến

 - [This Week in React 209](https://thisweekinreact.com/newsletter/209)
 - [JavaScript Weekly](https://javascriptweekly.com/issues/741)
 - [This Week in React 240](https://thisweekinreact.com/newsletter/240)

## Giấy phép

Dự án này được cấp phép theo [giấy phép MIT](LICENSE).

## Thuê tôi

Tôi là **Aleksandr Smyshliaev** — tác giả và người bảo trì duy nhất của thư viện này.
Kỹ sư frontend cấp cao (React / Next.js / TypeScript, hơn 8 năm), và **sẵn sàng cho công việc remote toàn thời gian ngay bây giờ**.

Thư viện này là phiên bản ngắn gọn của những gì tôi giỏi: một API có kiểu trên một nguyên thủy trình duyệt lộn xộn, không phụ thuộc và ổn định trên Next.js, Remix và React Router qua nhiều phiên bản React chính.

- **Giỏi nhất ở** — thư viện component, quản lý state và bộ test sống sót qua refactor.
- **Cũng là của tôi** —
  [react-horizontal-scrolling-menu](https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu)
  (~84k lượt cài mỗi tuần),
  [test-proxy-recorder](https://github.com/asmyshlyaev177/test-proxy-recorder)
  (ghi/phát lại cho Playwright),
  [llm-queue](https://github.com/asmyshlyaev177/llm-queue).
- **Ở đâu** — Tbilisi, Georgia (GMT+4), trùng hoàn toàn với CET. Đã đăng ký thực thể nhà thầu, nên hợp đồng B2B không cần thiết lập employer-of-record.
- **Liên hệ tôi** — [asmyshlyaev177.dev](https://asmyshlyaev177.dev) ·
  [asmyshlyaev177@gmail.com](mailto:asmyshlyaev177@gmail.com) ·
  [LinkedIn](https://linkedin.com/in/asmyshlyaev177) · Telegram @asmyshlyaev177

## Cảm hứng

[NUQS](https://github.com/47ng/nuqs)

[Dùng URL để lưu state trong Vue](https://dev.to/jacobandrewsky/using-url-to-store-state-in-vue-275c)

[Lưu state trong URL](https://antonz.org/storing-state/)

[NextJS useSearchParams](https://nextjs.org/docs/app/api-reference/functions/use-search-params)
