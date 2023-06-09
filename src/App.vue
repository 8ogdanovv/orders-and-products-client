<template>

<div class="main">
  <TopMenu />
  <NavigationMenu />
  <Footer />
</div>

</template>

<script>

import TopMenu from './components/TopMenu.vue';
import NavigationMenu from './components/NavigationMenu.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    TopMenu,
    NavigationMenu,
    Footer,
  },
};

</script>

<style>

  .main {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100dvh;
  }

</style>
