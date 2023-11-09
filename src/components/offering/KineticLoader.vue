<template>
  <div id="container">
    <main>
      <div class="loader">
        <span></span>
        <span></span>
      </div>
    </main>
  </div>
</template>

<script setup></script>

<style scoped>
#container,
main,
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
}
#container {
  height: 100%;
  background-color: #2c3e50;
}
main {
  width: 50%;
  height: 50%;
}
.loader span {
  margin-top: 40px;
  display: block;
  width: 80px;
  height: 80px;
  background-color: #fff;
}
.loader span:first-child {
  transform-origin: right top;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 0);
  animation: rotate1 2s infinite linear;
}
.loader span:nth-child(2) {
  transform-origin: left top;
  clip-path: polygon(0 0, 100% 0, 0 100%, 0 0);
  animation: rotate2 2s infinite linear;
}
@keyframes rotate1 {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(180deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes rotate2 {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
