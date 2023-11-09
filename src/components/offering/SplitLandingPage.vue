<template>
  <div id="container">
    <main>
      <div class="left goods">
        <h2>HUAWEI Mate 40 Pro</h2>
        <button>BUY NOW</button>
      </div>
      <div class="right goods">
        <h2>Lenovo XiaoXin Pro 14</h2>
        <button>BUY NOW</button>
      </div>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const [left, right] = document.querySelectorAll('.goods')
  left.addEventListener('mouseover', () => {
    right.classList.add('shrink')
  })
  left.addEventListener('mouseout', () => {
    right.classList.remove('shrink')
  })
  right.addEventListener('mouseover', () => {
    left.classList.add('shrink')
  })
  right.addEventListener('mouseout', () => {
    left.classList.remove('shrink')
  })
})
</script>

<style scoped>
#container {
  width: 100%;
  height: 100%;
}
main {
  width: 100%;
  height: 100%;
  display: flex;
}
main .goods {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: all 1s;
}
main .goods:hover {
  width: 70%;
}
.shrink {
  width: 30% !important;
}
main .left {
  background: url('@/assets/split-landing-page/huawei-phone.jpg') no-repeat;
  background-size: cover;
}
main .right {
  background: url('@/assets/split-landing-page/lenovo-xiaoxin.jpg') no-repeat;
  background-size: cover;
}
main .left::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(73, 16, 16, 0.4);
}
main .right::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(85, 112, 134, 0.5);
}
.goods h2 {
  position: relative;
  z-index: 10;
  margin: 30px 0;
  font-size: 2em;
  color: #fff;
}
.goods button {
  position: relative;
  z-index: 10;
  font-size: 1.1em;
  padding: 15px 50px;
  font-weight: bold;
  border: 3px solid #fff;
  color: #fff;
  background-color: transparent;
  cursor: pointer;
}
.left button:hover {
  border-color: #e45353;
  background-color: #e45353;
}
.right button:hover {
  border-color: #3ca7e6;
  background-color: #3ca7e6;
}
</style>
