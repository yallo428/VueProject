<template>
  <div id="app">
    <Header id="header"/>
    <router-view></router-view>
    <Footer id="footer"/>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import join from "@/components/Join.vue";

export default ({
  components: {Footer, Header, join}
})

</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>