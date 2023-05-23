import {getInfos} from "./api.js";
import {getGameInfoById} from "./game.js";

const sectionCards = document.getElementById('gamesCards')
const carousel = document.querySelector('.carousel_inner')
const btnPrev = document.querySelector('.carousel_btn-prev')
const btnNext = document.querySelector('.carousel_btn-next')



export function showGames(response) {
    for (let i = 0; i < response.results.length; i++) {
        const gameCardId = response.results[i].id;

        // criação de cards
        const gameCard = document.createElement("div");
        gameCard.classList.add("gameCard");

        gameCard.dataset.id = gameCardId;
        sectionCards.append(gameCard);

        // Image
        const gameImg = document.createElement("img");
        gameImg.classList.add("gameImg");
        gameImg.addEventListener("click", () => {
            sessionStorage.setItem("gameId", gameCardId)
            redirectToGamePage(gameCardId)
        });

        gameImg.src = response.results[i].background_image;
        gameCard.append(gameImg);

        // zona de titulo no meta
        const titleMeta = document.createElement("div");
        titleMeta.classList.add("titleMeta");
        gameCard.append(titleMeta);

        // titulo
        const title = document.createElement("h2");
        title.classList.add("title");
        titleMeta.append(title);
        title.textContent = response.results[i].name;

        // Metacritic
        const gameMetacritic = document.createElement("div");
        gameMetacritic.classList.add("gameMetacritic");

        if (response.results[i].metacritic === null) {
            gameMetacritic.classList.add("hide");
        } else {
            gameMetacritic.innerHTML = response.results[i].metacritic;
        }

        titleMeta.append(gameMetacritic);

        // Date de sortie
        const gameDate = document.createElement("p");
        gameDate.classList.add("gameDate");
        gameDate.innerHTML = response.results[i].released;
        gameCard.append(gameDate);

        // Genres
        const gameGenres = document.createElement("p");
        gameGenres.classList.add("gameGenres");
        gameGenres.innerHTML = response.results[i].genres[0].name;
        gameCard.append(gameGenres);

        // Screenshots
        const screenTxt = document.createElement("p");
        screenTxt.classList.add("screenTxt");
        screenTxt.textContent = "Screenshots:";
        const zoneImg = document.createElement("div");
        zoneImg.classList.add("zoneImg");
        const gameScreenshots = document.createElement("img");
        gameScreenshots.classList.add("gameScreenshots");
        gameScreenshots.setAttribute("src", response.results[i].short_screenshots[1].image);
        gameCard.append(screenTxt);
        gameCard.append(zoneImg);
        zoneImg.append(gameScreenshots);
    }
}

export function redirectToGamePage(id) {
    console.log('Redirecting to game page...');

    if (!id) {
        console.error('Game ID not found in clicked element');
        return;
    }
    window.location.href = `jogo.html?id=${id}`;
}

document.addEventListener("DOMContentLoaded", () => {
    if (document.title.includes("Pagina principal")) {
        getInfos().then(r => showGames(r));
    }else if (document.title.includes("Jogo Carregado")) {
        const urlParams = new URLSearchParams(window.location.search);
        const gameId = urlParams.get('id');

        getGameInfoById(gameId).then(gameCard => {
            const container = document.querySelector('.container');
            container.innerHTML = ''; // remove qualquer conteúdo existente
            container.appendChild(gameCard); // adiciona o card do jogo à página
        }).catch(error => {
            console.error(`Error fetching game info: ${error}`);
        });
    }
    else {
        console.log('not index');
    }
});