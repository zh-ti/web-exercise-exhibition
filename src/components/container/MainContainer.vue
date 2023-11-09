<template>
  <div id="wrapper">
    <router-view></router-view>
  </div>
</template>

<script setup></script>

<style>
#wrapper {
  position: relative;
  width: 100%;
  height: calc(100vh - 80px);
  overflow: auto;
  box-sizing: border-box;
  background-color: #f6f6f6;
}
</style>
