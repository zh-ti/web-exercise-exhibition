<template>
  <div id="container" :style="`background-image: ${bgUrl}`">
    <main>
      <div class="imgBox">
        <div class="img" :style="`background-image: ${bgUrl}`"></div>
      </div>
      <span class="iconfont icon-jiantou btn left"></span>
      <span class="iconfont icon-jiantou btn right"></span>
    </main>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
let images = ref([])
for (let i = 1; i <= 9; i++) {
  images.value.push(
    'url(' + require(`@/assets/background-slider/image/${i}.jpg`) + ')'
  )
}
let bgUrl = ref(images.value[0])
onMounted(() => {
  const [prev, next] = document.querySelectorAll('#container .btn')
  let i = 1
  prev.addEventListener('click', () => {
    i <= 1 ? (i = 9) : i--
    bgUrl.value = images.value[i - 1]
  })
  next.addEventListener('click', () => {
    i >= 9 ? (i = 1) : i++
    bgUrl.value = images.value[i - 1]
  })
})
</script>

<style scoped>
@import '@/assets/background-slider/font/iconfont.css';
#container {
  display: flex;
  width: 100vw;
  height: calc(100vh - 80px);
  justify-content: center;
  align-items: center;
  background-position: center center;
  background-size: cover;
  transition: 0.2s ease;
}
#container::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
}
main {
  position: relative;
  width: 70%;
  height: 70%;
}
.imgBox {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.img {
  position: absolute;
  z-index: 100;
  width: 100vw;
  height: calc(100vh - 80px);
  top: calc(-15vh + 10px);
  left: calc(-15vw);
  transition: 0.2s;
  user-select: none;
  background-position: center center;
  background-size: cover;
}
span {
  box-sizing: border-box;
  display: flex;
  position: absolute;
  width: 50px;
  height: 70px;
  top: calc(50% - 35px);
  font-size: 30px !important;
  line-height: 70px;
  padding-left: 7px;
  cursor: pointer;
  border-radius: 0 7px 7px 0;
  z-index: 1;
  border: 3px solid rgba(255, 255, 255, 0.6);
  color: #eee;
  border-left: none;
  transition: 0.2s ease;
}
span:hover {
  border-color: rgba(255, 255, 255, 0.8);
  color: #fff;
}
.left {
  transform: rotate(180deg) translateX(-1px);
  left: -50px;
}
.right {
  right: -50px;
}
</style>
