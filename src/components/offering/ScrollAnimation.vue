<template>
  <div id="container">
    <main>
      <h1>Scroll Please</h1>
      <div class="block">Content</div>
      <div class="block">Content</div>
      <div class="block">Content</div>
      <div class="block">Content</div>
      <div class="block">Content</div>
      <div class="block">Content</div>
      <div class="block">Content</div>
      <div class="block">Content</div>
      <div class="block">Content</div>
      <div class="block">Content</div>
      <div class="block">Content</div>
      <div class="block">Content</div>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const blocks = document.querySelectorAll('.block')
  const container = document.querySelector('#container')
  container.addEventListener('wheel', slideIn)
  function slideIn() {
    blocks.forEach(block => {
      //获取 block 元素底部到可显示区域顶部的距离
      let clientBottom = block.getBoundingClientRect().bottom
      if (window.innerHeight - clientBottom <= 0) {
        block.classList.remove('slide-in')
      } else {
        block.classList.add('slide-in')
      }
    })
  }
  slideIn()
})
</script>

<style scoped>
#container {
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #2d3436;
}
main {
  display: flex;
  padding: 50px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
main h1 {
  margin: 30px 0;
  letter-spacing: 3px;
  font-size: 2.5em;
  color: #fff;
}
.block {
  width: 400px;
  height: 200px;
  margin: 30px 0;
  background-color: #dfe6e9;
  border-radius: 10px;
  border: 2px solid #dfe6e9;
  box-shadow: 3px 3px 10px #b2bec3;
  line-height: 200px;
  text-align: center;
  font-size: 2em;
  font-weight: bold;
  color: #555;
  transition: all 0.5s;
}
.block:nth-child(even) {
  transform: translateX(-2000px);
}
.block:nth-child(odd) {
  transform: translateX(2000px);
}
.slide-in {
  transform: translateX(0) !important;
}
</style>
