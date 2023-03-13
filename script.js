const menubar = document.querySelector('.hamburger');
const navmenu = document.querySelector('.nav-menu');

menubar.addEventListener('click', () => {
  menubar.classList.toggle('active');
  navmenu.classList.toggle('active');
});