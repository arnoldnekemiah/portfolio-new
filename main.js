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

const data = [
  {
    title: 'Crypto Market',
    description: 'Crypto Market is an app that lets you keep track of the top 100 cryptocurrencies ranked by their marketcaps.',
    technologies: ['React', 'JavaScript', 'Redux', 'API'],
    featureImg: './Images/crypto.png',
    liveLink: 'https://hilarious-narwhal-a7e78b.netlify.app/',
    linkSource: 'https://github.com/arnoldnekemiah/crypto-market',
    iconCancel: './Images/IconPop.png',
  },
  {
    title: 'Metflix',
    description: 'This is a single-page app that lists movies by categories. Users can like their favorite movies, open details about each movie and leave comments. Built with JavaScript.',
    technologies: ['JavaScript', 'ES6'],
    featureImg: './Images/metlix.png',
    liveLink: 'https://arnoldnekemiah.github.io/Metflix/',
    linkSource: 'https://github.com/arnoldnekemiah/Metflix',
    iconCancel: './Images/IconPop.png',
  },
  {
    title: 'Space Travellers Hub',
    description: 'This website contain three webpages with rockets, mission, and my profile. In the rocket page we will fetch data from Space X real data from API and the missions. Visitors can select their rockets and the missions from the current website.',
    technologies: ['React', 'JavaScript', 'Redux'],
    featureImg: './images/space.png',
    liveLink: 'https://space-x-travelers-hub.onrender.com/',
    linkSource: 'https://github.com/Mahdi-Niazi/space-travelers-hub',
    iconCancel: './images/IconPop.png',
  },
  {
    title: 'Developer School',
    description: "We Present to You the ultimate Coding School.A web/mobile app development bootcamp teaches programming, design, and deployment skills. It's an intensive, hands-on course led by professionals, preparing participants for a career in tech. ",
    technologies: ['HTML', 'CSS', 'Javascript'],
    featureImg: './images/devSchool.png',
    liveLink: 'https://arnoldnekemiah.github.io/Developer-school/',
    linkSource: 'https://github.com/arnoldnekemiah/Developer-school',
    iconCancel: './Images/IconPop.png',
  },
  {
    title: 'Multi Post Stories',
    description: 'Coming Soon',
    technologies: ['Openings', 'Middlegame', 'Endgame'],
    featureImg: './Images/Snapshoot-Portfolio.png',
    liveLink: 'https://arnoldnekemiah.github.io/portfolio-m/',
    linkSource: 'https://github.com/arnoldnekemiah/portfolio-new',
    iconCancel: './Images/IconPop.png',
  },
  {
    title: 'Multi Post Stories',
    description: 'Coming Soon',
    technologies: ['HTML', 'Bootstrap', 'Typescript'],
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
    <!-- Remove the description from here -->
    <ul class="profesional-Art-ul">
      ${project.technologies.map((tech) => `<li class="profesional-Art-li">${tech}</li>`).join('')}
    </ul>
  </div>
  <a href="${index + 2}" id="hide-me" class="profesional-Art-btm hide button popup">See Project</a>
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
          <!-- Include the description here -->
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