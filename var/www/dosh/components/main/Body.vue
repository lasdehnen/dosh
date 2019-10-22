<template>
  <div>
    <v-flex v-for="item in this.objects.content" :key="item.index">
      <v-container v-if="item.content.title !== ''" class="float-left">
        <v-layout>
          <v-card flat color="transparent" class="ml-8 no-xs-left-margin">
            <v-card-title class="item-title">
              {{ item.content.title }}
            </v-card-title>
          </v-card>
        </v-layout>
      </v-container>
      <v-flex v-if="item.files.length !== 0">
        <template v-for="(image, index) in item.files">
          <Picture :image="image"></Picture>
          <v-container v-if="show(item.content.description, index, image, item.files)">
            <v-card flat color="transparent" class="mb-100 d-inline-flex">
              <v-flex xs10 offset-xs1 sm12 md8 offset-md2>
                <v-card-text class="item-desc mb-6">
                  {{ item.content.description }}
                </v-card-text>
              </v-flex>
            </v-card>
          </v-container>
        </template>
      </v-flex>
      <v-flex v-else>
        <v-container v-if="item.content.description !== ''">
          <v-layout row>
            <v-card flat color="transparent">
              <v-flex xs10 offset-xs1 sm12 md8 offset-md2 class="mb-100">
                <v-card-text class="item-desc mb-6">
                  {{ item.content.description }}
                </v-card-text>
              </v-flex>
            </v-card>
          </v-layout>
        </v-container>
      </v-flex>
    </v-flex>
  </div>
</template>

<script>
  import { mapState } from "vuex"
  const Picture = () => import("./Picture");

  export default {
    name: "Body",
    components: {
      Picture
    },
    computed: {
      ...mapState(["objects"]),
    },
    methods: {
      show(desc, index, image, files) {
        if (desc !== "") {
          if (index === 0) {
            if (image.size === 0) {
              return true
            } else {
              return false
            }
          } else if (index === 1) {
            if (image.size === 1 && files[0].size === 1) {
              return true
            } else {
              return false
            }
          }
        }
      }
    }
  }
</script>

<style scoped>
  @media (max-width: 768px) {
    .mb-100 {
      margin-bottom: 0 !important;
    }
    .mt-200 {
      margin-top: 50px !important;
    }
    .item-title {
      line-height: 1;
      margin: 20px 0 0 0 !important;
      display: block;
      font-size: 18px !important;
    }
  }
</style>

<style>
  @media (max-width: 768px) {
    .mt-200 {
      margin-top: 50px !important;
    }
  }
</style>
