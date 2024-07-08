import { test } from '@playwright/test';
import { useUrlStateTest } from './useUrlStateTest';

test('useUrlState - with server components', useUrlStateTest('/test-ssr'));

test('useUrlState - with client components', useUrlStateTest('/test-client'));
