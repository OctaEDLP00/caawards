import { $, $$ } from './dom.mjs'

declare const hamburger = $<HTMLDivElement>('.hamburger')
declare const mobileMenu = $<HTMLDivElement>('.mobile-menu')
declare const overlay = $<HTMLDivElement>('.overlay')
declare const navLinks = $$<NodeListOf<HTMLAnchorElement>>('.link')

export type {
  hamburger,
  mobileMenu, navLinks, overlay
}

export default {
  hamburger,
  mobileMenu, overlay, navLinks
}
