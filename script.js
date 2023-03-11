const menubar = document.querySelector('.hamburger');
const navmenu = document.querySelector('.nav-menu');
// const open = document.querySelectorAll('.button');
menubar.addEventListener('click', () => {
  menubar.classList.toggle('active');
  navmenu.classList.toggle('active');
});

const sectioncard = document.querySelector('.project1');
const openerButton = document.querySelector('.button1');
openerButton.addEventListener('click', () => {
  const main = document.createElement('div');
  main.className = 'main';
  const maincard = document.createElement('div');
  maincard.className = 'maincard';
  maincard.innerHTML = `
  <button class="close-button2">&times;</button>
  <div>
 
  <img  class = "popup-image"src="images/pop-up/Snapshoot Portfolio.png" alt="">
 </div>
       <div class ="frame18"> <button class="first-button1" type="button" id="messagep">See source <img src="images/pop-up/button-icons/github.png" alt=""></button>
        <button class="first-button2" type="button" id="messagep">See live <img src="images/pop-up/button-icons/Icon.png" alt=""></button>
    <h3 class="popup-par">Keeping track of hundreds of <br> components</h3></div>
    <ul class="popup-list">
      <li class="ruby">Codekit</li>
      <li class="css">Github</li>
      <li class="javascript">JavaScript</li>
      <li class="html">Bootstrap</li>
      <li class="html">Terminal</li>
      <li class="html">Codepen</li>
    </ul>
    <div class ="lorem"><h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</h2></div>
  `;
  sectioncard.appendChild(main);
  sectioncard.appendChild(maincard);

  const closeButton2 = document.querySelector('.close-button2');
  closeButton2.addEventListener('click', () => {
    sectioncard.removeChild(maincard);
    sectioncard.removeChild(main);
  });
});

const sectioncard2 = document.querySelector('.project-2');
const openerButton2 = document.querySelector('.button2');
openerButton2.addEventListener('click', () => {
  const main = document.createElement('div');
  main.className = 'main';
  const maincard = document.createElement('div');
  maincard.className = 'maincard';
  maincard.innerHTML = `
  <button class="close-button2">&times;</button>
  <div>
 
  <img  class = "popup-image"src="images/pop-up/Snapshoot Portfolio.png" alt="">
 </div>
       <div class ="frame18"> <button class="first-button1" type="button" id="messagep">See source <img src="images/pop-up/button-icons/github.png" alt=""></button>
        <button class="first-button2" type="button" id="messagep">See live <img src="images/pop-up/button-icons/Icon.png" alt=""></button>
    <h3 class="popup-par">Keeping track of hundreds of <br> components</h3></div>
    <ul class="popup-list">
      <li class="ruby">Codekit</li>
      <li class="css">Github</li>
      <li class="javascript">JavaScript</li>
      <li class="html">Bootstrap</li>
      <li class="html">Terminal</li>
      <li class="html">Codepen</li>
    </ul>
    <div class ="lorem"><h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</h2></div>
  `;
  sectioncard2.appendChild(main);
  sectioncard2.appendChild(maincard);

  const closeButton2 = document.querySelector('.close-button2');
  closeButton2.addEventListener('click', () => {
    sectioncard2.removeChild(maincard);
    sectioncard2.removeChild(main);
  });
});

const sectioncard3 = document.querySelector('.project-3');
const openerButton3 = document.querySelector('.button3');
openerButton3.addEventListener('click', () => {
  const main = document.createElement('div');
  main.className = 'main';
  const maincard = document.createElement('div');
  maincard.className = 'maincard';
  maincard.innerHTML = `
  <button class="close-button2">&times;</button>
  <div>
 
  <img  class = "popup-image"src="images/pop-up/Snapshoot Portfolio.png" alt="">
 </div>
       <div class ="frame18"> <button class="first-button1" type="button" id="messagep">See source <img src="images/pop-up/button-icons/github.png" alt=""></button>
        <button class="first-button2" type="button" id="messagep">See live <img src="images/pop-up/button-icons/Icon.png" alt=""></button>
    <h3 class="popup-par">Keeping track of hundreds of <br> components</h3></div>
    <ul class="popup-list">
      <li class="ruby">Codekit</li>
      <li class="css">Github</li>
      <li class="javascript">JavaScript</li>
      <li class="html">Bootstrap</li>
      <li class="html">Terminal</li>
      <li class="html">Codepen</li>
    </ul>
    <div class ="lorem"><h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</h2></div>
  `;
  sectioncard3.appendChild(main);
  sectioncard3.appendChild(maincard);

  const closeButton2 = document.querySelector('.close-button2');
  closeButton2.addEventListener('click', () => {
    sectioncard3.removeChild(maincard);
    sectioncard3.removeChild(main);
  });
});

