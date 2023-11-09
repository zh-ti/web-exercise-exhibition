<template>
  <div id="container">
    <main>
      <div class="content">
        <span class="iconfont icon-Twitter"></span>
        <h2>0000</h2>
        <p>Twitter Followers</p>
      </div>
      <div class="content">
        <span class="iconfont icon-Youtubelogo"></span>
        <h2>0000</h2>
        <p>Youtube Subsribers</p>
      </div>
      <div class="content">
        <span class="iconfont icon-facebook"></span>
        <h2>0000</h2>
        <p>Facebook Fans</p>
      </div>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const apps = document.querySelectorAll('.content h2')
  const follows = [32000, 50000, 11000] //粉丝数量
  apps.forEach((item, index) => {
    const num = Math.floor(follows[index] / 200)
    function increment() {
      if (item.innerText > follows[index]) {
        item.innerText = follows[index]
      } else {
        item.innerText = item.innerText * 1 + num
        setTimeout(increment, 1) //此处有参考源码
      }
    }
    increment()
  })
})
</script>

<style scoped>
@import '@/assets/increment-count/font/iconfont.css';
@font-face {
  font-family: 'RobotoMono';
  src: url('@/assets/increment-count/font/RobotoMono.ttf');
}
#container {
  font-family: 'RobotoMono';
  background-color: #8e44ad;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
main {
  display: flex;
  align-items: center;
}
.content {
  text-align: center;
  margin: 30px 50px;
  color: #fff;
}
h2 {
  margin: 5px 0;
  font-size: 3.5em;
  font-weight: 500;
}
.content:first-child span,
.content:nth-child(2) span {
  height: 48px;
  line-height: 48px;
  font-size: 4em;
}
.content:nth-child(3) span {
  height: 48px;
  line-height: 48px;
  font-size: 3em;
}
</style>
