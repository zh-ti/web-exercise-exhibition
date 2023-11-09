<template>
  <div id="container">
    <main>
      <h2>
        Enter any choice, then click add or press enter, final click start or
        press ctrol+enter
      </h2>
      <div class="input-area">
        <input type="text" placeholder="Enter choice here" />
        <button class="add">Add</button>
        <button class="start">Start</button>
      </div>
      <div class="show-area">
        <span v-for="(item, index) in list" :key="index">{{ item }}</span>
      </div>
    </main>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
const list = ref([])

onMounted(() => {
  const speed = 200
  let prevChoice, crrent // 存储上一个 choice 和已经随机的次数
  const input = document.querySelector('input')
  const [add, start] = document.querySelectorAll('.input-area button')

  add.addEventListener('click', addItem)
  start.addEventListener('click', choose)
  document.addEventListener('keydown', e => {
    e.key == 'Enter' && addItem()
    if (e.ctrlKey && e.key == 'Enter') choose()
  })

  function addItem() {
    if (input.value.trim().length != 0) {
      list.value.push(input.value)
      input.value = ''
    }
  }
  function choose() {
    crrent = 0
    const choices = document.querySelectorAll('.show-area span')
    let times = choices.length * 3
    times > 50 && (times = 50)
    if (choices.length > 0) {
      const timer = setInterval(() => {
        ++crrent >= times && clearInterval(timer)
        const index = Math.floor(Math.random() * choices.length)
        prevChoice && prevChoice.classList.remove('chose')
        prevChoice = choices[index]
        setTimeout(() => choices[index].classList.add('chose'), 50)
      }, speed)
    }
  }
})
</script>

<style scoped>
#container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #a29bfe;
  height: 100%;
}
main {
  box-sizing: border-box;
  margin: 50px 0;
  width: 500px;
  height: 300px;
  padding: 30px;
}
h2 {
  font-size: 20px;
  text-align: center;
  color: #333;
}
.input-area {
  margin-top: 20px;
  height: 40px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-sizing: border-box;
}
input {
  width: 230px;
  height: 30px;
  padding: 5px;
  font-size: 20px;
  outline: none;
  border-radius: 5px;
  border: 1px solid #999;
  color: #333;
}
button {
  width: 70px;
  height: 40px;
  padding: 5px;
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #333;
  font-size: 18px;
}
.add {
  background-color: #81ecec;
}
.add:hover {
  background-color: #00cec9;
}
.start {
  background-color: #74b9ff;
}
.start:hover {
  background-color: #0984e3;
}
#container .show-area {
  margin-top: 20px;
  border-radius: 10px;
  padding: 20px;
  padding-top: 5px;
  min-height: 30px;
  background-color: #dfe6e9;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
}
#container .show-area span {
  display: block;
  background-color: #fab1a0;
  padding: 7px 14px;
  border-radius: 20px;
  margin-top: 15px;
  margin-right: 10px;
  color: #666;
}
.chose {
  color: #fff !important;
  background-color: #ff7675 !important;
}
</style>
