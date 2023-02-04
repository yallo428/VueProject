<template>

</template>

<script>
import {createRouter, createWebHashHistory} from 'vue-router';
import header from "@/components/Header.vue";
import body from "@/components/Body.vue";
import footer from "@/components/Footer.vue";
import join from "../components/Join.vue"

const router = new createRouter({
  history:createWebHashHistory(),
  routes:[
    {path: '/header', component:header},
    {path: '/body', component: body},
    {path: '/footer', component: footer},
    {path: '/join', component:join}
  ]
});

export default router;
</script>

<style scoped>

</style>