<template>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
  </head>
  <body>
  <header>
    <div class="search-box">
      <form action="" method="post">
        <input type="text" v-model="searchWords">
        <button><img src="../assets/search.svg"></button>
      </form>
    </div>
    <p1>{{ searchWords }}</p1>
    <router-link to="/join">회원가입</router-link>
  </header>
  </body>
  </html>
</template>
<script>

export default {
  name: "header",
  data() {
    return {
      searchWords: ""
    }
  },
  methods: ({})
}
</script>

<style scoped>

</style>