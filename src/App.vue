<template>
  <v-app>
    <v-main>
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
                    <v-list-item-title> <router-link link to="/" >Home</router-link></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                  <v-list-item-action>
                    <v-icon>mdi-wrench</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <router-link link to="/about" >Desenvolvedor</router-link>
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
               <router-view></router-view>
              </v-container>
            </v-main>
            <v-footer color="indigo" app>
              <span class="white--text"
                >&copy; {{ new Date().getFullYear() }}</span
              >
            </v-footer>
          </v-app>
        </v-app>
      </div>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
<style lang="scss" >
$bg-yellow: #facc48;
$link-blue: #3a5da8;

$main-background: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
.bg-blue {
  background-image: $main-background;
}
</style>
