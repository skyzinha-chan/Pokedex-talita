
function ConverterPokemon(pokemons) {
    return `
        li class="pokemon">
            <span class="numero">#001</span>
            <span class="nome">${pokemon.name}</span>

            <div class="detalhes">
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>

                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
            </div>                               
        </li>

`
}

const pokemonsList = document.getElementsById('pokemonsList')

PokeApi.getPokemons().then((pokemons = []) => {
    pokemonsList.innerHTML += pokemons.map(ConverterPokemon).join(``)    
})
