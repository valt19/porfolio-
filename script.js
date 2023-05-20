const menubar = document.querySelector('.hamburger');
const navmenu = document.querySelector('.nav-menu');
menubar.addEventListener('click', () => {
  menubar.classList.toggle('active');
  navmenu.classList.toggle('active');
});

// Popup window section

const array = [
  {
    name: 'Keeping track of hundreds of components',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ",
    mobileImg: './images/pop-up/mobile.png',
    liveImg: './images/pop-up/button-icons/Icon.png',
    githubImg: './images/pop-up/button-icons/github.png',
    desktopImg: './images/pop-up/Snapshoot Portfolio.png',
    tech: [
      'Ruby on rails',
      'css',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
  },
];

const body = document.querySelector('body');
const openerButton = document.querySelector('.button1');

openerButton.addEventListener('click', () => {
  const main = document.createElement('div');
  main.className = 'main';
  const maincard = document.createElement('div');
  maincard.className = 'maincard';
  maincard.innerHTML = `

  <button class="close-button2">&times;</button>
  <div>
 
  <img  class = "popup-image"src="${array[0].mobileImg}" alt="">
  <img  class = "popup-image2"src="${array[0].desktopImg}" alt="">
 </div>
 <div class="headline">
    <h2 class="popup-par">${array[0].name}</h2>
    <div class ="frame18">
       <button class="first-button2" type="button" id="messagep">See live <img src="${array[0].liveImg}" alt=""></button>
       <button class="first-button1" type="button" id="messagep">See source <img src="${array[0].githubImg}" alt=""></button>
    </div>
  </div>     
    <ul class="popup-list">
      <li class="ruby">${array[0].tech[0]}</li>
      <li class="css">${array[0].tech[1]}</li>
      <li class="javascript">${array[0].tech[2]}</li>
      <li class="html">${array[0].tech[3]}</li>
      <li class="html">${array[0].tech[4]}</li>
      <li class="html">${array[0].tech[5]}</li>
    </ul>
    <div class ="lorem">${array[0].desc}</div>
    <div class ="frame19"><button class="mobile-first-button1" type="button" id="messagep">See source <img class="btn-img" src="${array[0].githubImg}" alt=""></button>
       <button class="mobile-first-button2" type="button" id="messagep">See live <img class="btn-img" src="${array[0].liveImg}" alt=""></button></div>
    
  `;

  main.appendChild(maincard);
  body.appendChild(main);

  const closeButton2 = document.querySelector('.close-button2');
  closeButton2.addEventListener('click', () => {
    main.removeChild(maincard);
    body.removeChild(main);
  });
});

const openerButton2 = document.querySelector('.button2');
openerButton2.addEventListener('click', () => {
  const main = document.createElement('div');
  main.className = 'main';
  const maincard = document.createElement('div');
  maincard.className = 'maincard';
  maincard.innerHTML = `

  <button class="close-button2">&times;</button>
  <div>
 
  <img  class = "popup-image"src="${array[0].mobileImg}" alt="">
  <img  class = "popup-image2"src="${array[0].desktopImg}" alt="">
 </div>
 <div class="headline">
    <h2 class="popup-par">${array[0].name}</h2>
    <div class ="frame18">
       <button class="first-button2" type="button" id="messagep">See live <img src="${array[0].liveImg}" alt=""></button>
       <button class="first-button1" type="button" id="messagep">See source <img src="${array[0].githubImg}" alt=""></button>
    </div>
  </div>   
    <ul class="popup-list">
      <li class="ruby">${array[0].tech[0]}</li>
      <li class="css">${array[0].tech[1]}</li>
      <li class="javascript">${array[0].tech[2]}</li>
      <li class="html">${array[0].tech[3]}</li>
      <li class="html">${array[0].tech[4]}</li>
      <li class="html">${array[0].tech[5]}</li>
    </ul>
    <div class ="lorem">${array[0].desc}</div>
    <div class ="frame19"><button class="mobile-first-button1" type="button" id="messagep">See source <img class="btn-img" src="${array[0].githubImg}" alt=""></button>
       <button class="mobile-first-button2" type="button" id="messagep">See live <img class="btn-img" src="${array[0].liveImg}" alt=""></button></div>
    `;

  main.appendChild(maincard);
  body.appendChild(main);

  const closeButton2 = document.querySelector('.close-button2');
  closeButton2.addEventListener('click', () => {
    main.removeChild(maincard);
    body.removeChild(main);
  });
});

const openerButton3 = document.querySelector('.button3');
openerButton3.addEventListener('click', () => {
  const main = document.createElement('div');
  main.className = 'main';
  const maincard = document.createElement('div');
  maincard.className = 'maincard';
  maincard.innerHTML = `

  <button class="close-button2">&times;</button>
  <div>
 
  <img  class = "popup-image"src="${array[0].mobileImg}" alt="">
  <img  class = "popup-image2"src="${array[0].desktopImg}" alt="">
 </div>
 <div class="headline">
    <h2 class="popup-par">${array[0].name}</h2>
    <div class ="frame18">
       <button class="first-button2" type="button" id="messagep">See live <img src="${array[0].liveImg}" alt=""></button>
       <button class="first-button1" type="button" id="messagep">See source <img src="${array[0].githubImg}" alt=""></button>
    </div>
  </div>   
    <ul class="popup-list">
      <li class="ruby">${array[0].tech[0]}</li>
      <li class="css">${array[0].tech[1]}</li>
      <li class="javascript">${array[0].tech[2]}</li>
      <li class="html">${array[0].tech[3]}</li>
      <li class="html">${array[0].tech[4]}</li>
      <li class="html">${array[0].tech[5]}</li>
    </ul>
    <div class ="lorem">${array[0].desc}</div>
    <div class ="frame19"><button class="mobile-first-button1" type="button" id="messagep">See source <img class="btn-img" src="${array[0].githubImg}" alt=""></button>
       <button class="mobile-first-button2" type="button" id="messagep">See live <img class="btn-img" src="${array[0].liveImg}" alt=""></button></div>
    `;

  main.appendChild(maincard);
  body.appendChild(main);

  const closeButton2 = document.querySelector('.close-button2');
  closeButton2.addEventListener('click', () => {
    main.removeChild(maincard);
    body.removeChild(main);
  });
});

const openerButton4 = document.querySelector('.button4');
openerButton4.addEventListener('click', () => {
  const main = document.createElement('div');
  main.className = 'main';
  const maincard = document.createElement('div');
  maincard.className = 'maincard';
  maincard.innerHTML = `

  <button class="close-button2">&times;</button>
  <div>
 
  <img  class = "popup-image"src="${array[0].mobileImg}" alt="">
  <img  class = "popup-image2"src="${array[0].desktopImg}" alt="">
 </div>
 <div class="headline">
    <h2 class="popup-par">${array[0].name}</h2>
    <div class ="frame18">
       <button class="first-button2" type="button" id="messagep">See live <img src="${array[0].liveImg}" alt=""></button>
       <button class="first-button1" type="button" id="messagep">See source <img src="${array[0].githubImg}" alt=""></button>
    </div>
  </div>   
    <ul class="popup-list">
      <li class="ruby">${array[0].tech[0]}</li>
      <li class="css">${array[0].tech[1]}</li>
      <li class="javascript">${array[0].tech[2]}</li>
      <li class="html">${array[0].tech[3]}</li>
      <li class="html">${array[0].tech[4]}</li>
      <li class="html">${array[0].tech[5]}</li>
    </ul>
    <div class ="lorem">${array[0].desc}</div>
    <div class ="frame19"><button class="mobile-first-button1" type="button" id="messagep">See source <img class="btn-img" src="${array[0].githubImg}" alt=""></button>
       <button class="mobile-first-button2" type="button" id="messagep">See live <img class="btn-img" src="${array[0].liveImg}" alt=""></button></div>
    `;

  main.appendChild(maincard);
  body.appendChild(main);

  const closeButton2 = document.querySelector('.close-button2');
  closeButton2.addEventListener('click', () => {
    main.removeChild(maincard);
    body.removeChild(main);
  });
});

const openerButton5 = document.querySelector('.button5');
openerButton5.addEventListener('click', () => {
  const main = document.createElement('div');
  main.className = 'main';
  const maincard = document.createElement('div');
  maincard.className = 'maincard';
  maincard.innerHTML = `

  <button class="close-button2">&times;</button>
  <div>
 
  <img  class = "popup-image"src="${array[0].mobileImg}" alt="">
  <img  class = "popup-image2"src="${array[0].desktopImg}" alt="">
 </div>
 <div class="headline">
    <h2 class="popup-par">${array[0].name}</h2>
    <div class ="frame18">
       <button class="first-button2" type="button" id="messagep">See live <img src="${array[0].liveImg}" alt=""></button>
       <button class="first-button1" type="button" id="messagep">See source <img src="${array[0].githubImg}" alt=""></button>
    </div>
  </div>   
    <ul class="popup-list">
      <li class="ruby">${array[0].tech[0]}</li>
      <li class="css">${array[0].tech[1]}</li>
      <li class="javascript">${array[0].tech[2]}</li>
      <li class="html">${array[0].tech[3]}</li>
      <li class="html">${array[0].tech[4]}</li>
      <li class="html">${array[0].tech[5]}</li>
    </ul>
    <div class ="lorem">${array[0].desc}</div>
    <div class ="frame19"><button class="mobile-first-button1" type="button" id="messagep">See source <img class="btn-img" src="${array[0].githubImg}" alt=""></button>
       <button class="mobile-first-button2" type="button" id="messagep">See live <img class="btn-img" src="${array[0].liveImg}" alt=""></button></div>
    `;

  main.appendChild(maincard);
  body.appendChild(main);

  const closeButton2 = document.querySelector('.close-button2');
  closeButton2.addEventListener('click', () => {
    main.removeChild(maincard);
    body.removeChild(main);
  });
});

const openerButton6 = document.querySelector('.button6');
openerButton6.addEventListener('click', () => {
  const main = document.createElement('div');
  main.className = 'main';
  const maincard = document.createElement('div');
  maincard.className = 'maincard';
  maincard.innerHTML = `

  <button class="close-button2">&times;</button>
  <div>
 
  <img  class = "popup-image"src="${array[0].mobileImg}" alt="">
  <img  class = "popup-image2"src="${array[0].desktopImg}" alt="">
 </div>
 <div class="headline">
    <h2 class="popup-par">${array[0].name}</h2>
    <div class ="frame18">
       <button class="first-button2" type="button" id="messagep">See live <img src="${array[0].liveImg}" alt=""></button>
       <button class="first-button1" type="button" id="messagep">See source <img src="${array[0].githubImg}" alt=""></button>
    </div>
  </div>   
    <ul class="popup-list">
      <li class="ruby">${array[0].tech[0]}</li>
      <li class="css">${array[0].tech[1]}</li>
      <li class="javascript">${array[0].tech[2]}</li>
      <li class="html">${array[0].tech[3]}</li>
      <li class="html">${array[0].tech[4]}</li>
      <li class="html">${array[0].tech[5]}</li>
    </ul>
    <div class ="lorem">${array[0].desc}</div>
    <div class ="frame19"><button class="mobile-first-button1" type="button" id="messagep">See source <img class="btn-img" src="${array[0].githubImg}" alt=""></button>
       <button class="mobile-first-button2" type="button" id="messagep">See live <img class="btn-img" src="${array[0].liveImg}" alt=""></button></div>
    `;

  main.appendChild(maincard);
  body.appendChild(main);

  const closeButton2 = document.querySelector('.close-button2');
  closeButton2.addEventListener('click', () => {
    main.removeChild(maincard);
    body.removeChild(main);
  });
});

const contactForm = document.getElementById('form-id');
const contactEmail = document.getElementById('email');
const contactError = document.getElementById('errormessage');

contactForm.addEventListener('submit', (event) => {
  if (contactEmail.value.toLowerCase() !== contactEmail.value) {
    event.preventDefault();
    contactError.innerText = 'please type your email in LowerCase ,form not submitted';
    contactError.style.position = 'inherit';
  }
});
// Preserve data in the browser

const form = document.getElementById('form-id');
const nameInput = document.getElementById('name');
const message = document.getElementById('message');
const emailInput = document.getElementById('email');

form.addEventListener('input', () => {
  const formInfo = {
    name: nameInput.value,
    email: emailInput.value,
    message: message.value,
  };
  localStorage.setItem('formDetails', JSON.stringify(formInfo));
});

function displayInfo() {
  const info = JSON.parse(localStorage.getItem('formDetails'));
  if (info) {
    nameInput.value = info.name;
    emailInput.value = info.email;
    message.value = info.message;
  }
}

displayInfo();
myFunction();
myFunction2();
project();
closePopup();
popup();