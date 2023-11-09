<template>
  <div id="container">
    <main>
      <button class="mode" @click="toggleMode">Dark Mode</button>
      <div class="clock">
        <div class="hour"></div>
        <div class="minute"></div>
        <div class="secound">
          <div class="line"></div>
          <div class="circle"></div>
        </div>
      </div>
      <h2>
        <span>0</span>
        <span>:</span>
        <span>00</span>
        <span>AM</span>
      </h2>
      <p>
        <span></span>
        <span></span>
        <span></span>
      </p>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'


onMounted(() => {
  const [hour, , minute, half] = document.querySelectorAll('h2 span')
  const [week, month, day] = document.querySelectorAll('p span')
  const [hourPointer, minutePointer, secoundPointer] =
    document.querySelectorAll('.clock > div')
  let secondRound = 0,
    minuteRound = 0
  let minuteTime = 0,
    hourTime = 0

  function MyDate(date) {
    return {
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
      day: date.getDate(),
      getWeek: function () {
        switch (date.getDay()) {
          case 0:
            return 'Sunday'
          case 1:
            return 'Monday'
          case 2:
            return 'Tuesday'
          case 3:
            return 'Wednesday'
          case 4:
            return 'Thursday'
          case 5:
            return 'Friday'
          case 6:
            return 'Saturday'
        }
      },
      getMonth: function () {
        switch (date.getMonth()) {
          case 0:
            return 'JAN'
          case 1:
            return 'FEB'
          case 2:
            return 'MAR'
          case 3:
            return 'APR'
          case 4:
            return 'MAY'
          case 5:
            return 'JUN'
          case 6:
            return 'JUL'
          case 7:
            return 'AUG'
          case 8:
            return 'SEP'
          case 9:
            return 'OCT'
          case 10:
            return 'NOV'
          case 11:
            return 'DEC'
        }
      },
    }
  }

  init()
  function init() {
    setInterval(() => start(), 1000) //每秒指针跳动
  }

  function start() {
    const date = new MyDate(new Date())
    function setInfo() {
      //设置日期时间信息
      hour.innerText = date.hours
      date.minutes < 10
        ? (minute.innerText = '0' + date.minutes)
        : (minute.innerText = date.minutes)
      date.hours > 12 ? (half.innerText = 'PM') : (half.innerText = 'AM')
      week.innerText = date.getWeek(date.date)
      month.innerText = date.getMonth(date.date)
      day.innerText = date.day
    }
    function clockLaunch() {
      360 / 60 * date.seconds == 0 && secondRound++ //秒针走完一圈 secoundRound++
      // 秒针走完一圈且 minuteTime 不存在 或者 当前的时间减去 minuteTime 大于等于 60s 时，minuteRound++
      const time = Date.now()
      const judge = time - minuteTime >= 6000
      if ((360 / 60) * date.minutes == 0 && (!minuteTime || judge)) {
        minuteRound++
        minuteTime = Date.now()
      }
      // 秒针走完一圈且 hourTime 不存在 或者 当前的时间减去 hourTime 大于等于 60m 时
      if (
        (360 / 60) * date.hours == 0 &&
        (!hourTime || Date.now() - hourTime >= 60000)
      ) {
        hourTime = Date.now()
      }
      secoundPointer.style.transform = `rotate(${
        (360 / 60) * date.seconds + secondRound * 360
      }deg)`
      minutePointer.style.transform = `rotate(${
        (360 / 60) * date.minutes +
        minuteRound * 360 +
        (360 / 3600) * date.seconds
      }deg)`
      hourPointer.style.transform = `rotate(${
        (360 / 12) * date.hours + minuteRound * 360 + (360 / 720) * date.minutes
      }deg)`
    }
    setInfo()
    clockLaunch()
  }
})

function toggleMode() {
  const container = document.querySelector('#container')
  const modeBtn = document.querySelector('.mode')
  container.classList.toggle('dark-mode')
  if (container.classList.value.indexOf('dark-mode') != -1) {
    modeBtn.innerText = 'Light Mode'
  } else {
    modeBtn.innerText = 'Dark Mode'
  }
}
</script>

<style scoped>
@font-face {
  font-family: 'Heebo';
  src: url('@/assets/theme-clock/font/Heebo-Thin.ttf');
}
#container {
  background-color: #fff;
  font-family: 'Heebo';
  height: 100%;
}
#container,
#container > * {
  transition: all 0.7s;
}
main {
  width: 600px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.mode {
  background-color: #000;
  color: #fff;
  border: none;
  outline: none;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 40px;
}
.clock {
  width: 250px;
  height: 250px;
  margin: 10px;
  position: relative;
  transform: rotate(-90deg);
}
.clock > * {
  position: absolute;
  transition: transform 0.1s;
}

.clock .hour {
  width: 60px;
  height: 4px;
  background-color: #000;
  left: calc(50% + 3px);
  top: calc(50% - 2px);
  transform-origin: -3px center;
}

.clock .minute {
  width: 80px;
  height: 4px;
  background-color: #000;
  left: calc(50% + 3px);
  top: calc(50% - 2px);
  transform-origin: -3px center;
}

.clock .secound {
  top: 5px;
  transform-origin: 6px 6px;
  left: calc(50% - 6px);
  top: calc(50% - 6px);
}

.clock .secound .line {
  position: absolute;
  width: 100px;
  height: 4px;
  top: 4px;
  left: 7px;
  background-color: #e74c3c;
}
.clock .secound .circle {
  position: absolute;
  width: 4px;
  height: 4px;
  border: 4px solid #e74c3c;
  background-color: #000;
  border-radius: 50%;
}
h2 {
  height: 88px;
  font-size: 0;
}
h2 span {
  font-size: 60px;
}
h2 span:last-child {
  margin-left: 15px;
}
p {
  font-size: 14px;
}
p span:last-child {
  display: inline-block;
  background-color: #000;
  border-radius: 50%;
  color: #fff;
  width: 18px;
  height: 18px;
}

.dark-mode {
  color: #fff !important;
  background-color: #111 !important;
}
.dark-mode .mode {
  background-color: #fff !important;
  color: #000 !important;
}
.dark-mode .clock .hour,
.dark-mode .clock .minute {
  background-color: #fff;
}
.dark-mode .clock .secound .circle {
  background-color: #fff;
}
.dark-mode p span:last-child {
  background-color: #fff;
  color: #000;
}
</style>
