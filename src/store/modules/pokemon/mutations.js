export const SET_POKEMONS = (state, pokemons) => {
  pokemons.sort(function(a, b) {
    return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
});
  state.pokemons = pokemons;
}

export const SET_POKEMON = (state, pokemon) => {
  state.pokemon = pokemon;
}