declare const $: <T extends HTMLElement>(selector: string, context: Document | HTMLElement = document) => T | null

declare const $$: <T extends HTMLElement>(selector: string, context: Document | HTMLElement = document) => NodeListOf<T>

export type { $, $$ }

export default { $$, $ }
