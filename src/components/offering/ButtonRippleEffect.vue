<template>
  <div id="container">
    <button @click="click">
      CLICK ME
      <div class="effectEl"></div>
    </button>
  </div>
</template>

<script setup>
function click(e) {
  const effectEl = e.target.querySelector('div')
  effectEl.style.top = e.offsetY - 5 + 'px'
  effectEl.style.left = e.offsetX - 5 + 'px'
  effectEl.classList.add('animate')
  setTimeout(() => effectEl.classList.remove('animate'), 300)
}
</script>

<style scoped>
#container {
  background-color: #111;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  position: relative;
  width: 130px;
  height: 50px;
  background-color: #0984e3;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 7px;
  font-size: 17px;
  line-height: 50px;
  letter-spacing: 1px;
  color: #fff;
  overflow: hidden;
}

.effectEl {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fff;
  transform: scale(0);
  z-index: 100;
}
.animate {
  animation: click 0.5s forwards linear;
}
@keyframes click {
  to {
    transform: scale(50);
    opacity: 0;
  }
}
</style>
