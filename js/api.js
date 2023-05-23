import {showGames} from "./main.js";
import {displayResults} from "./search.js";

const key = '5c3cadf5b8e04858a193936f32bad73c'

export async function getInfos() {
    try {
        const res = await fetch(`https://api.rawg.io/api/games?key=5c3cadf5b8e04858a193936f32bad73c`);
        const resParsed = await res.json();
        showGames(resParsed);
        return resParsed;
    } catch (error) {
        throw new Error(error);
    }
}

export async function searchGames(query) {
    const url = `https://api.rawg.io/api/games?key=${key}&search=${query}&search_exact=true`;
    const response = await fetch(url);

    if (response.ok) {
        const data = await response.json();
        if (data.results.length === 0) {
            alert('Nenhum jogo encontrado');
        } else {
            displayResults(data.results, key);
        }
    } else {
        console.error('Erro ao buscar jogos');
    }
}
