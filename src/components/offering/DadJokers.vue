<template>
  <div id="container">
    <main>
      <h2>Don't Laugh Challenge</h2>
      <div class="joke"></div>
      <button class="get">Get Another Joke</button>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const joke = document.querySelector('.joke')
  const getBtn = document.querySelector('.get')

  getBtn.addEventListener('click', getJoke)

  const config = {
    headers: {
      Accept: 'application/json',
    },
  }
  async function getJoke() {
    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json()
    joke.innerText = data.joke
  }
  getJoke()
})
</script>

<style scoped>
#container {
  width: 100%;
  height: 100%;
  background-color: #686de0;
  display: flex;
  justify-content: center;
  align-items: center;
}
main {
  width: 760px;
  padding: 50px 20px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 2px 3px 5px rgb(95, 93, 93);
}
h2 {
  font-size: 1.6em;
  margin: 20px 0 40px 0;
  color: #666;
}
.joke {
  box-sizing: border-box;
  width: 100%;
  padding: 0 100px;
  height: 120px;
  font-size: 24px;
  letter-spacing: 1px;
  line-height: 1.3;
  color: #666;
}
button {
  box-sizing: content-box;
  height: 23px;
  line-height: 23px;
  padding: 14px 40px;
  font-size: 18px;
  background-color: #9f68e0;
  color: #fff;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  box-shadow: 2px 3px 5px #999;
}
</style>
