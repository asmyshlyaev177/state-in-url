import { expect, test } from '@playwright/test';

test.describe('Markdown Accept Header (landing only)', () => {
  test.skip(({ browserName }) => browserName !== 'chromium', 'Chromium only');

  test('should return markdown when Accept header is text/markdown', async ({ request }) => {
    const response = await request.get('/', {
      headers: {
        'Accept': 'text/markdown',
      },
    });

    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('text/markdown');
    expect(response.headers()['cache-control']).toBe('public, max-age=3600');

    const body = await response.text();
    expect(body).toContain('# state-in-url');
    expect(body).toContain('## What It Does');
  });

  test('should return markdown when Accept header is text/plain', async ({ request }) => {
    const response = await request.get('/', {
      headers: {
        'Accept': 'text/plain',
      },
    });

    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('text/plain');

    const body = await response.text();
    expect(body).toContain('# state-in-url');
    expect(body).toContain('## What It Does');
  });

  test('should return HTML when Accept header is text/html', async ({ request }) => {
    const response = await request.get('/', {
      headers: {
        'Accept': 'text/html',
      },
    });

    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('text/html');

    const body = await response.text();
    expect(body).toContain('<!DOCTYPE html>');
  });

  test('should return markdown when text/markdown comes before text/html in Accept header', async ({ request }) => {
    const response = await request.get('/', {
      headers: {
        'Accept': 'text/markdown, text/html',
      },
    });

    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('text/markdown');

    const body = await response.text();
    expect(body).toContain('# state-in-url');
  });

  test('should return markdown when both text/html and text/markdown in Accept header', async ({ request }) => {
    const response = await request.get('/', {
      headers: {
        'Accept': 'text/html, text/markdown',
      },
    });

    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('text/markdown');

    const body = await response.text();
    expect(body).toContain('# state-in-url');
  });

  test('should only serve markdown for root path', async ({ request }) => {
    const response = await request.get('/react-router', {
      headers: {
        'Accept': 'text/markdown',
      },
    });

    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('text/html');

    const body = await response.text();
    expect(body).toContain('<!DOCTYPE html>');
  });
});
