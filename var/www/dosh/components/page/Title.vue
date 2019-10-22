<template>
  <v-layout>
    <v-card flat color="transparent" class="ml-8 mt-200">
      <v-card-title class="page-title page-title-xs">
        {{ this.objects.page.page.title }}
      </v-card-title>
      <v-card-text class="page-desc mt-12">
        {{ this.objects.page.page.description }}
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script>
  import { mapState } from "vuex"
  export default {
    name: "Title",
    computed: {
      ...mapState(["objects"]),
    }
  }
</script>

<style>
  .page-title {
    font-family: "KlavikaBold-BoldOSF";
    font-size: 60px;
    color: #000;
    letter-spacing: 7px;
    text-transform: uppercase;
  }

  .page-desc {
    font-family: 'TRY Clother';
    font-weight: 300;
    font-style: normal;
    font-size: 12px;
    color: #000 !important;
    letter-spacing: 2px;
    line-height: 1.6;
    white-space: pre-line;
  }

  @media (max-width: 768px) {
    .page-title-xs {
      font-size: 30px !important;
    }
  }
</style>
