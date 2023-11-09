<template>
  <div id="container">
    <form action="">
      <h2>Please Login</h2>
      <label for="email">
        <span class="text">
          <span v-for="(word, index) in 'email'" :key="index">
            {{ word }}
          </span>
        </span>
        <input type="text" name="email" required autocomplete="off" />
      </label>
      <label for="password">
        <span class="text">
          <span v-for="(word, index) in 'password'" :key="index">
            {{ word }}
          </span>
        </span>
        <input type="text" name="password" required autocomplete="off" />
      </label>
      <button>Login</button>
      <p>
        <span class="text">Don't hava an account?</span>
        <a href="javascript:;">Register</a>
      </p>
    </form>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const labelTexts = document.querySelectorAll('label .text')
  const inputs = document.querySelectorAll('label input')
  inputs.forEach((inputLine, index) => {
    const words = [...labelTexts[index].children]
    inputLine.addEventListener('focus', focus)
    function focus() {
      let i = 0
      const timer = setInterval(() => {
        words[i].classList.remove('move-down')
        words[i].classList.add('move-up')
        ++i >= words.length && clearInterval(timer)
      }, 50)
      inputLine.addEventListener('blur', blur)
      input()
    }
    function blur() {
      let i = 0
      const timer = setInterval(() => {
        words[i].classList.remove('move-up')
        words[i].classList.add('move-down')
        ++i >= words.length && clearInterval(timer)
      }, 50)
    }
    function input() {
      inputLine.addEventListener('input', () => {
        if (inputLine.value.length != 0) {
          inputLine.removeEventListener('blur', blur)
        } else {
          inputLine.addEventListener('blur', blur)
        }
      })
    }
  })
})
</script>

<style scoped>
/* @font-face {
  font-family: 'Muli';
  src: url('./font/Muli.ttf');
}
body {
  font-family: 'Muli';
} */
#container {
  width: 100vw;
  height: 100vh;
  background-color: #4682b4;
  display: flex;
  justify-content: center;
  align-items: center;
}
form {
  width: 300px;
  padding: 20px 40px;
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
  border-radius: 5px;
}
h2 {
  width: 100%;
  height: 40px;
  margin: 20px 0 40px 0;
  text-align: center;
  font-size: 2em;
}
label {
  display: block;
  position: relative;
}
label .text {
  position: absolute;
  pointer-events: none;
  top: 20px;
}
label .text span {
  position: relative;
  font-size: 18px;
  top: 0px;
  color: #fff;
}
.move-up {
  color: #f00;
  animation: up 0.2s forwards;
}
.move-down {
  animation: down 0.2s forwards;
}
@keyframes up {
  0% {
    top: 0px;
    color: #fff;
  }
  90% {
    top: -40px;
  }
  100% {
    color: #add8e6;
    top: -35px;
  }
}
@keyframes down {
  0% {
    color: #add8e6;
    top: -35px;
  }
  90% {
    top: 5px;
  }
  100% {
    top: 0px;
    color: #fff;
  }
}
.text span:first-child {
  text-transform: capitalize;
}
input {
  width: 100%;
  height: 20px;
  margin: 0 0 40px 0;
  padding: 15px 0;
  outline: none;
  border: none;
  border-bottom: 2px solid #fff;
  background-color: transparent;
  color: #fff;
  font-size: 18px;
}
input:focus {
  border-bottom-color: #add8e6;
}
button {
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  padding: 15px;
  background-color: #add8e6;
  border: none;
  outline: none;
  line-height: 20px;
  font-size: 16px;
  color: #333;
  letter-spacing: 1px;
  cursor: pointer;
  border-radius: 5px;
}
button:focus {
  transform: scale(0.98);
}
p {
  margin: 30px 0 16px 0;
  width: 100%;
  height: 20px;
}
a {
  color: #add8e6;
  text-decoration: none;
}
</style>
