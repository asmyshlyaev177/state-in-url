# 1.0.0 (2024-10-12)


### Bug Fixes

* edge cases in getParams ([a1a189c](https://github.com/asmyshlyaev177/state-in-url/commit/a1a189ccb9e0a5db7ecdde00fac64666d23cc07c))
* fix export ([3dd6052](https://github.com/asmyshlyaev177/state-in-url/commit/3dd6052a8bdd51e8ab93497f781aaf1ed218ace2))
* fix exports ([9a4c739](https://github.com/asmyshlyaev177/state-in-url/commit/9a4c73964b0ff3ea130cb04be4d106f30b562f02))
* fix gh action ([f57d3f7](https://github.com/asmyshlyaev177/state-in-url/commit/f57d3f7ffdd52fc57d4665b1dcabed80ebb8f021))
* fix history navigation, add more tests ([b253755](https://github.com/asmyshlyaev177/state-in-url/commit/b253755e141aa5ade0e224228e8c6fa1963b6900))
* fix import, no type module, and cjs bundle too ([759a607](https://github.com/asmyshlyaev177/state-in-url/commit/759a607c4677f1d3490025e1bc2ab3b9e936046a))
* fix loop for SSG ([4ea111e](https://github.com/asmyshlyaev177/state-in-url/commit/4ea111e5521e2c920a6c33dc56d7318c11cd9077))
* fix minor bug in updateUrl ([566a63a](https://github.com/asmyshlyaev177/state-in-url/commit/566a63ab3df75716df6e7d074d69463a91ea08b5))
* fix nested Date serialization ([6c6a73d](https://github.com/asmyshlyaev177/state-in-url/commit/6c6a73db6a1861182ac7f154d2972fa29ecd7a49))
* fix ts types ([6b941a0](https://github.com/asmyshlyaev177/state-in-url/commit/6b941a03145c614f964b14a80c1e9f73d96dedc7))
* fix types in dist ([e1a4eb6](https://github.com/asmyshlyaev177/state-in-url/commit/e1a4eb6351fd49e3ea25595d91b201488c7a4a20))
* fix value getting for SSR ([2b7fe9b](https://github.com/asmyshlyaev177/state-in-url/commit/2b7fe9b8c160c04ca31823971c5148b5222526a7))
* fix whitespaces in variable names bug ([af5b65e](https://github.com/asmyshlyaev177/state-in-url/commit/af5b65efd037d3d549b750dace98f24685861f61))
* ignore undeclared params for history navigation ([056cd7d](https://github.com/asmyshlyaev177/state-in-url/commit/056cd7d738dcb6f6758d17777f04a887de1ad80e))
* keep scroll for router.push, add option for router.replace ([f79cfe1](https://github.com/asmyshlyaev177/state-in-url/commit/f79cfe19945d18b774198a7986d193afb4187aac))
* polished initial state logic in useSharedState ([269e498](https://github.com/asmyshlyaev177/state-in-url/commit/269e498f7db620bff63d50a9fdbb53244eb9ae7e))
* preserve location.href ([2c4d34e](https://github.com/asmyshlyaev177/state-in-url/commit/2c4d34e9cb09909f592f8a138f845d980cc7802d))
* semantic-release config ([8cb9bdb](https://github.com/asmyshlyaev177/state-in-url/commit/8cb9bdb325d21c2f4358159b88aea96bb8f81ece))
* trigger release ([f5d4a12](https://github.com/asmyshlyaev177/state-in-url/commit/f5d4a127186fb67e0ebcf3367119b86364ed0ec4))
* trying to fix date issue ([40ef2fa](https://github.com/asmyshlyaev177/state-in-url/commit/40ef2fa76444b2b4ddbccd76b5b08ea7cf3ef29d))
* updateState on updateUrl and fix types ([ca54c2c](https://github.com/asmyshlyaev177/state-in-url/commit/ca54c2c8c834eb86c3f4c48158faa918c033a85c))
* **useurlstate:** ignore/preserve sp not defined in stateShape ([a46b319](https://github.com/asmyshlyaev177/state-in-url/commit/a46b31988d39d0b4e40c0459c7111d2d550bc635))


### Build System

* **export:** keep es modules for transpilation, drop cjs ([2c776c5](https://github.com/asmyshlyaev177/state-in-url/commit/2c776c5aa87382c7fd3fc69da2581bf3c851da4a))


### Code Refactoring

* move `useUrlState` to `/next` export ([c0e702b](https://github.com/asmyshlyaev177/state-in-url/commit/c0e702beaa5a3f7cb84464b8ef1658ff43f7313d))
* **useurlstate:** remove deprecated things ([82cb460](https://github.com/asmyshlyaev177/state-in-url/commit/82cb4605f867ac58f8e04b4df24385f64b36f3bd))


### Features

* `encodeState` and `decodeState` functions ([30bda96](https://github.com/asmyshlyaev177/state-in-url/commit/30bda960ceb6b9a781225368acfb78cb2b7dc3dd))
* allow to use partial value for updateState/updateUrl ([82dfebd](https://github.com/asmyshlyaev177/state-in-url/commit/82dfebdf8b7262b14ba44a5a5deb07f45d16dd24))
* first version ([b6b4d82](https://github.com/asmyshlyaev177/state-in-url/commit/b6b4d82173e17a4764726d3201a125c2d8a2384a))
* fix updateUrl, add more tests ([adc216d](https://github.com/asmyshlyaev177/state-in-url/commit/adc216d3e8f1ece73b991765e1b69f81d23f03cb))
* improve encoder algo, smaller URI strings and less complexity ([c72c0df](https://github.com/asmyshlyaev177/state-in-url/commit/c72c0dfafc6238637469837f6155f86941c526e3))
* improve ts typings ([6d62dd7](https://github.com/asmyshlyaev177/state-in-url/commit/6d62dd700e559168d84a7129027aed3bbe6a94b0))
* keywords update ([29129e2](https://github.com/asmyshlyaev177/state-in-url/commit/29129e2996335469690d97463478c3d0dc77c51e))
* observer pattern to communicate between `useUrlState` hooks, stateShape parameter required ([2e7f724](https://github.com/asmyshlyaev177/state-in-url/commit/2e7f724fa10d26b2ae681a0324e1a8c701cc5ec2))
* provenance test ([d4c4a0d](https://github.com/asmyshlyaev177/state-in-url/commit/d4c4a0da2f05f3ae7c68cf3a158905fcfc28ef76))
* semantic release ([3c3333e](https://github.com/asmyshlyaev177/state-in-url/commit/3c3333e1449fc44932cb1e1a7026f9ecd49661fe))
* test release ([ffa4a5e](https://github.com/asmyshlyaev177/state-in-url/commit/ffa4a5ea0f921d2d7d8ad50d2fa1dd533e6b3e75))
* trigger a release ([810f91f](https://github.com/asmyshlyaev177/state-in-url/commit/810f91fbd7435d422ff0827de9e0d49d40b54cb1))
* use fallback for invalid/incomplet URL string ([039f01b](https://github.com/asmyshlyaev177/state-in-url/commit/039f01b5b13f2aa8588f5d5d198a0c323fd744a3))
* useSharedState hook for Next.js/React ([343f47d](https://github.com/asmyshlyaev177/state-in-url/commit/343f47dc9710b06626c68b263fec17d2ea9cbac4))
* **useurlstate:** replace=true by default, object args ([09f6799](https://github.com/asmyshlyaev177/state-in-url/commit/09f6799a987e8ee4a282632709ca7c3d22484c6e))
* **useurlstate:** useUrlState hook for react-router@6 ([c29d47d](https://github.com/asmyshlyaev177/state-in-url/commit/c29d47d61ec277adbd68d395edb9f9eadcf2d578))


### Reverts

* Revert "ci: use local library version, won't forget to update it this way" ([558fee3](https://github.com/asmyshlyaev177/state-in-url/commit/558fee3c6c0e325e33506c5ac84a5bb22ecae2fe))


### BREAKING CHANGES

* **useurlstate:** 1. `useUrlState` for Next.js now accept only object, eg. `useUrlState({
defaultState: {}})`
 2. urls encoded with versions prior to v2.3.0 could stop working
* move `useUrlState` to `/next` export
* **export:** Ship only esm bundle, no cjs
* `defaultState` arg in `useUrlState` now required, could be just `const state: {
[key: string]: value: any } = {}`

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
