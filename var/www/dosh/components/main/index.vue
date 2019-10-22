<template>
  <div v-if="parseInt(this.status) === 2 || this.status === '2'" class="all-width">
    <v-container>
      <Title></Title>
    </v-container>
    <Body></Body>
  </div>
  <v-layout v-else fill-height align-center justify-center mt-200 mx-0>
    <v-progress-circular indeterminate color="grey"/>
  </v-layout>
</template>

<script>
  import { mapState, mapActions, mapGetters } from "vuex"
  const Title = () => import("./Title");
  const Body = () => import("./Body");
  export default {
    name: "index",
    components: {
      Body,
      Title
    },
    computed: {
      ...mapState(["status"]),
      ...mapGetters("header",
        [
          "lang"
        ]
      ),
    },
    async mounted() {
      await this.GET_OBJECTS(this.lang)
    },
    methods: {
      ...mapActions(["GET_OBJECTS"])
    }
  }
</script>


