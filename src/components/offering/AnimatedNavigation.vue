<template>
  <div id="container">
    <div class="bg bg-top"></div>
    <div class="bg bg-bottom"></div>
    <main>
      <nav>
        <div class="links">
          <a href="javascript:;">Home</a>
          <a href="javascript:;">Works</a>
          <a href="javascript:;">About</a>
          <a href="javascript:;">Contact</a>
        </div>
        <button>
          <span></span>
          <span></span>
        </button>
      </nav>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const button = document.querySelector('#container button')
  const lines = [...button.children]
  const links = document.querySelector('#container .links')
  button.addEventListener('click', () => {
    links.classList.toggle('close')
    button.classList.toggle('cross')
    if (button.classList.value.indexOf('cross') != -1) {
      setTimeout(() => {
        lines.forEach(line => line.classList.toggle('absolute'))
      }, 460)
    } else {
      lines.forEach(line => line.classList.remove('absolute'))
    }
  })
})
</script>

<style scoped>
#container {
  height: 100%;
  position: relative;
}
main {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bg {
  height: 50%;
}
.bg-top {
  background-color: #eafbff;
}
.bg-bottom {
  background-color: #5290f9;
}
nav {
  box-sizing: border-box;
  position: absolute;
  height: 70px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 1px 3px #999;
  display: flex;
  align-items: center;
  border-radius: 3px;
}

nav .links {
  width: 300px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  transition: width 0.7s;
  overflow: hidden;
}
.close {
  width: 0 !important;
}
.close a {
  transform: rotateY(360deg);
  opacity: 0;
}
nav a {
  text-decoration: none;
  transition: 0.7s;
  color: #333;
}
button {
  border: none;
  outline: none;
  background-color: #fff;
  width: 30px;
  height: 30px;
  display: flex;
  padding: 5px 0;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  cursor: pointer;
}
span {
  display: block;
  width: 22px;
  border-radius: 3px;
  border-bottom: 3px solid #5092f9;
  transition: transform 0.7s;
  position: relative;
}
.cross {
  justify-content: center !important;
}
.absolute {
  position: absolute;
}
.cross span:first-child {
  transform: rotate(405deg);
}
.cross span:nth-child(2) {
  transform: rotate(-405deg);
}
</style>
