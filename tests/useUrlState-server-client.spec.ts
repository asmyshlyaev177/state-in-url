import { test } from '@playwright/test';
import { useUrlStateTest } from './useUrlStateTest';

test('useUrlState - server with searchParams', useUrlStateTest('/test-ssr'));

test(
  'useUrlState - server without searchParams',
  useUrlStateTest('/test-client'),
);
