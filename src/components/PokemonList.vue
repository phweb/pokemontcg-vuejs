<template>
  <v-row align="center" justify="center">
    <v-card
      class="mx-auto mb-5"
      max-width="344"
      v-for="carta of cards"
      :key="carta.id"
    >
      <v-img :src="carta.imageUrl" height="320px"></v-img>

      <v-card-title>
        {{ carta.name }}
      </v-card-title>

      <v-card-subtitle>
        <p v-if="carta.types">Tipo - {{ carta.types[0] }}</p>
        <p v-else>-</p>
      </v-card-subtitle>

      <v-card-actions>
        <v-btn text>ID - {{ carta.id }}</v-btn>

        <v-btn class="bg-yellow" outlined color="indigo" :to="`/details/${carta.id}`">
          Saiba mais
        </v-btn>

        <v-spacer></v-spacer>

      </v-card-actions>
    </v-card>
  </v-row>
</template>

<script>
import axios from "axios";
export default {
  name: "PokemonList",
  data() {
    return {
      drawer: false,
      cards: [],
    };
  },
  mounted() {
    axios
      .get("https://api.pokemontcg.io/v1/cards")
      .then((resposta) => {
        if (resposta.status === 200) this.cards = resposta.data.cards;
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
</script>

<style lang="scss" scoped>

</style>
