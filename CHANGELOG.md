# [5.2.0](https://github.com/asmyshlyaev177/state-in-url/compare/v5.1.0...v5.2.0) (2025-07-21)


### Features

* better reset, now `setState` and `setUrl` pass `initialState` as second parameter to func ([2ad795b](https://github.com/asmyshlyaev177/state-in-url/commit/2ad795b656f71d4ab7eeb325f9947887197bb520))

# [5.1.0](https://github.com/asmyshlyaev177/state-in-url/compare/v5.0.0...v5.1.0) (2025-06-19)


### Features

* **rollup:** enable CJS output ([bde2bf1](https://github.com/asmyshlyaev177/state-in-url/commit/bde2bf196d6042f0ec952b06fc788a6caf618700))

# [5.0.0](https://github.com/asmyshlyaev177/state-in-url/compare/v4.3.3...v5.0.0) (2025-06-16)


### Code Refactoring

* remove deprecated params format ([bd24bf9](https://github.com/asmyshlyaev177/state-in-url/commit/bd24bf95b30a9ed62ad9a4436cac3dbd08fb5d8a))


### Features

* **remix:** example for remix@2 with SSR ([8f0bd48](https://github.com/asmyshlyaev177/state-in-url/commit/8f0bd48d2d370754793c7ea112ddcec6c6c11635))


### BREAKING CHANGES

* old format `useUrlState(allParamsObj)` is removed. Use format described in a
documentation, it uses new format for a while.

## [4.3.3](https://github.com/asmyshlyaev177/state-in-url/compare/v4.3.2...v4.3.3) (2025-06-07)


### Bug Fixes

* **useurlstatebase:** fix possible empty upd issue ([e87f091](https://github.com/asmyshlyaev177/state-in-url/commit/e87f091e92e3e254f9bea810ef188f7909c95807)), closes [#57](https://github.com/asmyshlyaev177/state-in-url/issues/57)

## [4.3.2](https://github.com/asmyshlyaev177/state-in-url/compare/v4.3.1...v4.3.2) (2025-05-14)


### Bug Fixes

* fix basename for react-router, second try ([38d8c3f](https://github.com/asmyshlyaev177/state-in-url/commit/38d8c3f024ddef827146db39e33f12f4c581a236)), closes [#52](https://github.com/asmyshlyaev177/state-in-url/issues/52)

## [4.3.1](https://github.com/asmyshlyaev177/state-in-url/compare/v4.3.0...v4.3.1) (2025-05-09)


### Bug Fixes

* use `basename` for react-router ([ef0e90a](https://github.com/asmyshlyaev177/state-in-url/commit/ef0e90ae9095f9519cd816a689f7b87436c41a8f)), closes [#52](https://github.com/asmyshlyaev177/state-in-url/issues/52)

# [4.3.0](https://github.com/asmyshlyaev177/state-in-url/compare/v4.2.1...v4.3.0) (2025-04-04)


### Bug Fixes

* bump version ([deefa45](https://github.com/asmyshlyaev177/state-in-url/commit/deefa45e506e2bacdd35f096ef1d1a555c020a77))


### Features

* another bump ([048b7f7](https://github.com/asmyshlyaev177/state-in-url/commit/048b7f7d86364b6fe7b446ebbe1a7b88162de906))
* bump version ([07fa148](https://github.com/asmyshlyaev177/state-in-url/commit/07fa1484b8684453aff6c2671fd5998073096dfa))

# [4.2.0](https://github.com/asmyshlyaev177/state-in-url/compare/v4.1.17...v4.2.0) (2025-04-04)


### Features

* another bump ([048b7f7](https://github.com/asmyshlyaev177/state-in-url/commit/048b7f7d86364b6fe7b446ebbe1a7b88162de906))
* bump version ([07fa148](https://github.com/asmyshlyaev177/state-in-url/commit/07fa1484b8684453aff6c2671fd5998073096dfa))

# [4.2.0](https://github.com/asmyshlyaev177/state-in-url/compare/v4.1.17...v4.2.0) (2025-04-04)


### Features

* bump version ([07fa148](https://github.com/asmyshlyaev177/state-in-url/commit/07fa1484b8684453aff6c2671fd5998073096dfa))

## [4.1.17](https://github.com/asmyshlyaev177/state-in-url/compare/v4.1.16...v4.1.17) (2025-04-04)


### Bug Fixes

* bump version ([a61d83e](https://github.com/asmyshlyaev177/state-in-url/commit/a61d83ec9dafac52f19fd3ed554268dd1d6ef60f))

## [4.1.16](https://github.com/asmyshlyaev177/state-in-url/compare/v4.1.15...v4.1.16) (2025-04-04)


### Bug Fixes

* bump version, yarn not always correctly resolve it ([46308bc](https://github.com/asmyshlyaev177/state-in-url/commit/46308bcf3e771701eea29543632b2fbbafcf201d))

## [4.1.15](https://github.com/asmyshlyaev177/state-in-url/compare/v4.1.14...v4.1.15) (2025-04-04)


### Bug Fixes

* fix ci/cd cache issue ([152749d](https://github.com/asmyshlyaev177/state-in-url/commit/152749d188c0a836e633d73765cbdc72d3a31bd3))

## [4.1.14](https://github.com/asmyshlyaev177/state-in-url/compare/v4.1.13...v4.1.14) (2025-04-04)


### Bug Fixes

* fix esbuild minification bug ([dc8112d](https://github.com/asmyshlyaev177/state-in-url/commit/dc8112d982e12a7ace6dad26e456c86bffa0c790))

## [4.1.13](https://github.com/asmyshlyaev177/state-in-url/compare/v4.1.12...v4.1.13) (2025-04-04)


### Bug Fixes

* fix parsing qs params on the client ([c71d690](https://github.com/asmyshlyaev177/state-in-url/commit/c71d690afa6ffe143c29d71adf495916d0641c1b))

## [4.1.12](https://github.com/asmyshlyaev177/state-in-url/compare/v4.1.11...v4.1.12) (2025-04-04)


### Bug Fixes

* update rollup and esbuild ([03e865b](https://github.com/asmyshlyaev177/state-in-url/commit/03e865be356192e0f509f004758bed6f268f9a62))

## [4.1.11](https://github.com/asmyshlyaev177/state-in-url/compare/v4.1.10...v4.1.11) (2025-04-01)


### Bug Fixes

* fix loops ([6d61a7d](https://github.com/asmyshlyaev177/state-in-url/commit/6d61a7d1697236fffa67c6bd1932f8dbb4223e79))

## [4.1.10](https://github.com/asmyshlyaev177/state-in-url/compare/v4.1.9...v4.1.10) (2025-01-30)


### Bug Fixes

* setState in 'reset' ([b376aa3](https://github.com/asmyshlyaev177/state-in-url/commit/b376aa3315a5bfabf739798c364cbfce43d37c37))

## [4.1.9](https://github.com/asmyshlyaev177/state-in-url/compare/v4.1.8...v4.1.9) (2025-01-30)


### Bug Fixes

* reset state independent from URL in 'reset' cb ([9392a19](https://github.com/asmyshlyaev177/state-in-url/commit/9392a19b3863bc73469ceaf32ae5aa686b5845c5))

## [4.1.8](https://github.com/asmyshlyaev177/state-in-url/compare/v4.1.7...v4.1.8) (2024-12-10)


### Bug Fixes

* fix bug with state out of sync with useHistory: true ([072712f](https://github.com/asmyshlyaev177/state-in-url/commit/072712f358c4cd8ddd9bcaa91133673bb35da2e0))

## [4.1.7](https://github.com/asmyshlyaev177/state-in-url/compare/v4.1.6...v4.1.7) (2024-11-28)


### Bug Fixes

* bump version ([c0bc971](https://github.com/asmyshlyaev177/state-in-url/commit/c0bc971e5a58b88f17d50523ecc1683406b11bce))

## [4.1.6](https://github.com/asmyshlyaev177/state-in-url/compare/v4.1.5...v4.1.6) (2024-11-26)


### Bug Fixes

* update description, bump ([be080bf](https://github.com/asmyshlyaev177/state-in-url/commit/be080bf154d700ff037910ca82b3b00a395afb58))

## [4.1.5](https://github.com/asmyshlyaev177/state-in-url/compare/v4.1.4...v4.1.5) (2024-11-24)


### Bug Fixes

* fix JSDoc tooltips ([5fd9675](https://github.com/asmyshlyaev177/state-in-url/commit/5fd967540017f6b01babcb89f8c3464c6f805412))

## [4.1.4](https://github.com/asmyshlyaev177/state-in-url/compare/v4.1.3...v4.1.4) (2024-11-24)


### Bug Fixes

* minor fixes, works for react-router@7 as well ([2993f9a](https://github.com/asmyshlyaev177/state-in-url/commit/2993f9a62fd30a9f332ba8d8ba6c8edf1a7986c3))

## [4.1.3](https://github.com/asmyshlyaev177/state-in-url/compare/v4.1.2...v4.1.3) (2024-11-21)


### Bug Fixes

* use esbuild instead of terser ([59226b0](https://github.com/asmyshlyaev177/state-in-url/commit/59226b02d654067e858eae6333bf95dc79595ae2))

## [4.1.2](https://github.com/asmyshlyaev177/state-in-url/compare/v4.1.1...v4.1.2) (2024-11-20)


### Bug Fixes

* fix history pushState/replaceState rate limits ([35d1398](https://github.com/asmyshlyaev177/state-in-url/commit/35d139843e8824f217cf59edbebbfada5c792b53))

## [4.1.1](https://github.com/asmyshlyaev177/state-in-url/compare/v4.1.0...v4.1.1) (2024-11-18)


### Bug Fixes

* bump after refactor ([1aca296](https://github.com/asmyshlyaev177/state-in-url/commit/1aca2965a7571e32829d471b709c33d7b013ec6f))

# [4.1.0](https://github.com/asmyshlyaev177/state-in-url/compare/v4.0.9...v4.1.0) (2024-11-15)


### Features

* **useurlstate:** return `reset` cb from `useUrlState`, it can reset state and URL to default ([68fc693](https://github.com/asmyshlyaev177/state-in-url/commit/68fc69347be80d511232e5805207734d2865b54a))

## [4.0.9](https://github.com/asmyshlyaev177/state-in-url/compare/v4.0.8...v4.0.9) (2024-11-14)


### Bug Fixes

* fix `setUrl` options as second argument ([2347850](https://github.com/asmyshlyaev177/state-in-url/commit/2347850a4d34bbcf418632b6e45dac3aeff6ceb2))

## [4.0.8](https://github.com/asmyshlyaev177/state-in-url/compare/v4.0.7...v4.0.8) (2024-11-13)


### Performance Improvements

* minor performance improvements, regex in replaceAll ([b89406d](https://github.com/asmyshlyaev177/state-in-url/commit/b89406dc27c70ca6ec9d59ffbcb6475fc6ee31a6))

## [4.0.7](https://github.com/asmyshlyaev177/state-in-url/compare/v4.0.6...v4.0.7) (2024-11-10)


### Bug Fixes

* fix single quote encoding ([8e768b6](https://github.com/asmyshlyaev177/state-in-url/commit/8e768b63d6628db6a9296a1cb02c26f3b10e2182))

## [4.0.6](https://github.com/asmyshlyaev177/state-in-url/compare/v4.0.5...v4.0.6) (2024-11-10)


### Bug Fixes

* use first argument for `defaultState` and second as object with other options ([b896d5f](https://github.com/asmyshlyaev177/state-in-url/commit/b896d5f0bc7b33ba036612a5dada69315609fb2c))

## [4.0.5](https://github.com/asmyshlyaev177/state-in-url/compare/v4.0.4...v4.0.5) (2024-11-09)


### Bug Fixes

* return urlState as normal type, not readonly ([a0aa6dd](https://github.com/asmyshlyaev177/state-in-url/commit/a0aa6dd458c120a4457ceb1e4c29c7b5f228705e))

## [4.0.4](https://github.com/asmyshlyaev177/state-in-url/compare/v4.0.3...v4.0.4) (2024-11-07)


### Bug Fixes

* minor refactor ([7a10939](https://github.com/asmyshlyaev177/state-in-url/commit/7a109397d78aed14b88c618be4377849307c9aa8))

## [4.0.3](https://github.com/asmyshlyaev177/state-in-url/compare/v4.0.2...v4.0.3) (2024-11-06)


### Bug Fixes

* **readme:** typo ([d4b0eed](https://github.com/asmyshlyaev177/state-in-url/commit/d4b0eedc42b4bb215f8b748506d314195fa7da61))

## [4.0.2](https://github.com/asmyshlyaev177/state-in-url/compare/v4.0.1...v4.0.2) (2024-11-03)


### Bug Fixes

* update tags and description ([56c634c](https://github.com/asmyshlyaev177/state-in-url/commit/56c634cc8a4553c1750ce937c3fe0a6cf3d1eaf1))

## [4.0.1](https://github.com/asmyshlyaev177/state-in-url/compare/v4.0.0...v4.0.1) (2024-11-02)


### Bug Fixes

* fix JSDoc ([621c436](https://github.com/asmyshlyaev177/state-in-url/commit/621c436eee19c8bd5233a4b7e59cfcaa47ed36e5))

# [4.0.0](https://github.com/asmyshlyaev177/state-in-url/compare/v3.1.0...v4.0.0) (2024-11-02)


### Features

* `useHistory` option to use native window.history instead of Next.js router, true by default ([6cb1a41](https://github.com/asmyshlyaev177/state-in-url/commit/6cb1a41ee1ab43e9a9c2b0e18f85d40054a60405))


### BREAKING CHANGES

* For Next.js, `useUrlState` hook will use `window.history` for navigation by
default, to opt out pass `useUrlState({ useHistory: false })`

# [3.1.0](https://github.com/asmyshlyaev177/state-in-url/compare/v3.0.7...v3.1.0) (2024-11-02)


### Features

* rename APIs, keep old ones for backward compatibility ([a4be099](https://github.com/asmyshlyaev177/state-in-url/commit/a4be099e62b9b90f94fc9bbcf2769ae3cf80c610))


### Performance Improvements

* way faster URL updates, can use `updateUrl` by default ([1920de8](https://github.com/asmyshlyaev177/state-in-url/commit/1920de810b4f549c9496d62eb7297edce57700c1))

## [3.0.7](https://github.com/asmyshlyaev177/state-in-url/compare/v3.0.6...v3.0.7) (2024-10-29)


### Bug Fixes

* update vercel domain ([2f4e0fc](https://github.com/asmyshlyaev177/state-in-url/commit/2f4e0fc2e9cb56d30d9163970a712a725b910e43))

## [3.0.6](https://github.com/asmyshlyaev177/state-in-url/compare/v3.0.5...v3.0.6) (2024-10-27)


### Bug Fixes

* minor fix ([2978d82](https://github.com/asmyshlyaev177/state-in-url/commit/2978d82bee9a3cb063972adfd7e8809a509bca73))

## [3.0.5](https://github.com/asmyshlyaev177/state-in-url/compare/v3.0.4...v3.0.5) (2024-10-22)


### Bug Fixes

* update description ([9aaefdb](https://github.com/asmyshlyaev177/state-in-url/commit/9aaefdbc8373cd1a6b8ba7c430ea99f7053d2de6))

## [3.0.4](https://github.com/asmyshlyaev177/state-in-url/compare/v3.0.3...v3.0.4) (2024-10-16)


### Bug Fixes

* update sitemap and description ([c68d45e](https://github.com/asmyshlyaev177/state-in-url/commit/c68d45e71ed6debf5977c2bc28d2fe6a8b3530b5))

## [3.0.3](https://github.com/asmyshlyaev177/state-in-url/compare/v3.0.2...v3.0.3) (2024-10-12)


### Bug Fixes

* test release ([404d942](https://github.com/asmyshlyaev177/state-in-url/commit/404d94237e635d2dc0e31e2e32369f963f2e249a))

## [3.0.1](https://github.com/asmyshlyaev177/state-in-url/compare/v3.0.0...v3.0.1) (2024-10-01)


### Bug Fixes

* fix ts types ([e07340c](https://github.com/asmyshlyaev177/state-in-url/commit/e07340c7dfd3a59b159501ba205e050616f89c00))

# [3.0.0](https://github.com/asmyshlyaev177/state-in-url/compare/v2.6.0...v3.0.0) (2024-09-30)


### Code Refactoring

* **useurlstate:** remove deprecated things ([87c8c7c](https://github.com/asmyshlyaev177/state-in-url/commit/87c8c7c995c5cd7d9e7aa039c30bfe64b24abe4b))


### Features

* **useurlstate:** useUrlState hook for react-router@6 ([1c7cd02](https://github.com/asmyshlyaev177/state-in-url/commit/1c7cd0227a261dd7594f63cada63a73808df90d2))


### BREAKING CHANGES

* **useurlstate:** 1. `useUrlState` for Next.js now accept only object, eg. `useUrlState({
defaultState: {}})`
 2. urls encoded with versions prior to v2.3.0 could stop working

# [2.6.0](https://github.com/asmyshlyaev177/state-in-url/compare/v2.5.2...v2.6.0) (2024-09-19)


### Bug Fixes

* fix gh action ([0f0962f](https://github.com/asmyshlyaev177/state-in-url/commit/0f0962fcad12f3a38cf809c3a011d6c212f12d5e))


### Features

* keywords update ([4d5db66](https://github.com/asmyshlyaev177/state-in-url/commit/4d5db66b368f2716a2e30d0a4269542c9715b4c8))

## [2.5.2](https://github.com/asmyshlyaev177/state-in-url/compare/v2.5.1...v2.5.2) (2024-09-09)


### Bug Fixes

* trigger release ([db2eea1](https://github.com/asmyshlyaev177/state-in-url/commit/db2eea12dad8f9d8ef03fb5619862e01bdafd309))

## [2.5.1](https://github.com/asmyshlyaev177/state-in-url/compare/v2.5.0...v2.5.1) (2024-09-09)


### Bug Fixes

* semantic-release config ([659e605](https://github.com/asmyshlyaev177/state-in-url/commit/659e6050d89dd38cb6cfa952d5c1d746e69d7c56))

## [2.5.1](https://github.com/asmyshlyaev177/state-in-url/compare/v2.5.0...v2.5.1) (2024-09-09)


### Bug Fixes

* semantic-release config ([659e605](https://github.com/asmyshlyaev177/state-in-url/commit/659e6050d89dd38cb6cfa952d5c1d746e69d7c56))

## [2.5.1](https://github.com/asmyshlyaev177/state-in-url/compare/v2.5.0...v2.5.1) (2024-09-09)


### Bug Fixes

* semantic-release config ([659e605](https://github.com/asmyshlyaev177/state-in-url/commit/659e6050d89dd38cb6cfa952d5c1d746e69d7c56))

# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.4.1](https://github.com/asmyshlyaev177/state-in-url/compare/v2.2.5...v2.4.1) (2024-09-08)


### Features

* improve encoder algo, smaller URI strings and less complexity ([193e8c7](https://github.com/asmyshlyaev177/state-in-url/commit/193e8c74da74cfde4032c5b7beecfff5b1e4a487))
* provenance test ([111e096](https://github.com/asmyshlyaev177/state-in-url/commit/111e096ba134a6797d4bddc4ba9628b997f83345))
* semantic release ([235b422](https://github.com/asmyshlyaev177/state-in-url/commit/235b422023e55597a8520a016135d6106806589d))
* test release ([8c56246](https://github.com/asmyshlyaev177/state-in-url/commit/8c56246e08fd15fe7b71260336555a2764ebe5bf))

## [2.4.0](https://github.com/asmyshlyaev177/state-in-url/compare/v2.2.5...v2.4.0) (2024-09-08)


### Features

* improve encoder algo, smaller URI strings and less complexity ([193e8c7](https://github.com/asmyshlyaev177/state-in-url/commit/193e8c74da74cfde4032c5b7beecfff5b1e4a487))
* semantic release ([235b422](https://github.com/asmyshlyaev177/state-in-url/commit/235b422023e55597a8520a016135d6106806589d))
* test release ([8c56246](https://github.com/asmyshlyaev177/state-in-url/commit/8c56246e08fd15fe7b71260336555a2764ebe5bf))

### Changelog

All notable changes to this project will be documented in this file. Dates are displayed in UTC.

Generated by [`auto-changelog`](https://github.com/CookPete/auto-changelog).

#### [v2.3.0](https://github.com/asmyshlyaev177/state-in-url/compare/v2.3.0...v2.3.0)

- ci: semantic-release config [`7aa63ab`](https://github.com/asmyshlyaev177/state-in-url/commit/7aa63ab332c96451c86e087181becaac674bbfd3)
- refactor: refactor common components [`17ca72f`](https://github.com/asmyshlyaev177/state-in-url/commit/17ca72fb5ec782b633b329f889583073d2f37886)
- ci: release-it [`84165ba`](https://github.com/asmyshlyaev177/state-in-url/commit/84165ba32136156f82dbd58445648e3f62cc100d)

#### [v2.3.0](https://github.com/asmyshlyaev177/state-in-url/compare/v2.2.5...v2.3.0)

> 6 September 2024

- refactor: refactor components, styles and test [`#9`](https://github.com/asmyshlyaev177/state-in-url/pull/9)
- build(deps): bump micromatch and lint-staged [`#8`](https://github.com/asmyshlyaev177/state-in-url/pull/8)
- style: next page optimization [`9ec0bf9`](https://github.com/asmyshlyaev177/state-in-url/commit/9ec0bf96bddf0507adc3d3ef8619278cd0636918)
- chore: bot detection [`8281d85`](https://github.com/asmyshlyaev177/state-in-url/commit/8281d8535dc7e30c6f11ab65b06f3ceb950c9b0e)
- feat: improve encoder algo, smaller URI strings and less complexity [`193e8c7`](https://github.com/asmyshlyaev177/state-in-url/commit/193e8c74da74cfde4032c5b7beecfff5b1e4a487)

#### [v2.2.5](https://github.com/asmyshlyaev177/state-in-url/compare/v2.2.4...v2.2.5)

> 21 August 2024

- style: new logo and favicon [`b80a4f9`](https://github.com/asmyshlyaev177/state-in-url/commit/b80a4f958ee023fafac6022e1b9c4afd69d3f586)
- refactor: simplify code [`03c3fdc`](https://github.com/asmyshlyaev177/state-in-url/commit/03c3fdc31ad2dcc72c4106be599811b6abe49d11)
- chore: noopener for links [`70197b8`](https://github.com/asmyshlyaev177/state-in-url/commit/70197b842f81a11417e7a2c83d758c6b4cdd5993)

#### [v2.2.4](https://github.com/asmyshlyaev177/state-in-url/compare/v2.2.3...v2.2.4)

> 18 August 2024

- refactor(useurlstatebase): use getInitialState as proper dependency injection [`38444e6`](https://github.com/asmyshlyaev177/state-in-url/commit/38444e6b3aeb8f098f41d00832e65f4c1276005b)
- chore(release): 2.2.4 [`ecdd628`](https://github.com/asmyshlyaev177/state-in-url/commit/ecdd6289fcb92f3e339f19240e612af8c31174e5)
- docs: Update README.md [`9a67bfc`](https://github.com/asmyshlyaev177/state-in-url/commit/9a67bfc3856d197421aea2a438369eaea1319320)

#### [v2.2.3](https://github.com/asmyshlyaev177/state-in-url/compare/v2.2.2...v2.2.3)

> 15 August 2024

- docs: rename github to docs in JSDoc comments [`6f78f6d`](https://github.com/asmyshlyaev177/state-in-url/commit/6f78f6d7a3539e865c73fb340140c18c852d3037)
- chore(release): 2.2.3 [`37164ff`](https://github.com/asmyshlyaev177/state-in-url/commit/37164ff2b442d75dadfc677133fc08d820708b4f)

#### [v2.2.2](https://github.com/asmyshlyaev177/state-in-url/compare/v2.2.1...v2.2.2)

> 15 August 2024

- fix: fix nested Date serialization [`e5451d5`](https://github.com/asmyshlyaev177/state-in-url/commit/e5451d56a4902864cda13ffd2c8f1a559372aad9)
- chore: remove unused package [`40f8465`](https://github.com/asmyshlyaev177/state-in-url/commit/40f846544f577e3cc6144486fad2a4c335d87b60)
- docs: attempt to fix vercel error [`aafbfd4`](https://github.com/asmyshlyaev177/state-in-url/commit/aafbfd403cf4c080cb823d19e9e2877965c58f97)

#### [v2.2.1](https://github.com/asmyshlyaev177/state-in-url/compare/v2.2.0...v2.2.1)

> 12 August 2024

- style: shiki highlighter [`e648c40`](https://github.com/asmyshlyaev177/state-in-url/commit/e648c403c7a6ef4527262aa8e885e791aa59a5a1)
- docs: polish examples [`081f122`](https://github.com/asmyshlyaev177/state-in-url/commit/081f1228cbed5bd5b48f3680c2d56865625f24f6)
- docs: improve docs [`cfa1281`](https://github.com/asmyshlyaev177/state-in-url/commit/cfa128174427dc82327153f9f24ed95c46addd7a)

#### [v2.2.0](https://github.com/asmyshlyaev177/state-in-url/compare/v2.1.1...v2.2.0)

> 9 August 2024

- feat(useurlstate): replace=true by default, object args [`b531063`](https://github.com/asmyshlyaev177/state-in-url/commit/b53106380efb38f318259ad103d15fb0433dc367)
- chore: update test utils [`c022d7f`](https://github.com/asmyshlyaev177/state-in-url/commit/c022d7f23122cd1bdd17aa7d27ea2c718a4dfd26)
- docs: note about `onBlur` [`14f4e7c`](https://github.com/asmyshlyaev177/state-in-url/commit/14f4e7cb7845eee2be62e264868388a2bea5e231)

#### [v2.1.1](https://github.com/asmyshlyaev177/state-in-url/compare/v2.1.0...v2.1.1)

> 6 August 2024

- test: separate stateShape obj instance for each test [`9684408`](https://github.com/asmyshlyaev177/state-in-url/commit/96844084e5d6545df029b7950418ff02dc86b7bb)
- style: url box and some style fixes [`7baaab4`](https://github.com/asmyshlyaev177/state-in-url/commit/7baaab4b1816d3bd17e3ccb2a5a90e40213b46a0)
- refactor: minor refactor [`2742e0b`](https://github.com/asmyshlyaev177/state-in-url/commit/2742e0bd2fff9b44ccae7c7ac67a4b5632c55c7f)

#### [v2.1.0](https://github.com/asmyshlyaev177/state-in-url/compare/v2.0.2...v2.1.0)

> 3 August 2024

- test: exports test [`1503aeb`](https://github.com/asmyshlyaev177/state-in-url/commit/1503aeb34d00a22e42d82b2dcc562bf9a8386dc4)
- feat: allow to use partial value for updateState/updateUrl [`1e0ede3`](https://github.com/asmyshlyaev177/state-in-url/commit/1e0ede342499c4e902252dbc09d9b2120addbd38)
- test: upgrade playwright [`f659243`](https://github.com/asmyshlyaev177/state-in-url/commit/f659243ce371642f84254db587d9dc0c6d570d6e)

#### [v2.0.2](https://github.com/asmyshlyaev177/state-in-url/compare/v2.0.1...v2.0.2)

> 1 August 2024

- docs: update README translations [`e159666`](https://github.com/asmyshlyaev177/state-in-url/commit/e15966678212af86904a1731dac8df55eb9527d3)
- fix(useurlstate): ignore/preserve sp not defined in stateShape [`502c4e3`](https://github.com/asmyshlyaev177/state-in-url/commit/502c4e3d58b30d6ac65c98fe881156ab677f7f66)
- test: minor test refactor [`d97d03b`](https://github.com/asmyshlyaev177/state-in-url/commit/d97d03b04896ac96087858ca88e89dbbc16e81f5)

#### [v2.0.1](https://github.com/asmyshlyaev177/state-in-url/compare/v2.0.0...v2.0.1)

> 1 August 2024

- chore: remove watch:int script [`62c7fa3`](https://github.com/asmyshlyaev177/state-in-url/commit/62c7fa354ae2ecc24459a6c0576da77920d8c516)
- fix: fix exports [`0d5f672`](https://github.com/asmyshlyaev177/state-in-url/commit/0d5f672cad6e1e13d85106f9ee4c2916231cdd45)
- fix: preserve location.href [`cb070db`](https://github.com/asmyshlyaev177/state-in-url/commit/cb070db0fc8b8bcc356115668f07ae6a5edf5ff2)

### [v2.0.0](https://github.com/asmyshlyaev177/state-in-url/compare/v1.2.0...v2.0.0)

> 31 July 2024

- feat: Integrations with nextJS, subpatch exports [`#7`](https://github.com/asmyshlyaev177/state-in-url/pull/7)
- refactor: useUrlStateBase hook [`72afbda`](https://github.com/asmyshlyaev177/state-in-url/commit/72afbdac0090a40b91dfffd61ca5cd5499947b9b)
- test: tests for useUrlState with few components [`868cfca`](https://github.com/asmyshlyaev177/state-in-url/commit/868cfca239f130ecef33435e55e75b50f6702679)
- docs: update docs [`78c64ba`](https://github.com/asmyshlyaev177/state-in-url/commit/78c64ba03f503d78ca1dba719ebac9a46c9ece50)

#### [v1.2.0](https://github.com/asmyshlyaev177/state-in-url/compare/v1.1.0...v1.2.0)

> 25 July 2024

- ci: fix vercel build [`cdc4949`](https://github.com/asmyshlyaev177/state-in-url/commit/cdc4949616054b3d17ea2cf70b3fe0e796daf406)
- docs: code blocks in next page [`3d41d23`](https://github.com/asmyshlyaev177/state-in-url/commit/3d41d23c60732d43135d01105bd5596479d7d568)
- build: clean up old deps [`afdff10`](https://github.com/asmyshlyaev177/state-in-url/commit/afdff101a384fac34f3b5600bde01bc8954bd5e9)

#### [v1.1.0](https://github.com/asmyshlyaev177/state-in-url/compare/v1.0.2...v1.1.0)

> 23 July 2024

- feat: useSharedState hook for Next.js/React [`#6`](https://github.com/asmyshlyaev177/state-in-url/pull/6)
- chore: fix html import [`5c105f4`](https://github.com/asmyshlyaev177/state-in-url/commit/5c105f4ec3cc988297ea34f3112a8be5cc3a4562)
- chore: empty react+ts vite example [`cab1531`](https://github.com/asmyshlyaev177/state-in-url/commit/cab15314fa991e17b5f7c045b85ddc9d962b26ac)
- chore: render React SPA under /react route [`672fc25`](https://github.com/asmyshlyaev177/state-in-url/commit/672fc25840eb2260ccc845e310fbb3e41c8d9196)

#### [v1.0.2](https://github.com/asmyshlyaev177/state-in-url/compare/v1.0.1...v1.0.2)

> 20 July 2024

- test: split test and skip hydrations errors for now [`4e8ac57`](https://github.com/asmyshlyaev177/state-in-url/commit/4e8ac57a5caa524ebe9fbe7e48d478614218190c)
- fix: fix value getting for SSR [`b1996a1`](https://github.com/asmyshlyaev177/state-in-url/commit/b1996a1d360bf3c477f3c786d7b05500b25dbb83)
- style: style improvement [`96c667a`](https://github.com/asmyshlyaev177/state-in-url/commit/96c667a2a7d76cac611dcc41452390922ea0cbab)

#### [v1.0.1](https://github.com/asmyshlyaev177/state-in-url/compare/v1.0.0...v1.0.1)

> 17 July 2024

- docs: kO and CN tranlation of main Readme [`#5`](https://github.com/asmyshlyaev177/state-in-url/pull/5)
- style: landing improvements [`fcf9746`](https://github.com/asmyshlyaev177/state-in-url/commit/fcf97464ed8c78efd84fdede9f35370564f9504c)
- style: openGraph meta tags [`9a0435b`](https://github.com/asmyshlyaev177/state-in-url/commit/9a0435baa28423b459888f96aac37305d9d048b5)
- chore: some SEO stuff [`39bbfdd`](https://github.com/asmyshlyaev177/state-in-url/commit/39bbfddfa6fb0bcf4e089344c8047808de1cb2e5)

### [v1.0.0](https://github.com/asmyshlyaev177/state-in-url/compare/v0.2.7...v1.0.0)

> 14 July 2024

- chore: bump example [`767d093`](https://github.com/asmyshlyaev177/state-in-url/commit/767d093c2077de244157fb821d0e6fb7d6c87d75)
- refactor: some cleanup [`a53ba38`](https://github.com/asmyshlyaev177/state-in-url/commit/a53ba3819c9c9ba05bc907c3036e24b8cecec902)
- chore: minor ts fixes [`2d422ea`](https://github.com/asmyshlyaev177/state-in-url/commit/2d422eaf9df49a367cd64b60e2c5942c4ac35149)

#### [v0.2.7](https://github.com/asmyshlyaev177/state-in-url/compare/v0.2.6...v0.2.7)

> 13 July 2024

- Docs [`#4`](https://github.com/asmyshlyaev177/state-in-url/pull/4)
- docs: markdown documentation for all exported functions [`723c584`](https://github.com/asmyshlyaev177/state-in-url/commit/723c584ac874a58d6a6fa42da3221427304bd753)
- style: udpate eslint plugin and fix linting [`0a250ac`](https://github.com/asmyshlyaev177/state-in-url/commit/0a250aca29d34376ffb75e91bb7c1ac1ae3060e2)
- test: remount component test [`f751f8e`](https://github.com/asmyshlyaev177/state-in-url/commit/f751f8eb06fa8617633b0e21157c16ceab763b20)

#### [v0.2.6](https://github.com/asmyshlyaev177/state-in-url/compare/v0.2.5...v0.2.6)

> 12 July 2024

- feat: improve ts typings [`e0ec875`](https://github.com/asmyshlyaev177/state-in-url/commit/e0ec875bcd686ec24464b7cb7961d1f2785e1802)
- chore: security fix [`10402de`](https://github.com/asmyshlyaev177/state-in-url/commit/10402deb850d0c0b5d06a4c7de25b0c3c891b01a)
- chore(release): 0.2.6 [`c8caad4`](https://github.com/asmyshlyaev177/state-in-url/commit/c8caad4b6a7f80316ec51377111725bd879ba466)

#### [v0.2.5](https://github.com/asmyshlyaev177/state-in-url/compare/v0.2.4...v0.2.5)

> 11 July 2024

- refactor: move eventLIsterner logic to state.ts [`de6a348`](https://github.com/asmyshlyaev177/state-in-url/commit/de6a348c94d2deb71d200084f863e3304bf89ac8)
- docs: improve README [`e685cc3`](https://github.com/asmyshlyaev177/state-in-url/commit/e685cc3c3d912629650c67425d50c1088094c2cb)
- chore: bump example [`e9cd152`](https://github.com/asmyshlyaev177/state-in-url/commit/e9cd152c73c2831a3281bc1941288c134f236c35)

#### [v0.2.4](https://github.com/asmyshlyaev177/state-in-url/compare/v0.2.3...v0.2.4)

> 10 July 2024

- fix: fix history navigation, add more tests [`f54d893`](https://github.com/asmyshlyaev177/state-in-url/commit/f54d893f37fa01b1da25266d1469c98cfae22db4)
- build: add playwright watch script [`853a1ad`](https://github.com/asmyshlyaev177/state-in-url/commit/853a1aded237cd0003bf66725fdb76cf65478c59)
- refactor: minor clean up [`38748ec`](https://github.com/asmyshlyaev177/state-in-url/commit/38748ec5359329395abd9ffe1548185f4a4db892)

#### [v0.2.3](https://github.com/asmyshlyaev177/state-in-url/compare/v0.2.2...v0.2.3)

> 9 July 2024

- feat: fix updateUrl, add more tests [`411c018`](https://github.com/asmyshlyaev177/state-in-url/commit/411c01846c93bd873a90a536793b8068521810cf)
- chore(release): 0.2.3 [`f8a9830`](https://github.com/asmyshlyaev177/state-in-url/commit/f8a9830538929ca6d2165ab580bd8a4ae62e25ec)
- chore: bump example [`6bb8a64`](https://github.com/asmyshlyaev177/state-in-url/commit/6bb8a64b350387497333f0e344b71809e707072e)

#### [v0.2.2](https://github.com/asmyshlyaev177/state-in-url/compare/v0.2.1...v0.2.2)

> 9 July 2024

- fix: fix import, no type module, and cjs bundle too [`ccb428b`](https://github.com/asmyshlyaev177/state-in-url/commit/ccb428b0e1d2a5ee4d0d88499ebe566f227e54b1)
- fix: updateState on updateUrl and fix types [`59c8250`](https://github.com/asmyshlyaev177/state-in-url/commit/59c82507e52921b929b8bea3ac9192703dd1576e)
- chore(release): 0.2.2 [`6f67a39`](https://github.com/asmyshlyaev177/state-in-url/commit/6f67a39e4f375f9e4ca801a9a71363bd26529104)

#### [v0.2.1](https://github.com/asmyshlyaev177/state-in-url/compare/v0.2.0...v0.2.1)

> 8 July 2024

- docs: Create CODE_OF_CONDUCT.md [`c1f75db`](https://github.com/asmyshlyaev177/state-in-url/commit/c1f75dbb8334ce2d7e5c8ba1ba294970ec9b2e53)
- docs: Update issue templates [`e356927`](https://github.com/asmyshlyaev177/state-in-url/commit/e356927b6a9527ed9a5d76e0a42d08a168e42905)
- chore: vercel analytics [`ba65f49`](https://github.com/asmyshlyaev177/state-in-url/commit/ba65f49c21ae189990d15b9b419b22509a7d0bbb)

#### [v0.2.0](https://github.com/asmyshlyaev177/state-in-url/compare/v0.1.7...v0.2.0)

> 8 July 2024

- feat: observer pattern to communicate between `useUrlState` hooks, stateShape parameter required [`f8d8db1`](https://github.com/asmyshlyaev177/state-in-url/commit/f8d8db10740fe2507a59fd424bc5eb560ab0b834)
- ci: disable github-pages deploy [`5d23c91`](https://github.com/asmyshlyaev177/state-in-url/commit/5d23c91c9c9fdff45864e0c7a7d0bbc7a5e3c0da)
- docs: improve readme [`bfa059c`](https://github.com/asmyshlyaev177/state-in-url/commit/bfa059c57a9617bc0bfa02dc0851f10307d9ed60)

#### [v0.1.7](https://github.com/asmyshlyaev177/state-in-url/compare/v0.1.6...v0.1.7)

> 5 July 2024

- feat: use fallback for invalid/incomplet URL string [`7690030`](https://github.com/asmyshlyaev177/state-in-url/commit/76900302379a9579df3813e0d77d2fa578a75d06)
- docs: import types definitions [`8427fad`](https://github.com/asmyshlyaev177/state-in-url/commit/8427fadac0aed62b0db5260887ad5f926fc74616)
- docs: explicit types in nextjs example [`921a160`](https://github.com/asmyshlyaev177/state-in-url/commit/921a16051aa1b8b83ab5b02c7e336796810b2f3a)

#### [v0.1.6](https://github.com/asmyshlyaev177/state-in-url/compare/v0.1.5...v0.1.6)

> 3 July 2024

- feat: use fallback for invalid/incomplet URL string [`f6558ce`](https://github.com/asmyshlyaev177/state-in-url/commit/f6558ceb56ef5bd7acba240f56e9535231288e51)
- docs: import types definitions [`9a9e879`](https://github.com/asmyshlyaev177/state-in-url/commit/9a9e879001d89d04a86c545d09c4df8b5749b92d)
- docs: explicit types in nextjs example [`a8677f7`](https://github.com/asmyshlyaev177/state-in-url/commit/a8677f7f2416747798ec84f9cdfa857f38fbec2d)

#### [v0.1.5](https://github.com/asmyshlyaev177/state-in-url/compare/v0.1.4...v0.1.5)

> 2 July 2024

- chore(release): 0.1.5 [`5a65753`](https://github.com/asmyshlyaev177/state-in-url/commit/5a65753ed3eb596b40f7269bd7134bb5c1f124e8)
- chore: bump example [`63ea68c`](https://github.com/asmyshlyaev177/state-in-url/commit/63ea68c08d226f7337a9620774f5f8149b767df5)
- fix: fix types in dist [`da303ba`](https://github.com/asmyshlyaev177/state-in-url/commit/da303baf44eb87a0591d19173058f496d9e19b83)

#### [v0.1.4](https://github.com/asmyshlyaev177/state-in-url/compare/v0.1.3...v0.1.4)

> 2 July 2024

- feat: `encodeState` and `decodeState` functions [`abc4dcb`](https://github.com/asmyshlyaev177/state-in-url/commit/abc4dcbd51512f0bd2bef2abd4e2f78241a34b56)
- chore(release): 0.1.4 [`e3e802b`](https://github.com/asmyshlyaev177/state-in-url/commit/e3e802bf8f51f63df9ead2762f5fa12b644533ed)
- chore: fix tsconfig/eslint [`e336827`](https://github.com/asmyshlyaev177/state-in-url/commit/e336827b46d54b7d4419e7f6da85eaa216c41eb6)

#### [v0.1.3](https://github.com/asmyshlyaev177/state-in-url/compare/v0.1.2...v0.1.3)

> 1 July 2024

- fix: keep scroll for router.push, add option for router.replace [`6e9646e`](https://github.com/asmyshlyaev177/state-in-url/commit/6e9646e129dd540fa9c2e3dbeb74db835f75a5f1)
- ci: bump lib in example [`cafcdee`](https://github.com/asmyshlyaev177/state-in-url/commit/cafcdee11363e669aab8b9d27280b4c99a6c91cc)
- chore(release): 0.1.3 [`1c57e02`](https://github.com/asmyshlyaev177/state-in-url/commit/1c57e02da4cb2dc91481065290becabf161f3c15)

#### [v0.1.2](https://github.com/asmyshlyaev177/state-in-url/compare/v0.1.1...v0.1.2)

> 1 July 2024

- style: redesign of demo page [`935b68f`](https://github.com/asmyshlyaev177/state-in-url/commit/935b68f15e5ea38ad00e3330bdfb2cf2cabef5f1)
- ci: change nextjs directory [`20fefe0`](https://github.com/asmyshlyaev177/state-in-url/commit/20fefe0894527bead7cc32e33f6456b51f6ca464)
- ci: gh-pages another action [`c6fc97f`](https://github.com/asmyshlyaev177/state-in-url/commit/c6fc97fb192c08b8ff54be2674d53801f0eafb05)

#### v0.1.1

> 30 June 2024

- feat: first version [`b664ab6`](https://github.com/asmyshlyaev177/state-in-url/commit/b664ab6fae7babe7aad83ebdb17f9079200ce2fa)
- chore(release): 0.1.1 [`f051776`](https://github.com/asmyshlyaev177/state-in-url/commit/f0517767f98b59b9a7e86c74b6384be25b3b1a9f)
- fix: fix export [`5faeb5e`](https://github.com/asmyshlyaev177/state-in-url/commit/5faeb5e37240e82338ff574c471d43382f3a4857)
