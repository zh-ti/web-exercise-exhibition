<template>
  <div id="container">
    <main>
      <div class="img active">
        <img src="../../assets/expending-cards/1.jpg" alt="" />
        <span>Good Afternoon</span>
      </div>
      <div class="img">
        <img src="../../assets/expending-cards/2.jpg" alt="" />
        <span>The World At Nigth</span>
      </div>
      <div class="img">
        <img src="../../assets/expending-cards/3.jpg" alt="" />
        <span>Paper Plane</span>
      </div>
      <div class="img">
        <img src="../../assets/expending-cards/4.jpg" alt="" />
        <span>Space Man</span>
      </div>
      <div class="img">
        <img src="../../assets/expending-cards/5.jpg" alt="" />
        <span>Beautiful Beach</span>
      </div>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
onMounted(() => {
  const imgs = document.querySelectorAll('.img')
  imgs.forEach(item => {
    item.addEventListener('click', () => {
      //判断 img 的 class 是否带有 active
      if (item.classList.value.indexOf('active') == -1) {
        imgs.forEach(item => {
          if (item.classList.value.indexOf('active') != -1) {
            //使 class 已经带有的 active 的 img，移除 active
            item.classList.remove('active')
          }
        })
      }
      //为被点击的 img 的 class 添加 active
      item.classList.add('active')
    })
  })
})
</script>

<style scoped>
#container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
main {
  position: absolute;
  left: calc(50% - 45vw);
  top: calc(50% - 40vh);
  min-width: 800px;
  min-height: 500px;
  width: 90vw;
  height: 80vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
}
.img {
  width: calc((80vw - 500px) / 5);
  min-width: 70px;
  margin-left: 20px;
  height: 100%;
  position: relative;
  /* 过渡动画 0.7s 先快后慢 */
  transition: all 0.7s ease-in;
  overflow: hidden;
}
.img:first-child {
  margin-left: 0;
}
.img span {
  opacity: 0;
  position: absolute;
  left: 30px;
  bottom: 30px;
  color: #fff;
  font-size: 28px;
  /* 文本不换行 */
  white-space: nowrap;
}
img {
  width: 100%;
  height: 100%;
  border-radius: 50px;
  /* 使用 cover 的方式展示图片，保证图片不变性 */
  object-fit: cover;
}
.active {
  width: 100%;
}
.active img {
  border-radius: 50px;
}
.active span {
  /* 过渡动画 0.3s 延迟 0.7s 执行 */
  transition: all 0.3s 0.7s;
  opacity: 1;
}
</style>
