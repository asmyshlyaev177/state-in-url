// `bun test` runs without a DOM, and @testing-library/react needs one. Bun has
// no equivalent of Vitest's `environment` or Jest's `testEnvironment`, so the
// registrator installs happy-dom's globals before the suite loads.
import { GlobalRegistrator } from '@happy-dom/global-registrator';

GlobalRegistrator.register({ url: 'http://localhost/' });
