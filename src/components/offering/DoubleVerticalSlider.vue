<template>
  <div id="container">
    <main>
      <div class="slider-left">
        <div>
          <h2>Flying eagle</h2>
          <p>in the sunset</p>
        </div>
        <div>
          <h2>Lonely castle</h2>
          <p>in the wilderness</p>
        </div>
        <div>
          <h2>Bluuue Sky</h2>
          <p>with it's mountains</p>
        </div>
        <div>
          <h2>Nature flower</h2>
          <p>all in pink</p>
        </div>
      </div>
      <div class="slider-right">
        <img v-for="(src, index) in images" :src="src" :key="index" />
      </div>
      <div class="btns">
        <button class="iconfont icon-jiantou"></button>
        <button class="iconfont icon-jiantou"></button>
      </div>
    </main>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const images = ref([])
for (let i = 1; i <= 4; i++) {
  images.value.push(require(`@/assets/double-vertical-slider/image/${i}.jpg`))
}
onMounted(() => {
  const sliderBlock = document.querySelector('.slider-left')
  const sliderImage = document.querySelector('.slider-right')
  const [prev, next] = document.querySelectorAll('.btns button')
  const totalIndex = sliderBlock.children.length
  prev.addEventListener('click', toPrev)
  next.addEventListener('click', toNext)
  let crrentIndex = 1

  init()

  function toPrev() {
    --crrentIndex < 1 && (crrentIndex = totalIndex)
    slider()
    prev.removeEventListener('click', toPrev)
    setTimeout(() => prev.addEventListener('click', toPrev), 500)
  }
  function toNext() {
    ++crrentIndex > totalIndex && (crrentIndex = 1)
    slider()
    next.removeEventListener('click', toNext)
    setTimeout(() => next.addEventListener('click', toNext), 500)
  }
  function slider() {
    sliderBlock.style.transform = `translateY(${
      -(totalIndex - crrentIndex) * 100
    }%)`
    sliderImage.style.transform = `translateY(${-(crrentIndex - 1) * 100}%)`
  }
  function init() {
    sliderBlock.style.transform = `translateY(${
      -(totalIndex - crrentIndex) * 100
    }%)`
    sliderImage.style.transform = `translateY(0%)`
  }
})
</script>

<style scoped>
@import '@/assets/double-vertical-slider/font/iconfont.css';
@font-face {
  font-family: 'Open-Sans';
  src: url('@/assets/double-vertical-slider/font/Open-Sans.ttf');
}
#container {
  height: 100%;
  font-family: 'Open-Sans';
}
main {
  position: relative;
  min-width: 1000px;
  min-height: 500px;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
main > div {
  height: 100%;
  transition: transform 0.5s;
  float: left;
}
.slider-left {
  width: 35%;
  transform: translateY(-300%);
}
.slider-left div {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.slider-left div h2 {
  font-size: 2.5em;
  margin-bottom: 15px;
}
.slider-left div:nth-child(4) {
  background-color: #fd3555;
}
.slider-left div:nth-child(3) {
  background-color: #2a86ba;
}
.slider-left div:nth-child(2) {
  background-color: #252e33;
}
.slider-left div:nth-child(1) {
  background-color: #ffb866;
}
.slider-right {
  width: 65%;
  height: 100%;
  background-color: #eadad6;
}
.slider-right img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
#container .btns {
  position: absolute;
  top: calc(50% - 50px);
  left: calc(35% - 50px);
  width: 100px;
  height: 100px;
}
.btns button {
  width: 50px;
  height: 50px;
  border: none;
  outline: none;
  border-radius: 5px 0 0 5px;
  background-color: #fff;
  font-size: 23px;
  color: #999;
  cursor: pointer;
  transition: color 0.2s;
}
.btns button:nth-child(1) {
  transform: translateX(0px) translateY(50px);
}
.btns button:nth-child(2) {
  transform: translateX(0px) rotate(180deg);
}
.btns button:hover {
  color: #333;
}
</style>
