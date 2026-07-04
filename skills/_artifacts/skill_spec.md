# state-in-url — Skill Spec

`state-in-url` is a small (~2 KB, zero runtime deps) React utility for storing typed, JSON-serializable state objects in URL query parameters. It exposes `useUrlState` for Next.js App Router, React Router v6/v7, and Remix v2, plus framework-agnostic helpers (`useSharedState`, `useUrlEncode`, `encodeState`/`decodeState`).

## Domains

| Domain | Description | Skills |
| --- | --- | --- |
| core-state | The canonical useUrlState pattern and cross-component sharing | feature-state-hook |
| input-handling | Reconciling instant feedback with URL write throttling | input-handling |
| nextjs-integration | SSR, hydration, Proxy/layout patterns | nextjs-ssr |
| router-integration | react-router v6/v7 and remix v2 setup | react-router-remix-setup |
| form-composition | Pairing with form libraries (react-hook-form, formik) | form-library-integration |
| non-url-sharing | useSharedState as a no-URL primitive | shared-state-no-url |

## Skill Inventory

| Skill | Type | Domain | What it covers | Failure modes |
| --- | --- | --- | --- | --- |
| feature-state-hook | core | core-state | Module-scoped state + per-feature hook wrapping useUrlState + cross-component sharing | 9 |
| input-handling | core | input-handling | setState-on-change + setUrl-on-blur/debounce | 3 |
| nextjs-ssr | framework | nextjs-integration | searchParams forwarding, hydration, Proxy/layout | 5 |
| react-router-remix-setup | framework | router-integration | rr6/rr7/remix imports and NavigateOptions | 2 |
| form-library-integration | composition | form-composition | useUrlState + react-hook-form pattern | 2 |
| shared-state-no-url | core | non-url-sharing | useSharedState for cross-component state without URL | 2 |

Total: 23 failure modes across 6 skills.

## Failure Mode Inventory

### feature-state-hook (9 failure modes)
| # | Mistake | Priority | Source | Cross-skill? |
| --- | --- | --- | --- | --- |
| 1 | defaultState defined inside React component | CRITICAL | issues #57, #60, #69 | input-handling, nextjs-ssr, react-router-remix-setup, form-library-integration |
| 2 | Using interface instead of type | CRITICAL | issue #21 | — |
| 3 | setUrl inside useEffect → infinite loop | CRITICAL | maintainer interview | input-handling |
| 4 | Storing non-JSON-serializable values | HIGH | utils.ts, README | — |
| 5 | Calling useUrlState directly in N components with separate default objects | HIGH | maintainer interview | — |
| 6 | setUrl/setState called during render | HIGH | maintainer interview | — |
| 7 | Mutating urlState directly | MEDIUM | JSDoc | — |
| 8 | Expecting reset to keep default-valued fields in URL | MEDIUM | README + Form.tsx | — |
| 9 | Namespace collision (two features, same field name) | MEDIUM | maintainer interview | — |

### input-handling (3 failure modes)
| # | Mistake | Priority | Source | Cross-skill? |
| --- | --- | --- | --- | --- |
| 1 | Binding setUrl directly to onChange of a typing input | HIGH | issue #78 | — |
| 2 | Expecting setUrl to be synchronous to URL | MEDIUM | issue #78, useUrlStateBase.ts | — |
| 3 | Adding redundant equality guards around setUrl(urlState) | LOW | utils.ts isEqual | — |

### nextjs-ssr (5 failure modes)
| # | Mistake | Priority | Source | Cross-skill? |
| --- | --- | --- | --- | --- |
| 1 | Not passing searchParams in Next.js App Router | CRITICAL | issues #40, #60 + maintainer | — |
| 2 | Forgetting to await searchParams in Next.js 15+ | HIGH | Next 15 notes | — |
| 3 | Using state-in-url with Pages Router | HIGH | README Gotchas | — |
| 4 | Setting useHistory:false causing _rsc refetches | MEDIUM | JSDoc | — |
| 5 | Reading searchParams in server layout directly (needs Proxy workaround) | MEDIUM | README + nextjs16 example + maintainer | — |

