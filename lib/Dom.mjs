/**
 * Pequeña libreria para obtener lo elementos
 * del dom con `querySelector` y `querySelectorAll`
 */

/**
 * Get element from dom by selector string
 * @example
 * const elementClass = $('.my-class')
 * const elementId = $('#my-id')
 * @template {HTMLElement} T
 * @param {string} selector
 * @param {Document | HTMLElement} [context] if context is undefined by default `document`
 * @returns {T | null}
 */
const $ = (selector, context = document) => context.querySelector(selector)

/**
 * Get elements from dom by selector string
 * @example
 * const elements = $$('.my-class')
 * @template {HTMLElement} T
 * @param {string} selector
 * @param {Document | HTMLElement} [context] if context is undefined by default `document`
 * @returns {NodeListOf<T>}
 */
const $$ = (selector, context = document) => context.querySelectorAll(selector)

export { $, $$ }
export default { $, $$ }
