<template>
  <div>
    <v-flex v-for="(item, index) in this.objects.content" :key="item.id" :class="index === 0 ? '' : 'mt-300'">
      <v-container v-if="item.content.description !== '' && index === 0" class="special-container">
        <v-layout row>
          <v-card flat color="transparent" class="d-flex">
            <v-flex xs6 sm5 md4 class="d-inline-flex">
              <div>
                <v-flex class="item-desc-body mt-100 mb-100">
                  <nuxt-link to="/about" class="item-title text-black mb-8">
                    <span>
                      About
                    </span>
                  </nuxt-link>
                  <nuxt-link to="/projects" class="item-title text-black">
                    <span>
                      Projects
                    </span>
                  </nuxt-link>
                </v-flex>
                <v-card-text v-html="item.content.description" class="item-desc hidden-item-desc-off"/>
              </div>
            </v-flex>
            <v-flex xs6 sm6 md6 offset-md2 offset-sm-1 class="d-inline-flex">
              <v-card-text class="item-desc">
                <v-img
                  v-for="(image, index) in item.files"
                  :key="index"
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
          <v-flex xs12>
            <v-card-text v-html="item.content.description" class="item-desc hidden-item-desc-on"/>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container v-else-if="index !== 0">
        <v-card flat color="transparent" class="d-flex">
          <a class="item-title text-left text-black mb-12 ml-6" :href="item.content.url">
            <span>
              {{ item.content.title }}
            </span>
          </a>
          <v-card-text class="projects-label hidden-xs-only">
            Projects
            <span class="projects-counter">{{ index }} — ∞</span>
          </v-card-text>
        </v-card>
        <div>
          <v-flex xs12 sm12 md8 offset-md2 class="float-none">
            <v-card flat color="transparent">
              <v-card-text>
                <a class="v-image-case" :href="item.content.url">
                  <v-img
                    v-for="image in item.files"
                    :key="image.index"
                    :src="image.file_name"
                    :lazy-src="image.file_name"
                    class="mb-100 case-image"
                  >
                    <template v-slot:placeholder>
                      <v-layout fill-height align-center justify-center ma-0>
                        <v-progress-circular indeterminate color="#575757"/>
                      </v-layout>
                    </template>
                  </v-img>
                </a>
              </v-card-text>
            </v-card>
          </v-flex>
        </div>
      </v-container>
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
    font-size: 2.6em;
    padding-left: 0;
    word-break: keep-all;
    display: block;
    text-align: right;
    text-decoration: none;
    position: relative;

  }

  .v-image {
    float: none !important;
  }

  .item-title span {
    position: relative;
    margin-left: 100px;
  }

  .item-title span:before {
    content: "";
    position: absolute;
    width: 100px;
    height: 5px;
    transition: all 0.2s ease-in-out;
    transition-duration: 0.75s;
    background-color: #000;
    right: 110%;
    bottom: 5px;
    border-radius: 5px;
  }

  .item-title:hover span:before {
    width: 5px;
    right: -5%;
  }

  .v-image-case {
    -webkit-box-shadow: 0px 0px 35px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 0px 35px 0px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 0px 35px 0px rgba(0, 0, 0, 0.3);
    display: block;
    width: 100%;
  }

  .v-image.case-image {
    -moz-transition: all 1s ease-out;
    -o-transition: all 1s ease-out;
    -webkit-transition: all 1s ease-out;
  }

  .v-image.case-image:hover {
    -webkit-transform: scale(1.01);
    -moz-transform: scale(1.01);
    -o-transform: scale(1.01);
  }

  .projects-label {
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.23) !important;
    font-family: "KlavikaBold-BoldOSF";
    width: auto;
    position: absolute;
    right: 0;
    font-size: 17px;
    bottom: 40%;
  }

  .projects-counter {
    display: block;
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
    position: absolute;
    left: 0;
    top: 18.3em;
    font-family: 'TRY Clother';
    font-weight: 300;
    font-style: normal;
    font-size: 23px;
  }

  @media (max-width: 1290px) {
    .projects-counter {
      top: 16.3em;
    }
  }

  @media (max-width: 1200px) {
    .projects-counter {
      top: 15.5em;
    }
  }

  @media (max-width: 1064px) {
    .projects-counter {
      top: 13em;
    }
  }

  @media (min-width: 1600px) {
    .projects-counter {
      top: 24em;
    }
  }

  @media (max-width: 600px) {
    .item-title.mb-12.text-left {
      margin-bottom: 20px !important;
      line-height: 1;
    }

    .flex.mt-300 {
      margin-top: 50px !important;
    }

    .v-image.mb-100 {
      margin-bottom: 10px !important;
    }
  }

</style>

<style>
  .item-desc > b {
    font-family: "KlavikaBold-BoldOSF";
    font-size: 18px;
  }
  @media (max-width: 600px) {
    .item-desc > b {
      font-size: 15px;
    }
  }
</style>
