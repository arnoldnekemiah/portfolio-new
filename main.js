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

// Div elements for the work section
const card1 = document.createElement('div');
card1.className = 'art-container project-card';
card1.innerHTML = `
  <div class="mycard">
    <h3 class="profesional-Art-heading">
      Profesional Art Printing Data
    </h3>
    <p class="profesional-Art-content">
      A daily
      selection of privately personalized reads;
      no accounts or sign-ups required. has been the
      industry's standard
    </p>
    <ul class="profesional-Art-ul">
      <li class="profesional-Art-li">html</li>
      <li class="profesional-Art-li">CSS</li>
      <li class="profesional-Art-li">bootstrap</li>
      <li class="profesional-Art-li">Ruby</li>
    </ul>
  </div>
  <a href="#2" id="hide-me" class="profesional-Art-btm hide button popup">See Project</a>
`;

const card2 = document.createElement('div');
card2.className = 'art-container1 project-card';
card2.innerHTML = `
  <div class="mycard">
    <h3 class="profesional-Art-heading">
      Profesional Art Printing Data
    </h3>
    <p class="profesional-Art-content">
      A daily
      selection of privately personalized reads;
      no accounts or sign-ups required. has been the
      industry's standard
    </p>
    <ul class="profesional-Art-ul">
      <li class="profesional-Art-li">html</li>
      <li class="profesional-Art-li">bootstrap</li>
      <li class="profesional-Art-li">Ruby</li>
    </ul>
  </div>
  <a href="#3" id="hide-me" class="profesional-Art-btm popup hide button hide-me">See Project</a>
`;

const card3 = document.createElement('div');
card3.className = 'art-container2 project-card';
card3.innerHTML = `
  <div class="mycard">
    <h3 class="profesional-Art-heading">
      Profesional Art Printing Data
    </h3>
    <p class="profesional-Art-content">
      A daily
      selection of privately personalized reads;
      no accounts or sign-ups required. has been the
      industry's standard
    </p>
    <ul class="profesional-Art-ul">
      <li class="profesional-Art-li">html</li>
      <li class="profesional-Art-li">bootstrap</li>
      <li class="profesional-Art-li">Ruby</li>
    </ul>
  </div>
  <a href="#4" id="hide-me" class="profesional-Art-btm hide button popup">See Project</a>
`;

const card4 = document.createElement('div');
card4.className = 'art-container project-card';
card4.innerHTML = `
  <div class="mycard">
    <h3 class="profesional-Art-heading">
      Profesional Art Printing Data
    </h3>
    <p class="profesional-Art-content">
      A daily
      selection of privately personalized reads;
      no accounts or sign-ups required. has been the
      industry's standard
    </p>
    <ul class="profesional-Art-ul">
      <li class="profesional-Art-li">html</li>
      <li class="profesional-Art-li">bootstrap</li>
      <li class="profesional-Art-li">Ruby</li>
    </ul>
  </div>
  <a href="#5" id="hide-me" class="profesional-Art-btm hide button popup">See Project</a>
`;

const card5 = document.createElement('div');
card5.className = 'art-container1 project-card';
card5.innerHTML = `
  <div class="mycard">
    <h3 class="profesional-Art-heading">
      Profesional Art Printing Data
    </h3>
    <p class="profesional-Art-content">
      A daily
      selection of privately personalized reads;
      no accounts or sign-ups required. has been the
      industry's standard
    </p>
    <ul class="profesional-Art-ul">
      <li class="profesional-Art-li">html</li>
      <li class="profesional-Art-li">bootstrap</li>
      <li class="profesional-Art-li">Ruby</li>
    </ul>
  </div>
  <a href="#6" id="hide-me" class="profesional-Art-btm hide button popup">See Project</a>
`;

const card6 = document.createElement('div');
card6.className = 'art-container2 project-card';
card6.innerHTML = `
  <div class="mycard">
    <h3 class="profesional-Art-heading">
      Profesional Art Printing Data
    </h3>
    <p class="profesional-Art-content">
      A daily
      selection of privately personalized reads;
      no accounts or sign-ups required. has been the
      industry's standard
    </p>
    <ul class="profesional-Art-ul">
      <li class="profesional-Art-li">html</li>
      <li class="profesional-Art-li">bootstrap</li>
      <li class="profesional-Art-li">Ruby</li>
    </ul>
  </div>
  <a href="#7" id="hide-me" class="profesional-Art-btm button popup">See Project</a>
`;

// Append the div elements to the section with class "work-container"
const workContainer = document.querySelector('.work-container');
workContainer.appendChild(card1);
workContainer.appendChild(card2);
workContainer.appendChild(card3);
workContainer.appendChild(card4);
workContainer.appendChild(card5);
workContainer.appendChild(card6);

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
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    featureImg: './Images/Snapshoot-Portfolio.png',
    liveLink: 'https://arnoldnekemiah.github.io/portfolio-new/',
    linkSource: 'https://github.com/arnoldnekemiah/portfolio-new',
    iconCancel: './Images/IconPop.png',
  },
  {
    title: 'Multi Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    featureImg: './images/Snapshoot-Portfolio.png',
    liveLink: 'https://arnoldnekemiah.github.io/portfolio-new/',
    linkSource: 'https://github.com/arnoldnekemiah/portfolio-new',
    iconCancel: './images/IconPop.png',
  },
  {
    title: 'Multi Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    featureImg: './Images/Snapshoot-Portfolio.png',
    liveLink: 'https://arnoldnekemiah.github.io/portfolio-new/',
    linkSource: 'https://github.com/arnoldnekemiah/portfolio-new',
    iconCancel: './Images/IconPop.png',
  },
  {
    title: 'Multi Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    featureImg: './Images/Snapshoot-Portfolio.png',
    liveLink: 'https://arnoldnekemiah.github.io/portfolio-m/',
    linkSource: 'https://github.com/arnoldnekemiah/portfolio-new',
    iconCancel: './Images/IconPop.png',
  },
  {
    title: 'Keeping track of hundreds  of components website',
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
        <a href=${item.liveLink}>See Project</a>
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
