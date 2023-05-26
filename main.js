// Humbuger menu
const mobileMenu = document.getElementById('menu-popup');
const openMenuButton = document.getElementById('btn-menu');
const closeMenuButton = document.querySelector('.close');
const links = document.querySelectorAll('.nav-link a');
const { body } = document;

function openMenu() {
  mobileMenu.style.display = 'flex';
  body.classList('menu-open');
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

const data = [
  {
    title: 'Multi Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    technologies: ['HTML', 'Bootstrap', 'Nodejs'],
    featureImg: './images/Snapshoot-Portfolio.png',
    liveLink: 'https://arnoldnekemiah.github.io/portfolio-new/',
    linkSource: 'https://github.com/arnoldnekemiah/portfolio-new',
    iconCancel: './Images/IconPop.png',
  },
  {
    title: 'Multi Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    technologies: ['Ruby', 'Postgrel', 'Node.js'],
    featureImg: './Images/Snapshoot-Portfolio.png',
    liveLink: 'https://arnoldnekemiah.github.io/portfolio-new/',
    linkSource: 'https://github.com/arnoldnekemiah/portfolio-new',
    iconCancel: './Images/IconPop.png',
  },
  {
    title: 'Multi Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    technologies: ['Dart', 'Fluter', 'Java'],
    featureImg: './images/Snapshoot-Portfolio2.png',
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
    technologies: ['HTML', 'Bootstrap', 'Typescript'],
    featureImg: './Images/Snapshoot-Portfolio2.png',
    liveLink: 'https://arnoldnekemiah.github.io/portfolio-new/',
    linkSource: 'https://github.com/arnoldnekemiah/portfolio-new',
    iconCancel: './Images/IconPop.png',
  },
];

const workContainer = document.querySelector('.work-container');
data.forEach((project, index) => {
  const card = document.createElement('div');
  card.className = `art-container art-container${index + 1} project-card`;

  card.innerHTML = `
    <div class="mycard">
      <h3 class="profesional-Art-heading">${project.title}</h3>
      <p class="profesional-Art-content">${project.content}</p>
      <ul class="profesional-Art-ul">
        ${project.technologies.map((tech) => `<li class="profesional-Art-li">${tech}</li>`).join('')}
      </ul>
    </div>
    <a href="#${index + 2}" id="hide-me" class="profesional-Art-btm hide button popup">See Project</a>
  `;
  workContainer.appendChild(card);
});

const seeProject = document.querySelectorAll('.popup');

function createPopup(project) {
  const section = document.createElement('div');
  section.className = 'popup-container';

  section.innerHTML = `
    <div class="popup-details-container">
      <span class="popup-name-image">
        <h1 class="popup-name">${project.title}</h1>
        <img src=${project.iconCancel} class="popup-image">
      </span>
      <div class="evelop">
        <div class="conatainer1">
          <ul class="popup-unorded-list">
            ${project.technologies.map((itemList) => `<li class="popup-list">${itemList}</li>`).join('')}
          </ul>
          <span class="desktop-diff">
            <img src=${project.featureImg} class="popup-feature-img">
          </span>
        </div>
        <div class="left-side">
          <p class="popup-description">${project.description}</p>
          <span class="popup-button">
            <button class="button popup-button-1">
              <a href=${project.liveLink}>See live</a>
              <img class="git" src="./Images/Iconic.png">
            </button>
            <button class="button popup-button-1">
              <a href=${project.linkSource}>See Source</a>
              <img src="./Images/Vectoric.png">
            </button>
          </span>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(section);
  document.body.style.overflow = 'hidden';

  const closeProject = section.querySelector('.popup-image');
  closeProject.addEventListener('click', () => {
    document.body.removeChild(section);
    document.body.style.overflow = 'scroll';
  });
}

seeProject.forEach((button, index) => {
  button.addEventListener('click', () => {
    createPopup(data[index]);
  });
});

// form validation
const form = document.querySelector('.form');
const emailInput = document.querySelector('#mail');
const errorMessage = document.querySelector('#error-message');

form.addEventListener('submit', (event) => {
  const emailValue = emailInput.value;
  if (emailValue === emailValue.toLowerCase()) {
    errorMessage.style.display = 'none';
  } else {
    event.preventDefault();
    errorMessage.style.display = 'flex';
  }
});

// Save user data
// using localstroage
const email = document.getElementById('mail');
const username = document.getElementById('username');
const message = document.getElementById('message');

const contactData = {
  email,
  username,
  message,
};
if (localStorage.getItem('contact-data') !== null) {
  const data = JSON.parse(localStorage.getItem('contact-data'));
  email.value = data.email;
  username.value = data.username;
  message.value = data.message;
}

email.addEventListener('change', (e) => {
  contactData.email = e.target.value;
  contactData.username = username.value;
  contactData.message = message.value;
  localStorage.setItem('contact-data', JSON.stringify(contactData));
});

username.addEventListener('change', (e) => {
  contactData.username = e.target.value;
  contactData.message = message.value;
  contactData.email = email.value;
  localStorage.setItem('contact-data', JSON.stringify(contactData));
});

message.addEventListener('change', (e) => {
  contactData.message = e.target.value;
  contactData.email = email.value;
  contactData.username = username.value;
  localStorage.setItem('contact-data', JSON.stringify(contactData));
});