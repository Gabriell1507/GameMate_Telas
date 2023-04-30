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

document.addEventListener('click', (event) => {
    const isClickInside = menuContainer.contains(event.target) || menuBtn.contains(event.target);
  
    if (!isClickInside && menuOpen) {
      menuBtn.classList.remove('open');
      menuContainer.style.left = '-300px';
      menuOpen = false;
    }
  });

  const identificador = document.querySelector('.id-user span.id');
  function copiar() {
      navigator.clipboard.writeText(identificador.textContent);
  }