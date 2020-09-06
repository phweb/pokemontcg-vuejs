<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4">
      <v-card class="mx-auto" max-width="370">
        <v-img
          class="white--text align-end"
          height="524px"
          aspect-ratio="2"
          :src="cards.imageUrlHiRes"
        >
         
        </v-img>

        <v-card-text class="text--primary">
          <div>{{cards.name}}</div>
          <div>ID {{cards.id}}</div>
          <div class="pt-3">Tipos {{cards.types}}</div>
          <div class="pt-3">Resistencia(s)</div>
          <div class="pt-3">Fraqueza</div>
          <div class="pt-3">Lista nomes dos ataques</div>
        </v-card-text>

        <v-card-actions>
          <div class="text-center">
            <v-dialog v-model="dialog" width="500">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
                  Detalhes ataque
                </v-btn>
              </template>

              <v-card>
                <v-card-title class="headline bg-blue lighten-2">
                  Ataque
                </v-card-title>

                <v-card-text class="m-4">
                  <ul>
                    <li>Nome: {{cards.attacks[0].name}}</li>
                     <li>Descrição: {{cards.attacks[0].text}}</li>
                      <li>Dano: {{cards.attacks[0].damage}}</li>
                      <li>Custo: {{cards.attacks[0].convertedEnergyCost}}</li>
                    </ul>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" text @click="dialog = false">
                    Fechar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios"
export default {
  name: "PokemonDetails",
  data() {
    return {
      dialog: false,
    
      cards:[]
    };
  },
    created() {
    axios
      .get(`https://api.pokemontcg.io/v1/cards?id=${this.$route.params.id}`)
      .then((resposta) => {
        if (resposta.status === 200) this.cards = resposta.data.cards[0];
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
</script>

<style></style>
