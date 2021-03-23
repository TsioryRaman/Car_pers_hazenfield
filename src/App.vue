<template>
  <div id="app">
    <Navbar />
    <div class="main">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>

  import Navbar from './components/Navbar'
  import Footer from "./components/Footer";

  export default {
    name: 'App',
    components: {
      Footer,
      Navbar
    }
  }
</script>

<style lang="scss" src="./assets/style/app.scss">

</style>
