<template>
  <div id="container">
    <main>
      <h2>Drink Water</h2>
      <p>Goal: 2 Liters</p>
      <div class="container">
        <div class="remained">
          <h3>2L</h3>
          <span>Remained</span>
        </div>
        <div class="already">
          <h3>0%</h3>
        </div>
      </div>
      <p>Select how many glasses of water that you have drank</p>
      <div class="bottles">
        <div class="bottle">
          <span>
            250
            <br />
            ml
          </span>
        </div>
        <div class="bottle">
          <span>
            250
            <br />
            ml
          </span>
        </div>
        <div class="bottle">
          <span>
            250
            <br />
            ml
          </span>
        </div>
        <div class="bottle">
          <span>
            250
            <br />
            ml
          </span>
        </div>
        <div class="bottle">
          <span>
            250
            <br />
            ml
          </span>
        </div>
        <div class="bottle">
          <span>
            250
            <br />
            ml
          </span>
        </div>
        <div class="bottle">
          <span>
            250
            <br />
            ml
          </span>
        </div>
        <div class="bottle">
          <span>
            250
            <br />
            ml
          </span>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
onMounted(() => {
  const bottles = document.querySelectorAll('.bottle')
  const container = document.querySelector('.container')
  const [remained, already] = document.querySelectorAll('.container > *')
  const [remainedTextl, alreadyText] = document.querySelectorAll(
    '.container > * > h3'
  )
  bottles.forEach((item, index) => {
    item.addEventListener('click', () => {
      for (let i of bottles.keys()) {
        if (i <= index) {
          bottles[i].classList.add('actived')
        } else {
          bottles[i].classList.remove('actived')
        }
      }
      const alreadyH = (container.offsetHeight / 8) * (index + 1)
      already.style.height = alreadyH + 'px'
      remained.style.height = container.offsetHeight - alreadyH + 'px'
      alreadyText.innerText = ((index + 1) * 100) / 8 + '%'
      remainedTextl.innerText = 2 - (2 * (index + 1)) / 8 + 'L'
    })
  })
})
</script>

<style scoped>
#container {
  background-color: #3494e4;
  color: #fff;
  height: 100%;
}
main {
  margin: 0 auto;
  width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h2 {
  font-size: 2em;
  margin: 10px 0;
}
p {
  margin: 10px;
}
.container {
  width: 140px;
  min-height: 320px;
  margin: 20px 0;
  border: 4px solid #144fc6;
  border-radius: 2px 2px 40px 40px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
}
.container h3 {
  font-size: 18px;
}
.remained {
  width: 100%;
  color: #144fc6;
  font-size: 13px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: 0.3s;
}
.already {
  position: absolute;
  bottom: o;
  width: 100%;
  height: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6ab3f8;
  color: #144fc6;
  bottom: 0px;
  overflow: hidden;
  transition: 0.3s;
}
.already h3 {
  font-size: 28px;
}
.bottles {
  width: 280px;
  height: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.bottle {
  box-sizing: border-box;
  margin: 5px;
  width: 50px;
  height: 95px;
  border: 4px solid #144fc6;
  border-radius: 2px 2px 15px 15px;
  text-align: center;
  background-color: #ebf5fc;
  color: #144fc6;
  cursor: pointer;
  transition: 0.3s;
}
.bottle span {
  display: block;
  margin-top: 25px;
  font-size: smaller;
}
.actived {
  background-color: #6ab3f8 !important;
  color: #fff !important;
}
</style>
