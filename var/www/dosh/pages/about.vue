<template>
  <v-layout>
    <parallax-container class="all-width">
      <parallax-element v-if="parseInt(this.status) === 2 || this.status === '2'" class="about-bg" :parallaxStrength="15" :type="'translation'">
      </parallax-element>
      <About/>
    </parallax-container>
  </v-layout>
</template>

<script>
  const About = () => import("~/components/about")
  import Vue from 'vue'
  import { ParallaxContainer, ParallaxElement } from 'vue-mouse-parallax'
  Vue.component('parallax-container', ParallaxContainer)
  Vue.component('parallax-element', ParallaxElement)
  import { mapState } from "vuex"
  export default {
    components: {
      About
    },
    computed: {
      ...mapState("about", ["status"]),
    }
  }
</script>

<style scoped>

  @media (max-width: 1024px) {
    .item-title {
      font-size: 2em !important;
      margin-bottom: 20px !important;
    }
  }

  @media (max-width: 750px) {
    .item-title {
      font-size: 1.6em !important;
      margin-top: -30px !important;
      margin-bottom: 0 !important;
    }
  }

  @media (max-width: 420px) {
    .item-title {
      font-size: 1.2em !important;
      letter-spacing: 2px !important;
      line-height: 1.5;
    }

    .v-card__text.item-desc {
      font-size: 10px !important;
      padding: 0 5px;
    }

    .container {
      padding: 10px !important;
    }
  }
</style>
