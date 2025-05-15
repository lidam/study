<script setup>
import { writeFile } from 'xlsx'

const worker = new Worker('http://localhost:5173/webworker/workbook.js');
worker.onmessage = (e) => {
  const workbook = e.data;
  writeFile(workbook, 'example.xlsx');
}

function exportExcel() {
  worker.postMessage(100000);
}
</script>

<template>
  <div>
    <button @click="exportExcel">导出</button>
  </div>
</template>