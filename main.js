//mobile menu
let mobile_menu = document.getElementById('menu-popup');
let openMenuButton = document.getElementById("btn-menu");
let closeMenuButton = document.querySelector('.close');
let links = document.querySelectorAll('.nav-link a');

function openMenu() {
  mobile_menu.style.display = 'flex';
}

openMenuButton.addEventListener('click', openMenu);

function closeMenu() {
  mobile_menu.style.display = 'none';
}

closeMenuButton.addEventListener('click', closeMenu);

links.forEach((link) => {
  link.addEventListener('click', () => {
    mobile_menu.style.display = 'none';
  });
});
