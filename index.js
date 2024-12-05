import { $, $$ } from '~/lib/Dom.mjs'

/** @type {HTMLDivElement | null} */
const hamburger = $('.hamburger')
/** @type {HTMLDivElement | null} */
const mobileMenu = $('.mobile-menu')
/** @type {HTMLDivElement | null} */
const overlay = $('.overlay')
/** @type {NodeListOf<HTMLAnchorElement>} */
const navLinks = $$('.link')

if (hamburger && mobileMenu && overlay && !(navLinks.length < 0)) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    mobileMenu.classList.toggle('active')
    overlay.classList.toggle('active')
  })

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active')
      mobileMenu.classList.remove('active')
      overlay.classList.remove('active')
    })
  })

  overlay.addEventListener('click', () => {
    hamburger.classList.remove('active')
    mobileMenu.classList.remove('active')
    overlay.classList.remove('active')
  })
}
