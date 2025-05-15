<script setup>
import gsap from 'gsap';
import { ref } from 'vue';

const redStaus = ref(true);
function changeColor() {
  if (redStaus.value) {
    gsap.to('.red', {
      backgroundColor: 'blue'
    })
  } else {
    gsap.to('.red', {
      backgroundColor: 'red'
    })
  }
  redStaus.value = !redStaus.value;
}

const greenStaus = ref(true);
function changePosition() {
  if (greenStaus.value) {
    gsap.to('.green', {
      x: 100,
      duration: 2,
      yoyo: true,
      repeat: 3
    })
  } else {
    gsap.to('.green', {
      x: 0,
      duration: 2,
      yoyo: true,
      repeat: 3
    })
  }
  greenStaus.value = !greenStaus.value;
}
</script>
<template>
  <main>
    <div class="item red" @click="changeColor"></div>
    <div class="item green" @click="changePosition"></div>
  </main>
</template>

<style scoped>
.item {
  width: 20px;
  height: 20px;
  margin-bottom: 20px;
}

.red {
  background-color: red;
}

.green {
  background-color: green;
}
</style>