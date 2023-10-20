
function ConverterPokemonTypes(pokemonsTypes) {
    return pokemonsTypes.map(typeslist)

}


function ConverterPokemonList(pokemons) {
    return `
        li class="pokemon">
            <span class="numero">#${pokemon.number}</span>
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
    const newHTML = pokemons.map(ConverterPokemonList).join(``) 
    pokemonsList.innerHTML = newHTML
})
