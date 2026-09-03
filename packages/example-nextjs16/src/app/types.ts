export type Langs = 'tsx' | 'markdown'

export type Matcher = [word: string, nodes: Tooltip[]]

export type Tooltip = { text: string, lang: Langs }

/** A `Matcher` after `renderTooltips` — highlighted markup, no Shiki on the client. */
export type RenderedMatcher = [word: string, nodes: string[]]
