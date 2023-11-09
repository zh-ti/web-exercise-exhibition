<template>
  <div id="container">
    <img :src="background" class="background" alt="background" />
    <div class="percent">0%</div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
let background = ref(require('@/assets/blurry-loading/background.jpg'))
onMounted(() => {
  const percent = document.querySelector('.percent')
  const background = document.querySelector('.background')
  let percentNum = 0
  const timer = setInterval(() => {
    percent.innerHTML = `${percentNum}%`
    background.style.filter = `blur(${(100 - percentNum) / 5}px)`
    percent.style.opacity = `${1 - percentNum / 100}`
    ++percentNum >= 100 && clearInterval(timer)
  }, 20)
})
</script>

<style scoped>
#container {
  width: 100%;
  height: 100%;
  min-width: 1000px;
  min-height: 600px;
  overflow: hidden;
  position: relative;
}
.background {
  width: 100%;
  height: 100%;
  user-select: none;
}
.percent {
  position: absolute;
  letter-spacing: 3px;
  width: 100px;
  height: 50px;
  z-index: 1;
  font-size: 45px;
  color: #636e72;
  top: calc(50% - 50px);
  left: calc(50% - 25px);
  pointer-events: none;
}
</style>
