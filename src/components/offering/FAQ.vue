<template>
  <div id="container">
    <main>
      <h2>Frequently Asked Questions</h2>
      <div class="container">
        <div class="question showResult">
          <h3>Why shouldn't we trust atoms?</h3>
          <div class="result">They make up everything</div>
          <span class="iconfont icon-xiajiantou"></span>
          <span class="iconfont icon-chahao"></span>
          <div class="message-symbol">
            <span class="iconfont icon-message1"></span>
            <span class="iconfont icon-message1"></span>
          </div>
        </div>
        <div class="question">
          <h3>What do you call someone with no body and no nose?</h3>
          <div class="result">Nobody knows.</div>
          <span class="iconfont icon-xiajiantou"></span>
          <span class="iconfont icon-chahao"></span>
          <div class="message-symbol">
            <span class="iconfont icon-message1"></span>
            <span class="iconfont icon-message1"></span>
          </div>
        </div>
        <div class="question">
          <h3>What's the object-oriented way to become wealthy?</h3>
          <div class="result">Inheritance.</div>
          <span class="iconfont icon-xiajiantou"></span>
          <span class="iconfont icon-chahao"></span>
          <div class="message-symbol">
            <span class="iconfont icon-message1"></span>
            <span class="iconfont icon-message1"></span>
          </div>
        </div>
        <div class="question">
          <h3>How many tickles does it take to tickle an octopus?</h3>
          <div class="result">Ten-tickles!</div>
          <span class="iconfont icon-xiajiantou"></span>
          <span class="iconfont icon-chahao"></span>
          <div class="message-symbol">
            <span class="iconfont icon-message1"></span>
            <span class="iconfont icon-message1"></span>
          </div>
        </div>
        <div class="question">
          <h3>What is: 1 + 1?</h3>
          <div class="result">Depends on who are you asking.</div>
          <span class="iconfont icon-xiajiantou"></span>
          <span class="iconfont icon-chahao"></span>
          <div class="message-symbol">
            <span class="iconfont icon-message1"></span>
            <span class="iconfont icon-message1"></span>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const questions = document.querySelectorAll('.question')
  const closes = document.querySelectorAll('.icon-chahao')
  const opens = document.querySelectorAll('.icon-xiajiantou')
  opens.forEach((item, index) => {
    item.addEventListener('click', () => {
      questions[index].classList.add('showResult')
    })
  })
  closes.forEach((item, index) => {
    item.addEventListener('click', () => {
      questions[index].classList.remove('showResult')
    })
  })
})
</script>

<style scoped>
@import '@/assets/FAQ/font/iconfont.css';
@font-face {
  font-family: 'Muli';
  src: url('@/assets/FAQ/font/iconfont.ttf');
}
#container {
  background-color: #f0f0f0;
  font-family: 'Muli';
  height: 100%;
}
main {
  margin: 0 auto;
  width: 600px;
  padding: 20px;
}
h2 {
  text-align: center;
  font-size: 30px;
}
.question {
  width: 540px;
  padding: 30px;
  margin: 20px 0;
  border: 1px solid #999;
  border-radius: 10px;
  position: relative;
  transition: 0.3s;
  overflow: hidden;
}
.question * {
  position: relative;
  z-index: 1;
}
.result {
  display: none;
  height: 30px;
  margin-top: 30px;
  color: #333;
  line-height: 30px;
  font-size: 17px;
}
.showResult {
  background-color: #fff;
  box-shadow: 0px 2px 7px #bbb;
}
.showResult .result {
  display: block !important;
}
.showResult .message-symbol span {
  display: block !important;
}
.showResult .message-symbol span:first-child {
  transform: rotateY(180deg) translate(-20px, -20px);
  color: #74b9ff;
}
.showResult .icon-chahao {
  display: block !important;
}
.showResult .icon-xiajiantou {
  display: none !important;
}
.iconfont {
  display: block;
  position: absolute;
  width: 20px;
  height: 20px;
  right: 35px;
  top: 30px;
  font-size: 24px;
  cursor: pointer;
}
.icon-chahao {
  display: none !important;
  font-size: 30px;
  color: #999;
}
.message-symbol {
  position: unset;
}
.message-symbol span {
  display: none;
  opacity: 0.5;
  z-index: 0;
  top: 40px;
  left: 20px;
  font-size: 80px;
  color: #55efc4;
}
</style>
