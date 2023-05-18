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

// Save user data in local storage and data is prefilled when existent
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
  localStorage.setItem('contactData', JSON.stringify(contactData));
});

username.addEventListener('change', (e) => {
  contactData.email = email.value;
  contactData.username = e.target.value;
  contactData.message = message.value;
  localStorage.setItem('contactData', JSON.stringify(contactData));
});

message.addEventListener('change', (e) => {
  contactData.email = email.value;
  contactData.username = username.value;
  contactData.message = e.target.value;
  localStorage.setItem('contactData', JSON.stringify(contactData));
});