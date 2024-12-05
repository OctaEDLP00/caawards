/** @type {HTMLDivElement | null} */
const hamburger = document.querySelector('.hamburger')
/** @type {HTMLDivElement | null} */
const mobileMenu = document.querySelector('.mobile-menu')
/** @type {HTMLDivElement | null} */
const overlay = document.querySelector('.overlay')
/** @type {NodeListOf<HTMLAnchorElement>} */
const navLinks = document.querySelectorAll('.link')

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
