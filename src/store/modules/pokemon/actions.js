import axios from "axios"


export const getPokemons = ({ commit }) => {
  axios
      .get("https://api.pokemontcg.io/v1/cards?page=1")
      .then((response) => {
        commit('SET_POKEMONS', response.data.cards);
        })
      .catch((error) => {
        console.log(error);
      });
 
}

export const getPokemon = ({ commit }, productId) => {
  axios
  .get(`https://api.pokemontcg.io/v1/cards?id=${productId}`)
  .then((response) => {
    commit('SET_POKEMON', response.data.cards[0]);
  })
  .catch((error) => {
    console.log(error);
  });
       
}
