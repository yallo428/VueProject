<template>
  <div id="app">
    <childHeader  class="header-area" @side-key="getState"/>
    <router-view class="content-area"/>
    <childFooter class="footer-area"/>
  </div>
  <Transition name="slide-fade">
    <childSideBar ref="side" class="side-area" v-show="this.sideBar"/>
  </Transition>
</template>
<script>
import childHeader from "../components/Header.vue";
import childFooter from "../components/Footer.vue";
import childJoin from "../components/Join.vue";
import childSideBar from "../components/SideBar.vue";

export default {
  components: {childFooter, childHeader, childJoin, childSideBar},
  data() {
    return {
      sideBar: false
    }
  },
  mounted() {
  },
  methods: {
    getState(data) { //자식 컴포넌트 값 받아오기
      this.sideBar = data;
    },
    closeSlide(e) { // 영역 밖 클릭시 닫음
      if (e.target.parentNode ===  this.$refs.header.$refs["side-btn"]){
        this.sideBar = false;
      }
    }
  }
}

</script>

<style scoped>
@import "../assets/FrontBoard.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>