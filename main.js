// mobile menu
const mobileMenu = document.getElementById('menu-popup');
const openMenuButton = document.getElementById('btn-menu');
const closeMenuButton = document.querySelector('.close');
const links = document.querySelectorAll('.nav-link a');
const body = document.body;

function openMenu() {
  mobileMenu.style.display = 'flex';
  body.classList.add('menu-open');
}

openMenuButton.addEventListener('click', openMenu);

function closeMenu() {
  mobileMenu.style.display = 'none';
  body.classList.remove('menu-open');
}

closeMenuButton.addEventListener('click', closeMenu);

links.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    body.classList.remove('menu-open');
  });
});
