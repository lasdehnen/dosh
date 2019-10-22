<template>
  <div class="logo">
  </div>
</template>
<style scoped>
  .logo {
    background-image: url("/dosh-logo.png");
    width: 80%;
    height: 23px;
    background-size: contain;
    display: block;
  }

  @media (max-width: 760px) {
    .logo {
      width: 80% !important;
      margin-top: 8px !important;
    }
  }

  @media (max-width: 1024px) {
    .logo {
      background-image: url("/dosh-mobile-logo.png");
      width: 60%;
      height: 23px;
      background-size: contain;
      display: block;
    }
  }
</style>
