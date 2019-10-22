<template>
  <div v-if="parseInt(this.status) === 2 || this.status === '2'" class="all-width">
    <v-container>
      <Body :objects="this.objects"></Body>
    </v-container>
  </div>
  <v-layout v-else fill-height align-center justify-center mt-200 mx-0>
    <v-progress-circular indeterminate color="grey"/>
  </v-layout>
</template>

<script>
  import {mapState, mapActions, mapGetters} from "vuex"

  const Body = () => import("./Body");
  export default {
    name: "index",
    components: {
      Body
    },
    computed: {
      ...mapState("projects", ["objects", "status"]),
      ...mapGetters("header",
        [
          "lang"
        ]
      ),
    },
    async mounted() {
      await this.GET_OBJECTS(this.lang)
      console.log(this.objects)
    },
    methods: {
      ...mapActions("projects", ["GET_OBJECTS"])
    }
  }
</script>

<style scoped>

</style>
