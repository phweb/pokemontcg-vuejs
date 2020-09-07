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
          <h2>{{ cards.name }}</h2>
          <div><strong> ID </strong>{{ cards.id }}</div>
          <div class="pt-3">
            <strong>Tipos:</strong>
            <span v-for="type of cards.types" :key="type.id">{{ type }}</span>
          </div>
          <div class="pt-3">
            <strong>Resistencia:</strong>
            <span v-for="resistance of cards.resistances" :key="resistance.id">
              <v-chip class="ma-2" color="indigo darken-3" outlined>
                <i class="energy psychic"></i>{{ resistance.value }}
              </v-chip>
            </span>
          </div>
          <div class="pt-3">
            <strong>Fraqueza: </strong>
            <span v-for="weaknesse of cards.weaknesses" :key="weaknesse.id">
              <v-chip class="ma-2" color="indigo darken-3" outlined>
                <i class="energy fighting"></i>{{ weaknesse.value }}
              </v-chip></span
            >
          </div>
          <div class="pt-3">
            <strong>Ataques:</strong
            ><span v-for="attack of cards.attacks" :key="attack.id">
              <v-chip class="ma-2" color="indigo darken-3" outlined>
                <span class="mt-1" v-for="item of attack.cost" :key="item.id">
                  <i :class="`energy ${item.toLowerCase().trim()}`"></i> </span
                >
                <modal :info="attack"/>
                
              </v-chip></span
            >
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import modal from '@/components/modal.vue'
import axios from "axios";
export default {
  name: "PokemonDetails",
   components: {
    modal,
  },
  props:{
    info: Array
  },
  
  data() {
    return {
     

      cards: [],
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
  },
};
</script>

<style lang="scss" >
/* Energy Types */
.energy {
  background-image: url("../assets/energy-types.png");
  width: 25px;
  height: 25px;
  display: inline-block;
  margin: 0 3px;
}

.energy.grass {
  background-position: -25px -50px;
}

.energy.colorless {
  background-position: -25px 0px;
}

.energy.fire {
  background-position: 0px 0px;
}

.energy.water {
  background-position: -75px -50px;
}

.energy.lightning {
  background-position: -50px -50px;
}

.energy.darkness {
  background-position: 0px -50px;
}

.energy.fairy {
  background-position: -50px 0px;
}

.energy.psychic {
  background-position: -75px -25px;
}

.energy.metal {
  background-position: -75px 0px;
}

.energy.dragon {
  background-position: 0px -25px;
}

.energy.fighting {
  background-position: -50px -25px;
}
</style>
