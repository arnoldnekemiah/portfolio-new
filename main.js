// Humbuger menu
const mobileMenu = document.getElementById('menu-popup');
const openMenuButton = document.getElementById('btn-menu');
const closeMenuButton = document.querySelector('.close');
const links = document.querySelectorAll('.nav-link a');
const { body } = document;

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

function checkWindowSize() {
  if (window.innerWidth > 768) {
    mobileMenu.style.display = 'none';
    body.classList.remove('menu-open');
  } else {
    mobileMenu.style.display = 'flex';
  }
}

window.onresize = checkWindowSize;

// Array of project data
const projects = [
  {
    heading: 'Profesional Art Printing Data',
    content: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    technologies: ['html', 'CSS', 'bootstrap', 'Ruby'],
  },
  {
    heading: 'Profesional Art Printing Data',
    content: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    technologies: ['html', 'CSS', 'bootstrap', 'Ruby'],
  },
  {
    heading: 'Profesional Art Printing Data',
    content: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    technologies: ['html', 'CSS', 'bootstrap', 'Ruby'],
  },
  {
    heading: 'Profesional Art Printing Data',
    content: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    technologies: ['html', 'CSS', 'bootstrap', 'Ruby'],
  },
  {
    heading: 'Profesional Art Printing Data',
    content: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    technologies: ['html', 'CSS', 'bootstrap', 'Ruby'],
  },
  {
    heading: 'Profesional Art Printing Data',
    content: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    technologies: ['html', 'CSS', 'bootstrap', 'Ruby'],
  },
];

// Create and append the div elements for the work section dynamically
const workContainer = document.querySelector('.work-container');
projects.forEach((project, index) => {
  const card = document.createElement('div');
  if (index === 0) {
    card.className = 'art-container project-card';
  } else if (index === 1) {
    card.className = 'art-container1 project-card';
  } else if (index === 2) {
    card.className = 'art-container2 project-card';
  } else if (index === 3) {
    card.className = 'art-container1 project-card';
  } else if (index === 4) {
    card.className = 'art-container2 project-card';
  } else {
    card.className = 'art-container project-card';
  }
  card.innerHTML = `
    <div class="mycard">
      <h3 class="profesional-Art-heading">${project.heading}</h3>
      <p class="profesional-Art-content">${project.content}</p>
      <ul class="profesional-Art-ul">
        ${project.technologies.map((tech) => `<li class="profesional-Art-li">${tech}</li>`).join('')}
      </ul>
    </div>
    <a href="#${index + 2}" id="hide-me" class="profesional-Art-btm hide button popup">See Project</a>
  `;
  workContainer.appendChild(card);
});

// popup window
const data = [
  {
    title: 'Multi Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    featureImg: './images/Snapshoot-Portfolio.png',
    liveLink: 'https://arnoldnekemiah.github.io/portfolio-new/',
    linkSource: 'https://github.com/arnoldnekemiah/portfolio-new',
    iconCancel: './Images/IconPop.png',
  },
  {
    title: 'Multi Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    technologies: ['Ruby', 'Postgrel', 'Ruby on Rails'],
    featureImg: './Images/Snapshoot-Portfolio.png',
    liveLink: 'https://arnoldnekemiah.github.io/portfolio-new/',
    linkSource: 'https://github.com/arnoldnekemiah/portfolio-new',
    iconCancel: './Images/IconPop.png',
  },
  {
    title: 'Multi Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    technologies: ['Dart', 'Fluter', 'Java'],
    featureImg: './images/Snapshoot-Portfolio.png',
    liveLink: 'https://arnoldnekemiah.github.io/portfolio-new/',
    linkSource: 'https://github.com/arnoldnekemiah/portfolio-new',
    iconCancel: './images/IconPop.png',
  },
  {
    title: 'Multi Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    technologies: ['Golang', 'Pearl', 'Php'],
    featureImg: './Images/Snapshoot-Portfolio.png',
    liveLink: 'https://arnoldnekemiah.github.io/portfolio-new/',
    linkSource: 'https://github.com/arnoldnekemiah/portfolio-new',
    iconCancel: './Images/IconPop.png',
  },
  {
    title: 'Multi Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    technologies: ['Openings', 'Middlegame', 'Endgame'],
    featureImg: './Images/Snapshoot-Portfolio.png',
    liveLink: 'https://arnoldnekemiah.github.io/portfolio-m/',
    linkSource: 'https://github.com/arnoldnekemiah/portfolio-new',
    iconCancel: './Images/IconPop.png',
  },
  {
    title: 'Keeping track of hundreds  of components website5',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    featureImg: './Images/Snapshoot-Portfolio2.png',
    liveLink: 'https://arnoldnekemiah.github.io/portfolio-new/',
    linkSource: 'https://github.com/arnoldnekemiah/portfolio-new',
    iconCancel: './Images/IconPop.png',
  },
  {
    title: 'Multi Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    featureImg: './Images/Snapshoot-Portfolio2.png',
    liveLink: 'https://arnoldnekemiah.github.io/portfolio-new/',
    linkSource: 'https://github.com/arnoldnekemiah/portfolio-new',
    iconCancel: './Images/IconPop.png',
  },
];
const seeProject = document.querySelectorAll('.popup');
const section = document.createElement('div');
section.className = 'popup-container';
let content = '';
data.forEach((item) => {
  content = `
  <div class="popup-details-container">
       <span class="popup-name-image">
          <h1 class="popup-name">${item.title}</h1>
          <img src=${item.iconCancel} class="popup-image"> 
       </span>
    <div class="evelop">
    <div class="conatainer1">
      <ul class="popup-unorded-list">
          ${item.technologies.map((itemList) => `<li class="popup-list">${itemList}</li>`).join('')}
      </ul>
    <span class="desktop-diff">
          <img src=${item.featureImg} class="popup-feature-img">
    </span>
</div>

  <div class="left-side">
    <p class="popup-description">${item.description}</p>
    <span class="popup-button">
      <button class="button popup-button-1">
        <a href=${item.liveLink}>See live</a>
        <img class="git" src="./Images/Iconic.png">
      </button>
      <button class="button popup-button-1">
        <a href=${item.linkSource}>See Source</a>
        <img src="./Images/Vectoric.png">
      </button>
    </span>
  </div>
    </div>
      
  </div> 
  `;
});

section.innerHTML = content;
function closePopup() {
  document.body.removeChild(section);
  document.body.style.overflow = 'scroll';
}
function createPopup() {
  document.body.appendChild(section);
  document.body.style.overflow = 'hidden';
  const closeProject = document.querySelector('.popup-image');
  closeProject.addEventListener('click', closePopup);
}
for (let i = 0; i < seeProject.length; i += 1) {
  seeProject[i].addEventListener('click', createPopup);
}
