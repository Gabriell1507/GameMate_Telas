const menuBtn = document.querySelector('.menu');
const menuContainer = document.querySelector('.menu-container');

let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuContainer.style.left = '0';
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuContainer.style.left = '-300px';
    menuOpen = false;
  }
});
