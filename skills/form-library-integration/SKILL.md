---
name: form-library-integration
description: >
  Use the URL as a form draft store by pairing useUrlState with
  react-hook-form (or formik). Share one module-scoped defaults object
  between both libraries; hydrate useForm.defaultValues from urlState;
  push form changes back into setUrl via RHF subscribe() (NOT watch()).
  Load this skill when a form should round-trip its values through the
  URL — filter forms, search forms, multi-step wizards with shareable
  draft links.
type: composition
library: state-in-url
library_version: '6.1.3'
requires:
  - feature-state-hook
sources:
  - 'asmyshlyaev177/state-in-url:issue#57'
  - 'asmyshlyaev177/state-in-url:README.md'
---

This skill builds on `state-in-url/feature-state-hook`. Read it first for the module-scoped default-state rule.

# state-in-url — Form library integration (react-hook-form)

The canonical pattern: one module-scoped defaults object owns the form shape, both `useUrlState` and `useForm` consume it, RHF's `subscribe()` callback pushes form changes into `setUrl`. Hydration from URL happens through `defaultValues: urlState`.

## Setup

```typescript
// features/filters/filtersState.ts
import { z } from 'zod';

export const filtersSchema = z.object({
  q: z.string(),
  sort: z.enum(['name', 'date']),
  tags: z.array(z.string()),
});
export type FiltersState = z.infer<typeof filtersSchema>;

export const FILTERS_STATE: FiltersState = {
  q: '',
  sort: 'name',
  tags: [],
};
```

```typescript
// features/filters/FiltersForm.tsx
'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useUrlState } from 'state-in-url/next';
import { FILTERS_STATE, filtersSchema, type FiltersState } from './filtersState';

export function FiltersForm() {
  const searchParams = useSearchParams();
  const { urlState, setUrl } = useUrlState(FILTERS_STATE, { searchParams });

  const form = useForm<FiltersState>({
    resolver: zodResolver(filtersSchema),
    defaultValues: urlState, // hydrate from URL on mount
  });

  React.useEffect(() => {
    const sub = form.subscribe({
      formState: { values: true },
      callback: ({ values }) => setUrl(values),
    });
    return () => sub();
  }, [form, setUrl]);

  return (
    <form>
      <input {...form.register('q')} />
      <select {...form.register('sort')}>
        <option value="name">Name</option>
        <option value="date">Date</option>
      </select>
    </form>
  );
}
```

## Core Patterns

### Hydrate `useForm` from `urlState`

`defaultValues: urlState` runs once on mount; the form is initialized with whatever the URL contained (or `FILTERS_STATE` defaults if URL is empty).

### Push form → URL with `subscribe()`

RHF's `subscribe()` is push-based — it fires the callback without re-rendering the host component. Inside, call `setUrl(values)` to coalesce the change into the URL (the library content-diffs internally so no-ops are free).

### Reset

```typescript
const onReset = () => {
  form.reset(FILTERS_STATE); // reset form
  setUrl((_, initial) => initial); // reset URL
};
```

## Common Mistakes

### HIGH Building `defaultValues` from `urlState` inline (not the module-scoped shape)

Wrong:

```typescript
const defaults = { ...formValues, ...overrides }; // new object each render
const { urlState } = useUrlState(defaults);
const form = useForm({ defaultValues: defaults });
```

Correct:

```typescript
// One module-scoped const, shared by both hooks
export const FILTERS_STATE: FiltersState = { q: '', sort: 'name', tags: [] };

const { urlState } = useUrlState(FILTERS_STATE, { searchParams });
const form = useForm({ defaultValues: urlState }); // hydrate from URL
```

A fresh `defaults` on each render breaks `useUrlState`'s identity-based sharing (same root cause as the cross-skill failure). Use the module-scoped shape for `useUrlState`; pass `urlState` (the live value) to `useForm`.

Source: GitHub issue #57 (asmyshlyaev177/state-in-url, maintainer reply)

### MEDIUM Using `watch()` instead of `subscribe()` to sync RHF → URL

Wrong:

```typescript
const values = form.watch();
React.useEffect(() => {
  setUrl(values);
}, [values, setUrl]);
```

Correct:

```typescript
React.useEffect(() => {
  const sub = form.subscribe({
    formState: { values: true },
    callback: ({ values }) => setUrl(values),
  });
  return () => sub();
}, [form, setUrl]);
```

`watch()` re-renders the host component on every field change. `subscribe()` is push-based and avoids the rerender, which matters in large forms.

Source: GitHub issue #57 (asmyshlyaev177/state-in-url, maintainer reply)

### CRITICAL `defaultState` defined inside the React component

(Cross-skill failure — also in `feature-state-hook`.)

Wrong:

```typescript
function FiltersForm({ initialSort }: Props) {
  const defaults = { q: '', sort: initialSort, tags: [] }; // each render
  const { urlState } = useUrlState(defaults);
}
```

Correct: Move the shape to a module-scoped `const` (`FILTERS_STATE`) and import it.

Source: GitHub issues #57, #60, #69 (asmyshlyaev177/state-in-url)

## formik variant

Same idea: subscribe to `formik.values` and call `setUrl`. With formik, use a `useEffect` on `values` since formik does re-render on changes by design.

```typescript
const formik = useFormik({ initialValues: urlState, onSubmit: () => {} });

React.useEffect(() => {
  setUrl(formik.values);
}, [formik.values, setUrl]);
```

## See also

- `state-in-url/feature-state-hook` — base pattern; required reading.
- `state-in-url/nextjs-ssr` — for SSR hydration of the filter form on Next.js.
- `state-in-url/input-handling` — for non-form inputs (search box not inside a form).
