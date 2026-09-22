import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { createElement as h } from 'react';
import { BrowserRouter } from 'react-router';
import { useUrlState } from 'state-in-url/react-router';

// No JSX on purpose: this file has to run unchanged under Vitest and Jest, and
// each would otherwise need its own JSX transform configured.

// Module scope: a fresh object each render breaks state sharing.
const DEFAULTS = { q: '', page: 1 };

function Search() {
  const { urlState, setUrl } = useUrlState(DEFAULTS);

  return h('div', null, [
    h('output', { key: 'q', 'data-testid': 'q' }, urlState.q || 'empty'),
    h('output', { key: 'p', 'data-testid': 'page' }, String(urlState.page)),
    h(
      'button',
      { key: 'b', type: 'button', onClick: () => setUrl({ q: 'shoes', page: 2 }) },
      'search',
    ),
  ]);
}

const inRouter = () => h(BrowserRouter, null, h(Search, null));

// The provider is in the tree, so this only throws
// "useNavigate() may be used only in the context of a <Router> component"
// when react-router has been loaded twice and its context exists twice.
test('useUrlState reads the router context the provider wrote to', () => {
  render(inRouter());

  expect(screen.getByTestId('q').textContent).toBe('empty');
  expect(screen.getByTestId('page').textContent).toBe('1');
});

test('setUrl writes through that same context', async () => {
  render(inRouter());
  fireEvent.click(screen.getByRole('button'));

  await waitFor(() => {
    expect(screen.getByTestId('q').textContent).toBe('shoes');
  });
  expect(screen.getByTestId('page').textContent).toBe('2');
});
