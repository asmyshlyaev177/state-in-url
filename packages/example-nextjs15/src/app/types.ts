export type Langs = 'tsx' | 'markdown'

export type Matcher = [word: string, nodes: Tooltip[]]

export type Tooltip = { text: string, lang: Langs }
