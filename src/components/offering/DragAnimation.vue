<template>
  <div id="container">
    <div class="put-area">
      <img :src="imageSrc" draggable="true" class="image" />
    </div>
    <div class="put-area"></div>
    <div class="put-area"></div>
    <div class="put-area"></div>
    <div class="put-area"></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
let imageSrc = ref(
  require(`@/assets/drag-animation/image/img${
    Math.floor(Math.random() * 5) + 1
  }.jpg`)
)
onMounted(() => {
  const putAreas = document.querySelectorAll('.put-area')
  const image = document.querySelector('.image')
  putAreas.forEach(item => {
    item.addEventListener('dragenter', e => {
      if (e.target.classList.contains('put-area'))
        e.target.classList.add('primary')
    })
    item.addEventListener('dragleave', e =>
      e.target.classList.remove('primary')
    )
    //由于浏览器默认不允许放置，因此需要取消默认事件
    item.addEventListener('dragover', e => e.preventDefault())
    item.addEventListener('drop', e => {
      e.preventDefault()
      putAreas.forEach(item => item.classList.remove('primary'))
      if (e.target.classList.contains('put-area')) e.target.appendChild(image)
    })
  })
})
</script>

<style scoped>
#container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0984e3;
}
#container div {
  width: 150px;
  height: 150px;
  border: 3px solid #34495e;
  margin: 10px;
  background-color: #cecece;
  overflow: hidden;
}
img {
  width: 150px;
  cursor: pointer;
}
#container .primary {
  border-style: dashed;
  border-color: #fff;
  background-color: #555;
}
</style>
