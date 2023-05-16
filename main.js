let mobile_menu = document.getElementById('menu-popup');
let openMenuButton = document.getElementById("btn-menu");
let closeMenuButton = document.getElementById('close');

function openMenu(){
    mobile_menu.classList.toggle("menu-popup");
    mobile_menu.style.display = 'flex';
}

openMenuButton.addEventListener('click', openMenu);

function closeMenu(){
    closeMenuButton.style.display = 'none';
    mobile_menu.style.display = 'none';

}

closeMenuButton.addEventListener('click', closeMenu);
const links = document.querySelectorAll('.nav-link a');
links.forEach();
