<template>
  <div id="container">
    <main>
      <div class="canvas">
        <canvas width="800" height="620"></canvas>
        <div class="put-point"></div>
      </div>
      <div class="panel">
        <div class="left">
          <div class="brush-size">
            <button></button>
            <button class="focus"></button>
            <button></button>
          </div>
          <div class="brush-color">
            <input type="color" name="" id="" value="#0984e3" />
          </div>
        </div>
        <div class="right">
          <span class="iconfont icon-Brushhuabi brush focus"></span>
          <span class="iconfont icon-clear rubber"></span>
          <span class="iconfont icon-clear1 clear"></span>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
onMounted(() => {
  const brushSizeBtn = document.querySelectorAll('.brush-size button')
  const brushColorBtn = document.querySelector('.brush-color input')
  const canvasControls = document.querySelectorAll('.right span')
  const putPoint = document.querySelector('.put-point')
  const canvas = document.querySelector('canvas')
  const canvasContainer = document.querySelector('.canvas')
  const cxt = canvas.getContext('2d')
  let brushSize,
    allowDraw = false,
    originX,
    originY

  cxt.lineCap = 'round'
  cxt.lineJoin = 'round'
  setBrushSize(20)
  changeBtnColor()

  brushColorBtn.addEventListener('input', changeBtnColor)
  document.addEventListener('mousemove', e => {
    putPoint.style.top =
      e.clientY - canvasContainer.parentNode.offsetTop - 90 + 'px'
    putPoint.style.left =
      e.clientX - canvasContainer.parentNode.offsetLeft - 10 + 'px'
  })
  document.addEventListener('mousedown', () => {
    allowDraw = true
    originX = putPoint.offsetLeft + putPoint.offsetWidth / 2
    originY = putPoint.offsetTop + putPoint.offsetHeight / 2
    drawCircle()
  })
  document.addEventListener('mouseup', () => (allowDraw = false))
  document.addEventListener('mousemove', () => {
    if (allowDraw) {
      drawCircle()
      drawLine()
    }
  })
  brushSizeBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      brushSizeBtn.forEach(btn => btn.classList.remove('focus'))
      btn.classList.add('focus')
      putPoint.style.width = btn.offsetWidth + 'px'
      putPoint.style.height = btn.offsetHeight + 'px'
      setBrushSize(btn.offsetWidth)
    })
  })

  canvasControls.forEach((item, index) => {
    item.addEventListener('click', () => {
      canvasControls.forEach(item => item.classList.remove('focus'))
      item.classList.add('focus')
      if (index == 0) {
        setBrushColor(brushColorBtn.value)
      } else if (index == 1) {
        setBrushColor('#fff')
      } else if (index == 2) {
        setBrushColor('#fff')
        cxt.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)
        setTimeout(() => {
          item.classList.remove('focus')
          canvasControls[0].click()
        }, 500)
      }
    })
  })

  //改变按钮颜色，并自动改变画笔颜色
  function changeBtnColor() {
    brushSizeBtn.forEach(
      btn => (btn.style.backgroundColor = brushColorBtn.value)
    )
    setBrushColor(brushColorBtn.value)
  }
  //画圆
  function drawCircle() {
    cxt.beginPath()
    const x = putPoint.offsetLeft + putPoint.offsetWidth / 2
    const y = putPoint.offsetTop + putPoint.offsetHeight / 2
    cxt.arc(x, y, brushSize / 2, 0, Math.PI * 2)
    cxt.fill()
    cxt.closePath()
  }
  //画线
  function drawLine() {
    const x = putPoint.offsetLeft + putPoint.offsetWidth / 2
    const y = putPoint.offsetTop + putPoint.offsetHeight / 2
    cxt.beginPath()
    cxt.moveTo(originX, originY)
    cxt.lineTo(x, y)
    cxt.stroke()
    cxt.closePath()
    originX = x
    originY = y
  }
  //设置画笔大小
  function setBrushSize(size) {
    brushSize = size
    cxt.lineWidth = size
  }
  //改变画笔颜色
  function setBrushColor(color) {
    cxt.fillStyle = color
    cxt.strokeStyle = color
  }
})
</script>

<style scoped>
@import '@/assets/drawing-app/font/iconfont.css';
#container {
  height: 100%;
  position: relative;
  background-color: #dfe6e9;
  min-height: 730px;
}
main {
  box-sizing: content-box;
  position: absolute;
  left: calc(50% - 400px);
  top: calc(50% - 350px);
  bottom: 20px;
  width: 800px;
  height: 700px;
  border: 2px solid #999;
  cursor: none;
}
canvas {
  width: 100%;
  height: 620px;
  background-color: #fff;
}
.canvas {
  position: relative;
  overflow: hidden;
}
.canvas .put-point {
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: #ddd;
  border-radius: 50%;
}
.panel {
  position: relative;
  top: -4px;
  height: 80px;
  background-color: #ddd;
  cursor: auto;
}
.brush-size {
  width: 120px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.left,
.right {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.left button {
  box-sizing: content-box;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 50%;
  border: 3px solid #ddd;
}
.focus {
  border-color: #fff !important;
  box-shadow: 0 0 3px #ddd;
}
.left {
  width: 200px;
  height: 100%;
  float: left;
}
.left button:first-child {
  width: 15px;
  height: 15px;
  background-color: #000;
}
.left button:nth-child(2) {
  width: 20px;
  height: 20px;
  background-color: #000;
}
.left button:nth-child(3) {
  width: 30px;
  height: 30px;
  background-color: #000;
}
.brush-color input {
  display: block;
  padding: 2px;
  width: 35px;
  height: 35px;
  cursor: pointer;
}
.right {
  float: right;
  width: 200px;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.right span {
  width: 25px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  display: block;
  transform: scale(1.8);
  border: 2px solid #ddd;
  padding: 2px;
  cursor: pointer;
}
.right span:last-child {
  transition: 0.5s;
}
</style>
