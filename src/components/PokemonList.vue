<template>
  <v-row align="center" justify="center">
    <v-hover v-slot:default="{ hover }" v-for="carta of dados" :key="carta.id">
      <v-card :elevation="hover ? 16 : 2" class="ma-5" max-width="344">
        <v-img :src="carta.imageUrl" height="320px"></v-img>

        <v-card-title>
          {{ carta.name }}
        </v-card-title>

        <v-card-subtitle>
          <p class="text--primary" v-if="carta.types">
            Tipo:
            <span v-for="tipo of carta.types" :key="tipo.id">{{ tipo }}</span>
          </p>
          <p v-else>-</p>
        </v-card-subtitle>

        <v-card-actions>
          <v-btn text>ID - {{ carta.id }}</v-btn>

          <v-btn
            class="bg-yellow"
            outlined
            color="indigo"
            :to="`/details/${carta.id}`"
          >
            Saiba mais
          </v-btn>

          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-hover>
  </v-row>
</template>

<script>

export default {
  name: "PokemonList",
  props: ["dados"],
  data() {
    return {
      drawer: false,
      cards: [],
    };
  },
};
</script>

<style lang="scss" scoped></style>
