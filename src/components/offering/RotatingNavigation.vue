<template>
  <div id="container">
    <main>
      <div class="circle">
        <span class="iconfont icon-rotate-left"></span>
        <span class="iconfont icon-rotate-right"></span>
      </div>
      <div class="container">
        <section>
          <article>
            <h2>Amazing Article</h2>
            <i>Florin Pop</i>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium quia in ratione dolores cupiditate, maxime aliquid
              impedit dolorem nam dolor omnis atque fuga labore modi veritatis
              porro laborum minus, illo, maiores recusandae cumque ipsa quos.
              Tenetur, consequuntur mollitia labore pariatur sunt quia harum
              aut. Eum maxime dolorem provident natus veritatis molestiae cumque
              quod voluptates ab non, tempore cupiditate? Voluptatem, molestias
              culpa. Corrupti, laudantium iure aliquam rerum sint nam quas dolor
              dignissimos in error placeat quae temporibus minus optio eum
              soluta cupiditate! Cupiditate saepe voluptates laudantium. Ducimus
              consequuntur perferendis consequatur nobis exercitationem
              molestias fugiat commodi omnis. Asperiores quia tenetur nemo ipsa.
            </p>
            <h3>My Dog</h3>
            <img :src="dogImg" class="my-dog" alt="" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
              libero deleniti rerum quo, incidunt vel consequatur culpa ullam.
              Magnam facere earum unde harum. Ea culpa veritatis magnam at
              aliquid. Perferendis totam placeat molestias illo laudantium?
              Minus id minima doloribus dolorum fugit deserunt qui vero
              voluptas, ut quia cum amet temporibus veniam ad ea ab
              perspiciatis, enim accusamus asperiores explicabo provident.
              Voluptates sint, neque fuga cum illum, tempore autem maxime
              similique laborum odio, magnam esse. Aperiam? HOME ABOUT
            </p>
          </article>
        </section>
      </div>
      <div class="buttons">
        <a href="javascript:;">
          <span class="iconfont icon-HOME"></span>
          HOME
        </a>
        <a href="javascript:;">
          <span class="iconfont icon-about"></span>
          ABOUT
        </a>
        <a href="javascript:;">
          <span class="iconfont icon-contact"></span>
          CONTACT
        </a>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
let dogImg = ref(require('@/assets/rotating-navigation/mydog.jpg'))
onMounted(() => {
  const container = document.querySelector('.container')
  const circle = document.querySelector('.circle')
  const [open, close] = document.querySelectorAll('.circle span')
  const btnBox = document.querySelector('.buttons')

  close.addEventListener('click', () => {
    container.classList.remove('open')
    circle.classList.remove('rotate')
    btnBox.classList.remove('show')
  })
  open.addEventListener('click', () => {
    container.classList.add('open')
    circle.classList.add('rotate')
    btnBox.classList.add('show')
  })
})
</script>

<style scoped>
@import '@/assets/rotating-navigation/font/iconfont.css';
@font-face {
  font-family: 'Lato';
  src: url('@/assets/rotating-navigation/font/Lato-Medium.ttf')
    format('truetype');
}
#container {
  font-family: 'Lato', sans-serif;
  overflow-x: hidden;
}
main {
  margin: 0;
  background-color: #333;
  position: relative;
}
.open {
  transform: rotate(-20deg);
}
.container {
  position: relative;
  z-index: 1;
  width: calc(100% - 100px);
  padding: 50px;
  background-color: #fafafa;
  transition: all 0.5s linear;
  transform-origin: top left;
}
section {
  width: 1000px;
  margin: 50px auto;
}
.my-dog {
  width: 1000px;
}
h2 {
  color: #222;
  font-size: 2em;
  font-weight: blod;
}
i {
  font-size: smaller;
  color: #888;
}
p {
  margin: 16px 0;
  line-height: 1.5;
  color: #333;
  font-weight: 100;
}
h3 {
  margin: 18px 0;
}
.circle {
  position: fixed;
  z-index: 10;
  top: 0;
  left: -100px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #ff7979;
  transition: all 0.5s linear;
  transform: rotate(0deg);
}
.rotate {
  transform: rotate(-95deg);
}
.circle .iconfont {
  display: block;
  position: absolute;
  font-size: 40px;
  bottom: 35px;
  color: #fff;
  cursor: pointer;
}
.iconfont:first-child {
  transform: rotate(180deg);
  right: 35px;
}
.iconfont:nth-child(2) {
  transform: rotate(275deg);
  left: 35px;
}
.buttons {
  position: fixed;
  z-index: 0;
  bottom: 40px;
  padding-left: 30px;
}
.buttons a {
  opacity: 0;
  display: block;
  margin: 40px 0;
  color: #fafafa;
  text-decoration: none;
  font-size: 18px;
  line-height: 20px;
  transition: all 0.5s;
}
.buttons a:hover {
  color: #ff7979;
}
.buttons a span {
  font-size: 18px;
  margin-right: 3px;
}
.buttons a:first-child span {
  font-size: 28px;
  margin-right: 0;
}
.show a {
  opacity: 1;
}
.show a:nth-child(2) {
  margin-left: 45px;
}
.show a:nth-child(3) {
  margin-left: 60px;
}
</style>
