<template>
  <v-layout>
    <v-flex xs4>
      <nuxt-link to="/">
        <Logo></Logo>
      </nuxt-link>
    </v-flex>
    <v-flex xs5 offset-xs1>
      <v-layout class="menu-container">
        <v-flex>
          <nuxt-link class="menu-item text-gray-bold" to="/about">
            <span>About</span>
          </nuxt-link>
        </v-flex>
        <v-flex>
          <nuxt-link class="menu-item text-gray-bold" to="/projects">
            <span>Projects</span>
          </nuxt-link>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs1 offset-xs1 d-flex justify-end>
      <v-menu open-delay="200" transition="fade-transition" open-on-hover offset-y>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" class="handle-menu">
            <ChatIcon></ChatIcon>
          </v-btn>
        </template>
        <v-list>
          <v-flex class="lang-link" @click="changeLang">{{ this.lang }}</v-flex>
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
  import { mapActions, mapGetters } from "vuex"
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
    text-decoration: none;
  }

  .menu-item span {
    font-family: "KlavikaBold-BoldOSF";
    font-size: 14px;
    text-transform: uppercase;
    position: relative;
    -moz-transition: all 1s ease-out;
    -o-transition: all 1s ease-out;
    -webkit-transition: all 1s ease-out;
  }

  .menu-item span:before {
    content: " ";
    display: block;
    position: absolute;
    bottom: 0;
    /*left: -50px;*/
    width: 40px;
    background-color: #575757;
    height: 2px;
    opacity: .8;
    transition: all 0.2s ease-in-out;
    transition-duration: 0.75s;
    right: 110%;
    border-radius: 5px;
  }

  .menu-item:hover span:before {
    width: 2px;
    right: -10%;
    background-color: black;
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
    opacity: 0 !important
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
    text-transform: capitalize;
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

  @media (max-width: 778px) {
    .menu-item:before {
      width: 20px;
      left: -23px;
    }
    .menu-item {
      margin-right: 30px;
    }

    .menu-item span {
      font-size: 11px;
    }

    .menu-item span:before {
      width: 20px;
      right: 102%;
    }

    .handle-menu svg {
      height: 20px;
      width: 20px;
    }
  }
</style>

<style>
  .v-menu__content {
    box-shadow: none !important;
    /*height: 0;*/
    /*opacity: 0;*/
    /*transition: all 1.2s linear;*/
    /*transition-duration: 0.75s;*/
  }

  .v-menu__content.menuable__content__active {
    height: auto;
    /*opacity: 1;*/
  }

  .v-list.v-sheet.v-sheet--tile {
    height: 0;
    transition: all 1s linear;
  }

  .v-menu__content.menuable__content__active .v-list.v-sheet.v-sheet--tile {
    height: auto;
  }
</style>
