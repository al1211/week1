
const pokemonList = document.createElement('ul');
pokemonList.id = 'pokemon-list';
document.body.appendChild(pokemonList);

function fetchPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then(data => {
           
            const pokemonList = document.getElementById('pokemon-list');
            data.results.forEach(pokemon => {
               ;
                const listItem = document.createElement('li');
                const Image = document.createElement('img');
                Image.src = pokemon.url;
                listItem.appendChild(Image);        

                listItem.textContent = pokemon.name;
                pokemonList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching Pokémon:', error));
}

document.addEventListener('DOMContentLoaded', fetchPokemon);