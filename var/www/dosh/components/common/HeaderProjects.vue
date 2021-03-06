<template>
  <v-layout>
    <v-flex xs4>
      <nuxt-link to="/">
        <Logo></Logo>
      </nuxt-link>
    </v-flex>
    <v-flex xs1 offset-xs7 d-flex justify-end>
      <v-menu open-delay="200" transition="fade-transition" open-on-hover offset-y>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" class="handle-menu">
            <ChatIcon></ChatIcon>
          </v-btn>
        </template>
        <v-list>
          <v-flex class="lang-link" @click="changeLang">En</v-flex>
          <v-flex
            v-for="(item, index) in this.links"
            :key="index"
            @click=""
          >
            <a v-if="item.name === 'Facebook'" :href="item.url" class="menu-icon fb-icon"></a>
            <a v-if="item.name === 'Whatsapp'" :href="item.url" class="menu-icon whatsapp-icon"></a>
            <a v-if="item.name === 'Email'" :href="item.url" class="menu-icon mail-icon"></a>
          </v-flex>
        </v-list>
      </v-menu>
    </v-flex>
  </v-layout>
</template>

<script>
  import {mapActions, mapGetters} from "vuex"

  const Logo = () => import("~/components/Logo")
  const ChatIcon = () => import("~/components/common/ChatIcon")

  export default {
    components: {
      Logo,
      ChatIcon
    },
    async mounted() {
      await this.GET_OBJECTS(this.lang)
    },
    computed: {
      ...mapGetters("header",
        [
          "links",
          "languages",
          "lang"
        ]
      )
    },
    methods: {
      ...mapActions("header", ["GET_OBJECTS", "SET_LANG"]),
      async changeLang() {
        let newLang = "";
        if (this.lang === "en") {
          newLang = "ru"
        } else {
          newLang = "en"
        }
        await this.SET_LANG(newLang)
        await this.GET_OBJECTS(newLang)
      }
    }
  }
</script>

<style scoped>
  .menu-container {
    position: relative;
  }

  .menu-item {
    font-family: "KlavikaBold-BoldOSF";
    font-size: 14px;
    text-decoration: none;
    text-transform: uppercase;
    position: relative;
    -moz-transition: all 1s ease-out;
    -o-transition: all 1s ease-out;
    -webkit-transition: all 1s ease-out;
  }

  .menu-item:before {
    content: " ";
    display: block;
    position: absolute;
    bottom: 2px;
    left: -50px;
    width: 40px;
    background-color: #575757;
    height: 2px;
    opacity: .8;
  }

  .menu-item:hover {
    color: black !important;
  }

  .handle-menu {
    background: transparent !important;
    box-shadow: none !important;
    padding-right: 0 !important;
  }

  .handle-menu:before {
    opacity: 0 !important;
  }

  .v-ripple-container {
    opacity: 0 !important;
    background: transparent !important;
    display: none !important;
  }

  .v-menu__content {
    box-shadow: none !important;
  }

  .v-list {
    background-color: transparent !important;
  }

  .menu-icon {
    width: 20px;
    height: 20px;
    display: block;
    margin: 20px auto;
    background-size: cover;
  }

  .lang-link {
    font-family: "KlavikaBold-BoldOSF";
    margin: 20px auto;
    color: #7d7d7d;
    text-align: center;
    cursor: pointer;
  }

  .fb-icon {
    background-image: url("/fb.png");
  }

  .whatsapp-icon {
    background-image: url("/whatsapp.png");
  }

  .mail-icon {
    background-image: url("/email.png");
  }
</style>
