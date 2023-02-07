<template>

</template>

<script>
import {createRouter, createWebHashHistory} from 'vue-router';
import header from "@/components/Header.vue";
import footer from "@/components/Footer.vue";
import join from "../components/Join.vue"

const router = new createRouter({
  history:createWebHashHistory(),
  routes:[
    {path: '/header', component:header},
    {path: '/footer', component: footer},
    {path: '/join', component:join}
  ]
});

export default router;
</script>

<style scoped>

</style>