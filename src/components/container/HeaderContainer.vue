<template>
  <header v-if="!hide">
    <button @click="prev">PREV</button>
    <button @click="back">HOME</button>
    <button @click="next">NEXT</button>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const routes = router.options.routes

function back() {
  router.replace('/')
}
function next() {
  let curRoute = router.options.history.location
  let index = routes.findIndex(item => item.path === curRoute)
  if (index != -1 && index + 1 < routes.length) {
    router.push(routes[index + 1].path)
  }
}
function prev() {
  let curRoute = router.options.history.location
  let index = routes.findIndex(item => item.path === curRoute)
  if (index != -1 && index - 1 >= 0) {
    router.push(routes[index - 1].path)
  }
}
</script>

<style scoped>
header {
  position: relative;
  width: 100%;
  height: 80px;
  background-color: #ececec;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 8px #f3f3f3;
  z-index: 1000;
}
header button {
  margin: 0 25px 0 25px;
  padding: 10px 20px;
  border: none;
  outline: none;
  background-color: #0083c8;
  color: #fff;
  font-size: 18px;
  border-radius: 7px;
  cursor: pointer;
  transition: 0.3s;
}
header button:hover {
  background-color: #2e9fdc;
  transform: scale(0.95);
}
</style>
