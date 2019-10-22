<template>
  <v-img
    v-if="!image.is_center && image.size === 0"
    :src="image.file_name"
    :lazy-src="image.file_name"
  >
    <template v-slot:placeholder>
      <v-layout fill-height align-center justify-center ma-0>
        <v-progress-circular indeterminate color="grey lighten-5"/>
      </v-layout>
    </template>
  </v-img>
  <article v-else-if="!image.is_center && image.size === 1" class="image-half">
    <v-img :src="image.file_name" :lazy-src="image.file_name"></v-img>
  </article>
  <v-flex xs12 sm12 md8 offset-md2 v-else-if="image.is_center" class="float-none">
    <v-card flat color="transparent">
      <v-card-text>
        <v-img
          :src="image.file_name"
          :lazy-src="image.file_name"
          class="mb-100"
        >
          <template v-slot:placeholder>
            <v-layout fill-height align-center justify-center ma-0>
              <v-progress-circular indeterminate color="#575757"/>
            </v-layout>
          </template>
        </v-img>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
  export default {
    name: "Picture",
    props: [
      "image"
    ]
  }
</script>

<style>
  .image-half {
    width: 47%;
    display: inline-flex;
  }

  .image-half:nth-of-type(2) {
    float: right;
  }

  .v-image {
    width: 100%;
    float: left;
    margin-bottom: 100px;
  }

  @media (max-width: 450px) {
    .v-image {
      margin-bottom: 20px !important;
    }
  }
</style>