const sectioncard4 = document.querySelector('.project-4');
const openerButton4 = document.querySelector('.button4');
openerButton4.addEventListener('click', () => {
  const main = document.createElement('div');
  main.className = 'main';
  const maincard = document.createElement('div');
  maincard.className = 'maincard';
  maincard.innerHTML = `
  <button class="close-button2">&times;</button>
  <div>
 
  <img  class = "popup-image"src="images/pop-up/Snapshoot Portfolio.png" alt="">
 </div>
       <div class ="frame18"> <button class="first-button1" type="button" id="messagep">See source <img src="images/pop-up/button-icons/github.png" alt=""></button>
        <button class="first-button2" type="button" id="messagep">See live <img src="images/pop-up/button-icons/Icon.png" alt=""></button>
    <h3 class="popup-par">Keeping track of hundreds of <br> components</h3></div>
    <ul class="popup-list">
      <li class="ruby">Codekit</li>
      <li class="css">Github</li>
      <li class="javascript">JavaScript</li>
      <li class="html">Bootstrap</li>
      <li class="html">Terminal</li>
      <li class="html">Codepen</li>
    </ul>
    <div class ="lorem"><h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</h2></div>
  `;
  sectioncard4.appendChild(main);
  sectioncard4.appendChild(maincard);

  const closeButton2 = document.querySelector('.close-button2');
  closeButton2.addEventListener('click', () => {
    sectioncard4.removeChild(maincard);
    sectioncard4.removeChild(main);
  });
});

const sectioncard5 = document.querySelector('.project-5');
const openerButton5 = document.querySelector('.button5');
openerButton5.addEventListener('click', () => {
  const main = document.createElement('div');
  main.className = 'main';
  const maincard = document.createElement('div');
  maincard.className = 'maincard';
  maincard.innerHTML = `
  <button class="close-button2">&times;</button>
  <div>
 
  <img  class = "popup-image"src="images/pop-up/Snapshoot Portfolio.png" alt="">
 </div>
       <div class ="frame18"> <button class="first-button1" type="button" id="messagep">See source <img src="images/pop-up/button-icons/github.png" alt=""></button>
        <button class="first-button2" type="button" id="messagep">See live <img src="images/pop-up/button-icons/Icon.png" alt=""></button>
    <h3 class="popup-par">Keeping track of hundreds of <br> components</h3></div>
    <ul class="popup-list">
      <li class="ruby">Codekit</li>
      <li class="css">Github</li>
      <li class="javascript">JavaScript</li>
      <li class="html">Bootstrap</li>
      <li class="html">Terminal</li>
      <li class="html">Codepen</li>
    </ul>
    <div class ="lorem"><h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</h2></div>
  `;
  sectioncard5.appendChild(main);
  sectioncard5.appendChild(maincard);

  const closeButton2 = document.querySelector('.close-button2');
  closeButton2.addEventListener('click', () => {
    sectioncard5.removeChild(maincard);
    sectioncard5.removeChild(main);
  });
});

const sectioncard6 = document.querySelector('.project-6');
const openerButton6 = document.querySelector('.button6');
openerButton6.addEventListener('click', () => {
  const main = document.createElement('div');
  main.className = 'main';
  const maincard = document.createElement('div');
  maincard.className = 'maincard';
  maincard.innerHTML = `
  <button class="close-button2">&times;</button>
  <div>
 
  <img  class = "popup-image"src="images/pop-up/Snapshoot Portfolio.png" alt="">
 </div>
       <div class ="frame18"> <button class="first-button1" type="button" id="messagep">See source <img src="images/pop-up/button-icons/github.png" alt=""></button>
        <button class="first-button2" type="button" id="messagep">See live <img src="images/pop-up/button-icons/Icon.png" alt=""></button>
    <h3 class="popup-par">Keeping track of hundreds of <br> components</h3></div>
    <ul class="popup-list">
      <li class="ruby">Codekit</li>
      <li class="css">Github</li>
      <li class="javascript">JavaScript</li>
      <li class="html">Bootstrap</li>
      <li class="html">Terminal</li>
      <li class="html">Codepen</li>
    </ul>
    <div class ="lorem"><h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</h2></div>
  `;
  sectioncard6.appendChild(main);
  sectioncard6.appendChild(maincard);

  const closeButton2 = document.querySelector('.close-button2');
  closeButton2.addEventListener('click', () => {
    sectioncard6.removeChild(maincard);
    sectioncard6.removeChild(main);
  });
});

const contactForm = document.getElementById('form-id');
const contactEmail = document.getElementById('email');
const contactError = document.getElementById('errormessage');

contactForm.addEventListener('submit', (event) => {
  if (contactEmail.value.toLowerCase() !== contactEmail.value) {
    event.preventDefault();
    contactError.innerText = 'please type your email in lowercase. form not submitted';
  }
});