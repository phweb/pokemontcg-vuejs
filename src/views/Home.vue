<template>
  <div class="home">
    <Logo />
    <PokemonList />
  </div>
</template>

<script>
// @ is an alias to /src
import Logo from '@/components/Logo.vue'
import PokemonList from '@/components/PokemonList.vue'

export default {
  name: 'Home',
  components: {
    Logo,
    PokemonList
  }
}
</script>
