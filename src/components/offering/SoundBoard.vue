<template>
  <div id="container">
    <button class="sound" v-for="item in source" :key="item.name">
      <audio :src="item.src"></audio>
      <span>{{ item.name }}</span>
    </button>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
let source = ref([
  {
    name: 'applause',
    src: require('@/assets/sound-board/audio/applause.mp3'),
  },
  {
    name: 'boo',
    src: require('@/assets/sound-board/audio/boo.mp3'),
  },
  {
    name: 'gasp',
    src: require('@/assets/sound-board/audio/gasp.mp3'),
  },
  {
    name: 'tada',
    src: require('@/assets/sound-board/audio/tada.mp3'),
  },
  {
    name: 'victory',
    src: require('@/assets/sound-board/audio/victory.mp3'),
  },
  {
    name: 'wrong',
    src: require('@/assets/sound-board/audio/wrong.mp3'),
  },
])
onMounted(() => {
  const buttons = document.querySelectorAll('.sound')
  const sounds = document.querySelectorAll('.sound audio')
  let playing = null //用于记录正在播放的音频
  buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      btn.classList.add('actived')
      setTimeout(() => btn.classList.remove('actived'), 200)
      playing != null && playing.pause()
      playing = sounds[index]
      sounds[index].currentTime = 0
      sounds[index].play()
    })
  })
})
</script>

<style scoped>
#container {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: #74b9ff;
  display: flex;
  padding: 50px;
  justify-content: space-evenly;
  align-items: center;
}
.sound {
  box-sizing: content-box;
  outline: none;
  border: none;
  width: 100px;
  height: 30px;
  padding: 24px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 7px;
  line-height: 30px;
  text-align: center;
  font-size: 20px;
  color: #eee;
  cursor: pointer;
  text-transform: capitalize;
}
.sound:hover {
  background-color: rgba(0, 0, 0, 0.4);
}
.actived {
  animation: actived 0.2s;
}
@keyframes actived {
  0% {
    transform: scale(1);
  }
  80% {
    transform: scale(0.95);
  }
  10% {
    transform: scale(1);
  }
}
</style>
