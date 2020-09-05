<template>
  <Desenvolvedor />
</template>
<script>
// @ is an alias to /src
import Desenvolvedor from "@/components/Desenvolvedor.vue";

export default {
  name: "About",
  components: {
    Desenvolvedor,
  },
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
