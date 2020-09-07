<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn white v-bind="attrs" v-on="on">
        {{ info.name }}
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="headline bg-blue lighten-2">
        Ataque {{ info.name }}
      </v-card-title>

      <v-card-text class="m-4">
        <v-chip class="ma-2" color="indigo darken-3" outlined>
          <span class="mt-1" v-for="item of info.cost" :key="item.id">
                  <i :class="`energy ${item.toLowerCase().trim()}`"></i> </span
                >
        </v-chip>
        <v-divider></v-divider>

        <v-chip class="ma-2" color="indigo darken-3" outlined>
          Dano: {{ info.damage }}
        </v-chip>
        <v-divider></v-divider>
        <v-chip class="ma-2" color="indigo darken-3" outlined>
          Custo: {{ info.convertedEnergyCost }}
        </v-chip>
        <v-divider></v-divider>
        <v-chip class="ma-2" color="indigo darken-3" outlined>
          Descrição:
        </v-chip>
        <v-card-text class="ma-2" color="indigo darken-3" outlined>{{
          info.text
        }}</v-card-text>
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
</template>

<script>
export default {
  name: "Modal",
  props:["info"],
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style></style>
