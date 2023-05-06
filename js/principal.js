const gameImages = [
    "https://images.igdb.com/igdb/image/upload/t_cover_big/co6bo0.png",
    "https://images.igdb.com/igdb/image/upload/t_cover_big/co68ag.jpg",
    "https://images.igdb.com/igdb/image/upload/t_cover_big/co4v34.jpg",
    "https://images.igdb.com/igdb/image/upload/t_cover_big/co68l4.jpg",
    "https://images.igdb.com/igdb/image/upload/t_cover_big/co2gn3.jpg",
    "https://images.igdb.com/igdb/image/upload/t_cover_big/co696g.jpg"
  ];
  
  const gameTitles = [
    "Resident Evil 4 Remake",
    "Atomic Heart",
    "Wo Long",
    "Crime Trip",
    "Hogwarts Legacy",
    "Contraband Police"
  ];
  
  const containerCover = document.querySelector(".game-covers");
  
  for (let i = 0; i < gameImages.length; i++) {
    // cria a div da capa do jogo
    const divJogo = document.createElement("div");
    divJogo.style.display = "flex";
    divJogo.style.flexDirection = "column";
    divJogo.style.alignItems = "center";
  
    // adiciona a imagem da capa do jogo
    const imagemJogo = document.createElement("img");
    imagemJogo.src = gameImages[i];
    divJogo.appendChild(imagemJogo);
  
    // adiciona o título do jogo
    const tituloJogo = document.createElement("h2");
    tituloJogo.innerHTML = gameTitles[i];
    divJogo.appendChild(tituloJogo);
  
    // adiciona a div do jogo à div de capas
    containerCover.appendChild(divJogo);
  }

  
  
  
  
const btnExpandir = document.querySelector('.btn-expandir');const menuLateral = document.querySelector('.menu-lateral');const menu = document.querySelector('.menu');btnExpandir.addEventListener('click', () => {menuLateral.classList.toggle('active');menu.classList.toggle('active');});
document.addEventListener('click', (event) => {const isClickInside = menuLateral.contains(event.target) || btnExpandir.contains(event.target);
if (!isClickInside) {menuLateral.classList.remove('active');menu.classList.remove('active');}});
