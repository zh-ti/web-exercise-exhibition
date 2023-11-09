<template>
  <div id="container">
    <main>
      <div class="input"><input type="text" placeholder="Search..." /></div>
      <button><span class="iconfont icon-sousuo"></span></button>
    </main>
  </div>
</template>

<script setup></script>

<style scoped>
@import '@/assets/hidden-search/font/iconfont.css';

#container {
  background-color: #0097e6;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}
main {
  height: 50px;
  background-color: #fff;
  border-radius: 7px;
  overflow: hidden;
}
main:hover .input {
  width: 200px;
}
.input {
  transition: width 0.5s;
  float: left;
  width: 0px;
  overflow: hidden;
}
input {
  padding: 15px;
  font-size: 18px;
  border: none;
  outline: none;
}
button {
  width: 50px;
  height: 50px;
  border: none;
  outline: none;
  background-color: #eee;
  cursor: pointer;
  transition: all 0.2s;
}
button:hover {
  background-color: #ddd;
}
button .iconfont {
  font-size: 24px;
}
</style>
