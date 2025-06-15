Make sure that what you trying to fix really a bug, or if adding feature that is good way to solve your task.

1. Fork the repo:

- Use nodejs 20 (recommended, should work in others but not tested)
- Run `npm run install:all` in root folder (it will install all deps and do other required steps)
- Install [Playwright](https://playwright.dev/docs/intro) , can use `distrobox` if you on Linux distro other than Ubuntu, should work as is for Windows and Mac.
- Run `npm run dev` for run the demo project in watch mode

2. Write code! Add some feature or fix bug.

    2.1 [Use conventional commit format](https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13)

    `fix` and `feat` will bump the version, **those tags should be used only for files inside `./packages/urlstate` or `package.json`**.

    There are also `ci`, `build`, `docs`, `style`, `test`, `chore` and `refactor`.

3. Check that all tests passed(unit and e2e) and add tests for your code.
Run all tests witn `npm run test`

You can run tests separately with `npm run test:unit` and tests `npm run test:int` + `npm run dev`
Use `npm run kill` if some processes hang.

4. Update readme and example (if needed)

5. Make commit and Pull Request, review, approval and merge.
