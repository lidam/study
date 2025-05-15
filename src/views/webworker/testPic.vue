<script setup>
import tp from '../../assets/timg.jpg'
let canvas;
let ctx;
// 把一个图片画在canvas上
let img = new Image();
img.src = tp;
img.onload = function () {
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}

let worker = new Worker('http://localhost:5173/webworker/picWorker.js')
worker.addEventListener('message', (e) => {
  const imageData = e.data;
  ctx.putImageData(imageData, 0, 0);
})
/**
 * 图片处理函数
 *
 * @returns 无返回值
 */
const imageHandler = () => {
  // 读取所有像素点
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  worker.postMessage(imageData);
}
</script>

<template>
  <div>
    <div class="opera-section">
      <input type="text">
      <button @click="imageHandler">过滤</button>
    </div>
    <canvas id="canvas" width="1200" height="600"></canvas>
  </div>
</template>