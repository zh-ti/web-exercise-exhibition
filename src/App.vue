<template>
  <header-container></header-container>
  <main-container></main-container>
</template>

<script>
import HeaderContainer from './components/container/HeaderContainer.vue'
import MainContainer from './components/container/MainContainer.vue'
export default {
  name: 'App',
  components: { MainContainer, HeaderContainer },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
