
const PokeApi = {}

PokeApi.getPokemonDetalhes = (pokemon) => {

    return fetch(pokemon.url).then((response) => response.json())
    .then ((pokemons) => )
}





PokeApi.getPokemons =  (offset = 0, limit = 5) => {

    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map((PokeApi).getPokemonDetalhes))
        .then((detalhesRequests => Promise.all(detalhesRequests)))
        .then((pokemonsDetalhes) => {
            debugger
            console.log(pokemonsDetalhes)
        })
    
    
}

    