<script setup>
let worker1 = new Worker('http://localhost:5173/webworker/list.js', {
  type: 'module',
  name: 'worker1',
})
worker1.addEventListener('message', (e) => {
  console.log(e.data)
})
// 发送消息到worker
function postMessageToWorker() {
  worker1.postMessage('hello')
}
</script>

<template>
  <div>
    <button @click="postMessageToWorker">给worker发消息</button>
  </div>
</template>
