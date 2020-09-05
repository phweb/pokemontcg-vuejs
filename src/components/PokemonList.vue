<template>
  <div id="app">
    <v-app id="inspire">
      <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" app>
          <v-list dense>
            <v-list-item link>
              <v-list-item-action>
                <v-icon>mdi-home</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link>
              <v-list-item-action>
                <v-icon>mdi-wrench</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Desenvolvedor</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>

        <v-app-bar app class="bg-blue" dark>
          <v-app-bar-nav-icon
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>
          <v-toolbar-title>Pokémon TCG</v-toolbar-title>
        </v-app-bar>

        <v-main>
          <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
              <v-card class="mx-auto mb-5" max-width="344" v-for="carta of cards" :key="carta.id">
                <v-img
                  :src="carta.imageUrl"
                  height="300px"
                ></v-img>

                <v-card-title>
                  {{carta.name}}
                </v-card-title>

                <v-card-subtitle>
                  <p v-if="carta.types">Tipo - {{carta.types[0]}}</p>
                  <p v-else>-</p> 
                </v-card-subtitle>

                <v-card-actions>
                  <v-btn text>ID - {{carta.id}}</v-btn>

                  <v-btn class="bg-yellow" outlined color="indigo">
                    Detalhes
                  </v-btn>

                  <v-spacer></v-spacer>

                  <v-btn icon @click="show = !show">
                    <v-icon>{{
                      show ? "mdi-chevron-up" : "mdi-chevron-down"
                    }}</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-row>
            
          </v-container>
        </v-main>
        <v-footer color="indigo" app>
          <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
      </v-app>
    </v-app>
  </div>
</template>

<script>

import axios from 'axios';
export default {
  name: "PokemonList",
  data(){
    return {
 drawer: false,
    cards: [],
    }
  },
  mounted(){
    axios.get('https://api.pokemontcg.io/v1/cards').then(resposta => {
        if(resposta.status === 200)
             this.cards = resposta.data.cards
      
    })
  }
  }
</script>

<style lang="scss" scoped>
$bg-yellow: #facc48;
$link-blue: #3a5da8; 

$main-background: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);

.bg-blue {
  
  background-image: $main-background;
}



</style>