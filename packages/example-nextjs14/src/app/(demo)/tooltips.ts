import { type Tooltip, type Matcher } from "../types"

const formTooltip: Tooltip[] = [{
  text: `(alias) const form: Form\n
import form`, lang: 'tsx'
}]

const urlStateTooltip: Tooltip[] = [
  {
    text: `const urlState: Form\n\n`,
    lang: 'tsx'
  },
  {
    text: `State object. Don't mutate directly, use setState or setUrl`,
    lang: 'markdown'
  }
]

const descTooltip: Tooltip = {
  text: `
* JSDoc description, examples, and link to Docs

  ...
  ...
* Docs @link
`, lang: 'markdown'
}

const useUrlStateTooltipImp: Tooltip[] = [
  {
    text: `(alias) function useUrlState<T extends JSONCompatible>({ defaultState: T, searchParams, replace, scroll, useHistory, }: OldParams<T>): {
    urlState: T;
    setState: (value: Partial<T> | ((currState: T) => T)) => void;
    setUrl: (value?: Partial<T> | ((currState: T) => T)) => void;
} (+1 overload)
import useUrlState`,
    lang: 'tsx'
  },
  descTooltip
]

const useUrlStateTooltip: Tooltip[] = [
  {
    text: `
(alias) useUrlState<Form>(defaultState: Form, params?: Params): {
    urlState: Form;
    setState: (value: Partial<Form> | ((currState: Form) => Form)) => void;
    setUrl: (value?: Partial<...> | ... 1 more ... | undefined, options?: Options) => void;
    reset: (options?: Options & {
        [key: string]: unknown;
    }) => void;
} (+1 overload)
import useUrlState`, lang: 'tsx'
  },

  descTooltip
]

const setStateTooltip: Tooltip[] = [{ text: `const setState: (value: Partial<Form> | ((currState: Form) => Form)) => void`, lang: 'tsx' }, descTooltip]

const setUrlTooltip: Tooltip[] = [{ text: `const setUrl: (value?: Partial<Form> | ((currState: Form) => Form) | undefined, options?: Options) => void`, lang: 'tsx' }, descTooltip]

const resetTooltip: Tooltip[] = [{
  text: `const reset: (options?: Options & {
    [key: string]: unknown;
}) => void`, lang: 'tsx'
}, descTooltip]

const formParamTooltip: Tooltip[] = [{ text: `(parameter) curr: Form`, lang: 'tsx' }]

export const tooltips: Matcher[] = [
  ['useUrlState}', useUrlStateTooltipImp],
  ['form}', formTooltip],
  ['form);', formTooltip],
  ['form, {', formTooltip],
  ['useUrlState(', useUrlStateTooltip],
  [
    'urlState,', urlStateTooltip
  ],
  [
    'urlState}', urlStateTooltip
  ],
  [
    '{urlState.name', urlStateTooltip
  ],
  [
    'urlState.', urlStateTooltip
  ],
  [
    'name}', [
      { text: '(property) name: string', lang: 'tsx' }
    ]
  ],
  [
    'name}</', [
      { text: '(property) name: string', lang: 'tsx' }
    ]
  ],
  [
    'setState,', setStateTooltip
  ],
  [
    'setState(', setStateTooltip
  ],
  [
    'setState}', setStateTooltip
  ],
  [
    'setUrl,', setUrlTooltip
  ],
  [
    'setUrl}', setUrlTooltip
  ],
  [
    'setUrl({', setUrlTooltip
  ],
  [
    'setUrl()}', setUrlTooltip
  ],
  [
    'setUrl:', setUrlTooltip
  ],
  [
    `setUrl({ name:`, setUrlTooltip
  ],
  ['curr=>', formParamTooltip],
    ['curr, name:', formParamTooltip],
  [
    'setUrlBase,', setUrlTooltip
  ],
  [
    'setUrlBase(', setUrlTooltip
  ],
  [
    'reset}', resetTooltip
  ]

]
