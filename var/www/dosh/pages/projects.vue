<template>
  <v-layout>
    <Main></Main>
  </v-layout>
</template>

<script>
  const Main = () => import("~/components/main")

  export default {
    components: {
      Main
    }
  }
</script>
