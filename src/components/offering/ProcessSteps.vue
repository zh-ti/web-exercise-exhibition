<template>
  <div id="container">
    <main>
      <div class="progress-container">
        <span class="step done">1</span>
        <span class="step">2</span>
        <span class="step">3</span>
        <span class="step">4</span>
        <span class="progress-bar"></span>
      </div>
      <div class="buttons">
        <button class="prev useless">Prev</button>
        <button class="next">Next</button>
      </div>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
onMounted(() => {
  const steps = document.querySelectorAll('.step')
  const progressBar = document.querySelector('.progress-bar')
  const buttons = document.querySelectorAll('.buttons button')

  let crrentStep = 0,
    crrent //记录正在被激活的 step 和其下标

  buttons[0].addEventListener('click', () => {
    if (crrentStep > 0) {
      crrentStep == 1 && buttons[0].classList.add('useless')
      buttons[1].classList.remove('useless')
      crrent = steps[crrentStep]
      crrent.classList.remove('done')
      crrent = steps[--crrentStep]
      //设置 progress 的 width
      progressBar.style.width =
        crrent.offsetLeft + crrent.offsetWidth / 2 + 'px'
    }
  })
  buttons[1].addEventListener('click', () => {
    if (crrentStep < steps.length - 1) {
      buttons[0].classList.remove('useless')
      crrentStep >= steps.length - 2 && buttons[1].classList.add('useless')
      crrent = steps[++crrentStep]
      crrent.classList.add('done')
      //设置 progress 的 width
      progressBar.style.width =
        crrent.offsetLeft + crrent.offsetWidth / 2 + 'px'
    }
  })
})
</script>

<style scoped>
#container {
  background-color: #f6f7fb;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
main {
  width: 350px;
  height: 100px;
}
.progress-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  position: relative;
}
.progress-bar {
  transition: all 0.3s;
  position: absolute;
  height: 4px;
  background-color: #3498db;
  z-index: 1;
}
.progress-container::after {
  content: '';
  position: absolute;
  width: 350px;
  height: 3px;
  z-index: 0;
  background-color: #e0e0e0;
}
.step {
  transition: all 0.3s;
  position: relative;
  z-index: 2;
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  border: 3px solid #e0e0e0;
  border-radius: 50%;
  line-height: 24px;
  text-align: center;
  color: #999;
  background-color: #fff;
}
.done {
  border-color: #3498db;
}
.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
}
.buttons button {
  box-sizing: content-box;
  margin: 5px;
  padding: 8px 30px;
  width: 30px;
  height: 18px;
  border: none;
  outline: none;
  border-radius: 7px;
  background-color: #3498db;
  color: #fff;
  cursor: pointer;
}
.useless {
  background-color: #e0e0e0 !important;
}
</style>
