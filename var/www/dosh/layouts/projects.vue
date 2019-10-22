<template>
  <v-app>
    <a name="top"></a>
    <v-content>
      <v-container class="header-index">
        <a class="top-link" :class="!visible ? 'top-link-hide' : ''" href="#top"></a>
        <HeaderProjects></HeaderProjects>
      </v-container>
      <nuxt/>
    </v-content>
  </v-app>
</template>

<script>
  require('intersection-observer');
  const HeaderProjects = () => import("../components/common/HeaderProjects");
  export default {
    data() {
      return {
        title: 'DOSH',
        visible: false
      }
    },
    components: {
      HeaderProjects
    },
    methods: {
      handleScroll () {
        if (window.scrollY > 800) {
          this.visible = true
        } else {
          this.visible = false
        }
      }
    },
    created () {
      if (process.browser) {
        window.addEventListener('scroll', this.handleScroll);
      }
    },
    destroyed () {
      if (process.browser) {
        window.removeEventListener('scroll', this.handleScroll);
      }
    }
  }
</script>

<style>
  body {
    user-select: none;
  }

  html {
    scroll-behavior: smooth;
  }

  #app {
    background-color: #F5F5F5;
  }

  .container {
    padding-top: 30px !important;
  }

  @media (min-width: 960px) {
    .container {
      max-width: 950px;
    }
  }

  @media (max-width: 768px) {
    .mt-300 {
      margin-top: 150px;
    }
  }

  @media (min-width: 1024px) {
    .container {
      max-width: none;
      padding: 12px 3%;
    }
  }

  @media (min-width: 1264px) {
    .container {
      max-width: 1370px;
    }
  }

  .text-gray-bold {
    color: #585858 !important
  }

  .all-width {
    width: 100%;
  }

  .float-left {
    float: left;
  }

  .float-none {
    float: none !important;
  }

  .mb-100 {
    margin-bottom: 100px;
  }

  .mt-200 {
    margin-top: 200px !important;
  }

  .item-title {
    font-family: "KlavikaBold-BoldOSF";
    font-size: 20px;
    color: #000;
    letter-spacing: 7px;
    text-transform: uppercase;
  }

  .v-card__text.item-desc {
    font-family: 'TRY Clother';
    font-weight: 300;
    font-style: normal;
    font-size: 14px;
    color: #000 !important;
    letter-spacing: 1px;
    line-height: 1.6;
    white-space: pre-line;
  }

  .header-index {
    position: relative;
    z-index: 3;
  }

  .text-black {
    color: black !important;
  }

  .text-left {
    text-align: left!important;
  }

  .top-link {
    position: fixed;
    right: 10px;
    background-image: url("/up.png");
    width: 30px;
    height: 30px;
    background-size: contain;
    background-repeat: no-repeat;
    transition: all 1s ease-in-out;
    transition: all 0.3s linear;
  }

  .top-link-hide {
    height: 0;
  }

  .mt-300 {
    margin-top: 300px;
  }
</style>
