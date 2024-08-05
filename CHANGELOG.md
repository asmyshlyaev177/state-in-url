# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.1.1](https://github.com/asmyshlyaev177/state-in-url/compare/v2.1.0...v2.1.1) (2024-08-05)

## [2.1.0](https://github.com/asmyshlyaev177/state-in-url/compare/v2.0.2...v2.1.0) (2024-08-03)


### Features

* allow to use partial value for updateState/updateUrl ([1e0ede3](https://github.com/asmyshlyaev177/state-in-url/commit/1e0ede342499c4e902252dbc09d9b2120addbd38))

### [2.0.2](https://github.com/asmyshlyaev177/state-in-url/compare/v2.0.1...v2.0.2) (2024-08-01)


### Bug Fixes

* **useurlstate:** ignore/preserve sp not defined in stateShape ([502c4e3](https://github.com/asmyshlyaev177/state-in-url/commit/502c4e3d58b30d6ac65c98fe881156ab677f7f66))

### [2.0.1](https://github.com/asmyshlyaev177/state-in-url/compare/v2.0.0...v2.0.1) (2024-08-01)


### Bug Fixes

* fix exports ([0d5f672](https://github.com/asmyshlyaev177/state-in-url/commit/0d5f672cad6e1e13d85106f9ee4c2916231cdd45))
* preserve location.href ([cb070db](https://github.com/asmyshlyaev177/state-in-url/commit/cb070db0fc8b8bcc356115668f07ae6a5edf5ff2))

## [2.0.0](https://github.com/asmyshlyaev177/state-in-url/compare/v1.2.0...v2.0.0) (2024-07-31)


### ⚠ BREAKING CHANGES

* move `useUrlState` to `/next` export
* **export:** Ship only esm bundle, no cjs

### build

* **export:** keep es modules for transpilation, drop cjs ([17960ec](https://github.com/asmyshlyaev177/state-in-url/commit/17960ec6bdfd79e073d54912d8135fcded4312ec))


* move `useUrlState` to `/next` export ([077818b](https://github.com/asmyshlyaev177/state-in-url/commit/077818b8891c5ddef25afc0c98d83e3ae4a957fb))

## [1.2.0](https://github.com/asmyshlyaev177/state-in-url/compare/v1.0.2...v1.2.0) (2024-07-25)


### Features

* useSharedState hook for Next.js/React ([152e202](https://github.com/asmyshlyaev177/state-in-url/commit/152e2027bc2bbf3c66af3f53f2d4a5d7565b17d5))


### Bug Fixes

* edge cases in getParams ([a9eb116](https://github.com/asmyshlyaev177/state-in-url/commit/a9eb11674d4ead93dda8c6d1af909df5fc5d16da))
* polished initial state logic in useSharedState ([8bd4b85](https://github.com/asmyshlyaev177/state-in-url/commit/8bd4b85bf981cae74fdf731c2762b7a82ca57a66))

## [1.1.0](https://github.com/asmyshlyaev177/state-in-url/compare/v1.0.2...v1.1.0) (2024-07-23)


### Features

* useSharedState hook for Next.js/React ([152e202](https://github.com/asmyshlyaev177/state-in-url/commit/152e2027bc2bbf3c66af3f53f2d4a5d7565b17d5))

### [1.0.2](https://github.com/asmyshlyaev177/state-in-url/compare/v1.0.1...v1.0.2) (2024-07-20)


### Bug Fixes

* fix value getting for SSR ([b1996a1](https://github.com/asmyshlyaev177/state-in-url/commit/b1996a1d360bf3c477f3c786d7b05500b25dbb83))

### [1.0.1](https://github.com/asmyshlyaev177/state-in-url/compare/v1.0.0...v1.0.1) (2024-07-17)

## [1.0.0](https://github.com/asmyshlyaev177/state-in-url/compare/v0.2.7...v1.0.0) (2024-07-14)

### [0.2.7](https://github.com/asmyshlyaev177/state-in-url/compare/v0.2.6...v0.2.7) (2024-07-13)

### [0.2.6](https://github.com/asmyshlyaev177/state-in-url/compare/v0.2.5...v0.2.6) (2024-07-12)


### Features

* improve ts typings ([e0ec875](https://github.com/asmyshlyaev177/state-in-url/commit/e0ec875bcd686ec24464b7cb7961d1f2785e1802))

### [0.2.5](https://github.com/asmyshlyaev177/state-in-url/compare/v0.2.4...v0.2.5) (2024-07-11)

### [0.2.4](https://github.com/asmyshlyaev177/state-in-url/compare/v0.2.3...v0.2.4) (2024-07-10)


### Bug Fixes

* fix history navigation, add more tests ([f54d893](https://github.com/asmyshlyaev177/state-in-url/commit/f54d893f37fa01b1da25266d1469c98cfae22db4))

### [0.2.3](https://github.com/asmyshlyaev177/state-in-url/compare/v0.2.2...v0.2.3) (2024-07-09)


### Features

* fix updateUrl, add more tests ([411c018](https://github.com/asmyshlyaev177/state-in-url/commit/411c01846c93bd873a90a536793b8068521810cf))

### [0.2.2](https://github.com/asmyshlyaev177/state-in-url/compare/v0.2.1...v0.2.2) (2024-07-09)


### Bug Fixes

* fix import, no type module, and cjs bundle too ([ccb428b](https://github.com/asmyshlyaev177/state-in-url/commit/ccb428b0e1d2a5ee4d0d88499ebe566f227e54b1))
* updateState on updateUrl and fix types ([59c8250](https://github.com/asmyshlyaev177/state-in-url/commit/59c82507e52921b929b8bea3ac9192703dd1576e))

### [0.2.1](https://github.com/asmyshlyaev177/state-in-url/compare/v0.2.0...v0.2.1) (2024-07-08)


### Bug Fixes

* fix minor bug in updateUrl ([d9c872c](https://github.com/asmyshlyaev177/state-in-url/commit/d9c872cb6d869adb134a45d6c165e17979a80ae8))
* trying to fix date issue ([ecdaea8](https://github.com/asmyshlyaev177/state-in-url/commit/ecdaea8947c0a13c110a6e1c6ed1f8ca849de5a4))

## [0.2.0](https://github.com/asmyshlyaev177/state-in-url/compare/v0.1.5...v0.2.0) (2024-07-08)


### ⚠ BREAKING CHANGES

* `defaultState` arg in `useUrlState` now required, could be just `const state: {
[key: string]: value: any } = {}`

### Features

* observer pattern to communicate between `useUrlState` hooks, stateShape parameter required ([f8d8db1](https://github.com/asmyshlyaev177/state-in-url/commit/f8d8db10740fe2507a59fd424bc5eb560ab0b834))
* use fallback for invalid/incomplet URL string ([7690030](https://github.com/asmyshlyaev177/state-in-url/commit/76900302379a9579df3813e0d77d2fa578a75d06))

### [0.1.7](https://github.com/asmyshlyaev177/state-in-url/compare/v0.1.5...v0.1.7) (2024-07-05)


### Features

* use fallback for invalid/incomplet URL string ([7690030](https://github.com/asmyshlyaev177/state-in-url/commit/76900302379a9579df3813e0d77d2fa578a75d06))

### [0.1.6](https://github.com/asmyshlyaev177/state-in-url/compare/v0.1.5...v0.1.6) (2024-07-03)


### Features

* use fallback for invalid/incomplet URL string ([f6558ce](https://github.com/asmyshlyaev177/state-in-url/commit/f6558ceb56ef5bd7acba240f56e9535231288e51))

### [0.1.5](https://github.com/asmyshlyaev177/state-in-url/compare/v0.1.4...v0.1.5) (2024-07-02)


### Bug Fixes

* fix types in dist ([da303ba](https://github.com/asmyshlyaev177/state-in-url/commit/da303baf44eb87a0591d19173058f496d9e19b83))

### [0.1.4](https://github.com/asmyshlyaev177/state-in-url/compare/v0.1.3...v0.1.4) (2024-07-02)


### Features

* `encodeState` and `decodeState` functions ([abc4dcb](https://github.com/asmyshlyaev177/state-in-url/commit/abc4dcbd51512f0bd2bef2abd4e2f78241a34b56))

### [0.1.3](https://github.com/asmyshlyaev177/state-in-url/compare/v0.1.2...v0.1.3) (2024-07-01)


### Bug Fixes

* keep scroll for router.push, add option for router.replace ([6e9646e](https://github.com/asmyshlyaev177/state-in-url/commit/6e9646e129dd540fa9c2e3dbeb74db835f75a5f1))

### [0.1.2](https://github.com/asmyshlyaev177/state-in-url/compare/v0.1.1...v0.1.2) (2024-07-01)


### Bug Fixes

* fix loop for SSG ([adf6f18](https://github.com/asmyshlyaev177/state-in-url/commit/adf6f1869c562ef7a2796469fcb82d28f82c6da2))

### 0.1.1 (2024-06-30)


### Features

* first version ([b664ab6](https://github.com/asmyshlyaev177/state-in-url/commit/b664ab6fae7babe7aad83ebdb17f9079200ce2fa))


### Bug Fixes

* fix export ([5faeb5e](https://github.com/asmyshlyaev177/state-in-url/commit/5faeb5e37240e82338ff574c471d43382f3a4857))
