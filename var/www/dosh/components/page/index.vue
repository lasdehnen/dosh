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
      ...mapState(["status", "errors"]),
      ...mapGetters("header",
        [
          "lang"
        ]
      ),
    },
    async mounted() {
      await this.GET_PAGE({lang: this.lang, page: this.$route.params.id})
    },
    methods: {
      ...mapActions(["GET_PAGE"]),
      checkError(error) {
          console.log(this.errors);
          if (this.errors.statusCode !== 200) {
              return error(this.errors)
          }
      }
    }
  }
</script>


