<template>
  <v-layout>
    <parallax-container class="all-width">
      <parallax-element v-if="parseInt(this.status) === 2 || this.status === '2'" class="about-bg" :parallaxStrength="15" :type="'translation'">
      </parallax-element>
      <parallax-element v-if="parseInt(this.status) === 2 || this.status === '2'" class="about-bg second-layer-bg" :parallaxStrength="15" :type="'translation'">
      </parallax-element>
      <parallax-element v-if="parseInt(this.status) === 2 || this.status === '2'" class="about-bg third-layer-bg" :parallaxStrength="15" :type="'translation'">
      </parallax-element>
      <parallax-element v-if="parseInt(this.status) === 2 || this.status === '2'" class="about-bg fourth-layer-bg" :parallaxStrength="15" :type="'translation'">
      </parallax-element>
      <Projects></Projects>
    </parallax-container>
  </v-layout>
</template>

<script>
  const Projects = () => import("~/components/projects")
  import Vue from 'vue'
  import {ParallaxContainer, ParallaxElement} from 'vue-mouse-parallax'

  Vue.component('parallax-container', ParallaxContainer)
  Vue.component('parallax-element', ParallaxElement)
  import {mapState} from "vuex"

  export default {
    components: {
      Projects
    },
    layout: "projects",
    computed: {
      ...mapState("projects", ["status"]),
    }
  }
</script>

<style>
  @media (max-width: 1024px) {
    .item-title {
      font-size: 2em !important;
      margin-bottom: 20px !important;
    }
  }

  @media (max-width: 750px) {
    .item-title {
      font-size: 1.6em !important;
      line-height: 1 !important;
      letter-spacing: 2px !important;
      margin-bottom: 15px !important;
    }

    .item-title span {
      margin-left: 20px !important;
    }

    .item-title span:before {
      width: 20px !important;
      height: 3px !important;
      right: 102% !important;
      bottom: 3px !important;
    }
  }

  @media (max-width: 420px) {
    .item-title {
      letter-spacing: 2px !important;
      line-height: 1 !important;
    }

    .item-title span {
      margin-left: 20px !important;
    }

    .item-title span:before {
      width: 20px !important;
      height: 2px !important;
      right: 102% !important;
      bottom: 2px !important;
    }

    .v-card__text.item-desc {
      font-size: 10px !important;
      padding: 0 5px !important;
    }

    .container {
      padding: 10px !important;
    }
  }
</style>

<style scoped>
  .second-layer-bg {
    top: 6180px;
  }

  .third-layer-bg {
    top: 12360px;
  }

  .fourth-layer-bg {
    top: 18540px;
  }

  @media (max-width: 750px) {
    .second-layer-bg {
      top: 2500px;
    }

    .third-layer-bg {
      top: 5000px;
    }

    .fourth-layer-bg {
      top: 15000px;
    }
  }
</style>
