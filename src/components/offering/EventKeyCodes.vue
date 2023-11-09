<template>
  <div id="container">
    <main>
      <div class="first">Press any key to get the KeyCode</div>
      <div class="real-show">
        <div class="block">
          <span>Event.Key</span>
          <div></div>
        </div>
        <div class="block">
          <span>Event.keyCode</span>
          <div></div>
        </div>
        <div class="block">
          <span>Event.Code</span>
          <div></div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const first = document.querySelector('.first')
  const reals = document.querySelectorAll('.block')
  const [key, keyCode, code] = [...document.querySelectorAll('.block div')]
  document.addEventListener('keydown', e => {
    e.preventDefault()
    first.style.display = 'none'
    reals.forEach(item => (item.style.display = 'block'))
    key.innerText = e.key
    keyCode.innerText = e.keyCode
    code.innerText = e.code
  })
})
</script>

<style scoped>
#container {
  background-color: #e1e1e1;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.first {
  padding: 20px;
  border: 1px solid #999;
  background-color: #eee;
  font-size: 20px;
  font-weight: bold;
  color: #333;
}
.real-show {
  width: 500px;
  display: flex;
  justify-content: space-between;
}
.block {
  display: none;
  width: 170px;
}
.block > div {
  margin: 10px;
  padding: 20px;
  height: 22px;
  line-height: 22px;
  border: 1px solid #333;
  background-color: #eee;
  font-size: 18px;
  font-weight: bold;
}
</style>
