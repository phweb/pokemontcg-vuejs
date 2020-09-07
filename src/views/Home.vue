<template>
  <div class="home">
    <Logo />
    <PokemonSearch />
  </div>
</template>

<script>
// @ is an alias to /src
import Logo from '@/components/Logo.vue'

import PokemonSearch from '@/components/PokemonSearch.vue'
export default {
  name: 'Home',
  components: {
    Logo,
    PokemonSearch
  }
}
</script>
