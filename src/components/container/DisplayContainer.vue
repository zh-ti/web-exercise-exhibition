<template>
  <div id="card">
    <div class="picture"><img :src="picture" /></div>
    <div class="title">{{ name }}</div>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'
const props = defineProps(['name', 'picture'])
let name = ref(props.name),
  picture = ref(require(`../../assets/${props.picture}`))
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
  border: none;
}
#card {
  position: relative;
  width: 800px;
  height: 500px;
  background-color: #efefef;
  box-shadow: 0 0 10px #dcdcdc;
  border-radius: 10px;
  overflow: hidden;
  transition: 0.7s;
  cursor: pointer;
  color: #565656;
}
#card::after {
  content: '';
  transition: 0.7s;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
}
#card:hover {
  box-shadow: 0 0 3px #999;
}
#card:hover::after {
  background-color: rgba(0, 0, 0, 0.15);
}
.picture {
  display: block;
  width: 100%;
  height: calc(100% - 70px);
}
.title {
  width: 100%;
  text-align: center;
  line-height: 70px;
  font-size: 20px;
  font-weight: 600;
  border-top: 1px solid #ececec;
  background-color: #fff;
  text-transform: uppercase;
}
</style>
