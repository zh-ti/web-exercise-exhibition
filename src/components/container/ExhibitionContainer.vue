<template>
  <main id="main">
    <template v-for="item in routes" :key="item.name">
      <display-container
        class="display-container"
        v-if="item.meta && item.meta.flag === 1"
        :name="item.name"
        :picture="item.meta.picture"
        @click="visit(item.path)"
      ></display-container>
    </template>
  </main>
</template>

<script setup>
import DisplayContainer from './DisplayContainer.vue'

import { onMounted } from 'vue'
import { useRouter, onBeforeRouteLeave } from 'vue-router'

const router = useRouter()
const routes = router.options.routes
let distance = 0
let direction = 1

function visit(path) {
  router.push(path)
}

onBeforeRouteLeave((to, from, next) => {
  let sliderData = {
    distance: document.querySelector('#main').scrollLeft,
    direction,
  }
  sessionStorage.setItem('slide-data', JSON.stringify(sliderData))
  next()
})

onMounted(() => {
  const sliderData = JSON.parse(sessionStorage.getItem('slide-data'))
  let autoScrollTimer,
    setTimer,
    isOver = false
  distance = sliderData?.distance || 0
  direction = sliderData?.direction || 1
  const main = document.querySelector('#main'),
    displayContainers = document.querySelectorAll('.display-container')
  main.scrollLeft = distance
  main.addEventListener('wheel', event => {
    event.preventDefault()
    main.scrollLeft += event.deltaY + 10
    setTimer && clearTimeout(setTimer)
    if (!isOver)
      setTimer = setTimeout(() => (autoScrollTimer = autoScroll(main)), 3000)
  })
  displayContainers.forEach(item => {
    item.addEventListener('mouseover', () => {
      isOver = true
      autoScrollTimer && clearInterval(autoScrollTimer)
    })
    item.addEventListener('mouseout', () => {
      isOver = false
      autoScrollTimer = autoScroll(main)
    })
  })
  autoScrollTimer = autoScroll(main)

  function autoScroll(dom) {
    autoScrollTimer && clearInterval(autoScrollTimer)
    return setInterval(() => {
      if (dom.scrollLeft + dom.clientWidth >= dom.scrollWidth - 2) {
        direction = -1
      } else if (dom.scrollLeft == 0) {
        direction = 1
      }
      distance = dom.scrollLeft + direction
      // console.log(distance)
      dom.scrollLeft = distance
    }, 5)
  }
})
</script>

<style scoped>
#main {
  height: 100%;
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  align-items: center;
  overflow: auto;
}
.display-container {
  flex-shrink: 0;
  margin-left: 100px;
}
.display-container:last-child {
  margin-right: 100px;
}
</style>