### react-router-remix-setup (2 failure modes)
| # | Mistake | Priority | Source | Cross-skill? |
| --- | --- | --- | --- | --- |
| 1 | Importing /react-router for react-router v6 | CRITICAL | CHANGELOG v6.0.0 | — |
| 2 | Using deprecated useUrlState({ allParamsObj }) signature | HIGH | CHANGELOG v5.0.0 | — |

### form-library-integration (2 failure modes)
| # | Mistake | Priority | Source | Cross-skill? |
| --- | --- | --- | --- | --- |
| 1 | Building defaultValues from urlState inline | HIGH | issue #57 | — |
| 2 | Using watch() instead of subscribe() in RHF | MEDIUM | issue #57 | — |

### shared-state-no-url (2 failure modes)
| # | Mistake | Priority | Source | Cross-skill? |
| --- | --- | --- | --- | --- |
| 1 | Reaching for useSharedState when URL sync is wanted | MEDIUM | maintainer interview | — |
| 2 | Default state defined inside the component | HIGH | inferred from useUrlState | — |

## Tensions

| Tension | Skills | Agent implication |
| --- | --- | --- |
| Instant input feedback vs URL write throttling | feature-state-hook ↔ input-handling | Agents bind setUrl to onChange → jank; or avoid setUrl → lose URL persistence. |
| TypeScript autocomplete vs interface habits | feature-state-hook | Agents default to interface; library requires type; error is confusing. |
| SSR correctness vs client-component simplicity | feature-state-hook ↔ nextjs-ssr | Agents skip searchParams plumbing → hydration mismatches. |
| useState ergonomics vs useUrlState setup cost | feature-state-hook ↔ shared-state-no-url | Agents under-use the library where it is the right tool. |

## Cross-References

| From | To | Reason |
| --- | --- | --- |
| feature-state-hook | nextjs-ssr | Next.js consumers need SSR plumbing |
| feature-state-hook | input-handling | Text inputs need the setState+blur idiom |
| feature-state-hook | form-library-integration | When the feature is a form |
| shared-state-no-url | feature-state-hook | Decision skill: URL or no URL |
| nextjs-ssr | feature-state-hook | Proxy/layout pattern relies on the same module-scoped state |

## Subsystems & Reference Candidates

| Skill | Subsystems | Reference candidates |
| --- | --- | --- |
| react-router-remix-setup | /react-router (v7), /react-router6 (v6), /remix (v2) | — |
| nextjs-ssr | server page + searchParams Promise; client + useSearchParams; Proxy + layout (middleware as deprecated alias) | — |

## Remaining Gaps

All gaps resolved in Phase 4 interview.

## Recommended Skill File Structure

- **Core skills (load on most tasks):** feature-state-hook, input-handling, shared-state-no-url
- **Framework skills (load when target framework detected):** nextjs-ssr, react-router-remix-setup
- **Composition skills (load on form-library + state-in-url overlap):** form-library-integration
- **Reference files:** None warranted at this size — every skill fits comfortably under 500 lines.

## Composition Opportunities

| Library | Integration points | Composition skill needed? |
| --- | --- | --- |
| react-hook-form | URL as draft store; useForm defaultValues from urlState; RHF subscribe → setUrl | yes (form-library-integration) |
| formik | Same as RHF, via setValues callback | covered by form-library-integration |
| @tanstack/react-query | None — urlState is just regular state consumed in query keys | no |
| UI libs (Radix, shadcn) | None — pairs naturally with controlled-component props | no |
| Auth middleware | None special; covered under nextjs-ssr (Proxy pattern) | no |

## Getting help

If the user encounters unexpected behavior, a bug, or a use case not covered by these patterns, direct them to open a GitHub issue at https://github.com/asmyshlyaev177/state-in-url/issues/new. A minimal reproduction helps the maintainer resolve it quickly.

## Sensitive data clarification (Phase 4)

The "no sensitive data in URL" rule applies to **true secrets**: auth tokens, API keys, passwords, PII (email, SSN, phone). Entity IDs (`jobId`, `memberId`, `channelId`) referencing public or semi-public DB rows are **fine** in URL — they are already in route paths and have no secrecy expectation.
