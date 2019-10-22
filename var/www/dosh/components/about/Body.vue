<template>
  <div>
    <v-flex v-for="(item, index) in this.objects.content" :key="item.index">
      <v-flex v-if="item.content.description !== '' && index === 0">
        <v-container class="special-container">
          <v-layout row>
            <v-card flat color="transparent" class="d-flex">
              <v-flex xs6 sm5 md4 class="mb-100 d-inline-flex">
                <v-card-text class="item-desc">
                  <v-flex v-if="item.content.title !== ''" class="item-title mb-12">
                    {{ item.content.title }}
                  </v-flex>
                  <v-flex v-html="item.content.description"/>
                </v-card-text>
              </v-flex>
              <v-flex xs6 sm6 md6 offset-md2 offset-sm-1 class="mb-100 d-inline-flex">
                <v-card-text class="item-desc">
                  <v-img
                    v-for="image in item.files"
                    :key="image.index"
                    :src="image.file_name"
                    :lazy-src="image.file_name"
                  >
                    <template v-slot:placeholder>
                      <v-layout fill-height align-center justify-center ma-0>
                        <v-progress-circular indeterminate color="grey lighten-5"/>
                      </v-layout>
                    </template>
                  </v-img>
                </v-card-text>
              </v-flex>
            </v-card>
          </v-layout>
        </v-container>
        <v-container class="special-container half-height mb-0">
          <v-layout row>
            <v-card flat color="transparent" class="d-flex">
              <transition name="fade">
                <v-flex xs6 sm5 md4 class="mb-100 d-inline-flex">
                  <v-card-text class="item-desc">
                    <v-flex v-if="item.content.title !== ''" class="item-title mb-12">
                      {{ item.content.title }}
                    </v-flex>
                    <v-flex v-html="item.content.description"/>
                  </v-card-text>
                </v-flex>
              </transition>
              <transition name="fade">
                <v-flex xs6 sm6 md6 offset-md2 offset-sm-1 class="mb-100 d-inline-flex">
                  <v-card-text class="item-desc">
                    <v-img
                      v-for="image in item.files"
                      :key="image.index"
                      :src="image.file_name"
                      :lazy-src="image.file_name"
                    >
                      <template v-slot:placeholder>
                        <v-layout fill-height align-center justify-center ma-0>
                          <v-progress-circular indeterminate color="grey lighten-5"/>
                        </v-layout>
                      </template>
                    </v-img>
                  </v-card-text>
                </v-flex>
              </transition>
            </v-card>
          </v-layout>
        </v-container>
      </v-flex>
    </v-flex>
  </div>
</template>

<script>
  export default {
    name: "Body",
    props: [
      "objects"
    ]
  }
</script>

<style scoped>
  .item-title {
    font-size: 3em;
    padding-left: 0;
    word-break: keep-all;
    line-height: 1;
  }

  .v-image {
    -webkit-box-shadow: 0px 0px 35px 0px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 0px 35px 0px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 0px 35px 0px rgba(0, 0, 0, 0.2);
  }

  .v-image {
    -moz-transition: all 1s ease-out;
    -o-transition: all 1s ease-out;
    -webkit-transition: all 1s ease-out;
  }

  .half-height {
    transform: translateY(50%);
  }

  .no-overflow {
    overflow-y: hidden;
  }
</style>
