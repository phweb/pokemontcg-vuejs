<template>
  <div class="searchbar">
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-card class="elevation-6">
        <form @submit.prevent="buscar">
          <input type="text" v-model="searchvalue" />
        </form>

        <v-btn color="secondary" width="100%" dark @click="buscar">Buscar</v-btn>
      </v-card>
      </v-row>
    </v-container>
    <PokemonList :dados="filterPokemons" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import PokemonList from "@/components/PokemonList.vue";

//import axios from "axios";
export default {
  props: {
    dados: Array,
  },
  components: {
    PokemonList,
  },
  data: () => {
    return {
      searchvalue: "",
      filterPokemons: [],
    };
  },
    computed: {
    ...mapState("pokemon", ["pokemons"])
  },
  mounted() {
    this.getPokemons();
    this.filterPokemons = this.pokemons;
  },
  methods: {
    
    ...mapActions("pokemon", ["getPokemons"]),
         buscar() {
      this.filterPokemons = this.pokemons;
      if (this.searchvalue == "" || this.searchvalue == " ") {
        this.filterPokemons = this.pokemons;
      } else {   
        this.filterPokemons = this.pokemons.filter(
          (pokemon) => pokemon.name == this.searchvalue
        );
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.searchbar {
  width: 100%;
  input {
    border: none;
    display: block;
    outline: none;
    border-radius: 5px;
    padding: 10px 40px 10px 10px;
    width: calc(100%);
    font-size: 1rem;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
  }
}
</style>
