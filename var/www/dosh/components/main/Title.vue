<template>
  <v-layout>
    <v-card flat color="transparent" class="ml-8 mt-200 no-xs-left-margin">
      <v-card-title class="page-title page-title-xs">
        {{ this.objects.page.page.title }}
      </v-card-title>
      <v-card-text class="page-desc mt-12 no-xs-top-margin">
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
    letter-spacing: 1.5px;
    line-height: 1.6;
    white-space: pre-line;
  }

  @media (max-width: 768px) {
    .page-title-xs {
      font-size: 30px !important;
    }
    .v-application .mt-12.no-xs-top-margin {
      margin-top: 0 !important;
      font-size: 10px;
    }
    .v-application .ml-8.no-xs-left-margin {
      margin-left: 0 !important;
    }
  }
</style>
