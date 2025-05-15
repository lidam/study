<script setup lang="ts">
</script>

<template>
  <main>
    <h1>webworker 要注意的4个点</h1>
    <p>1. webworker不能使用本地文件，必须是网络上的同源文件</p>
    <p>2. webworker不能使用window上的dom操作，也不能获取dom对象，dom相关的东西只有主线程有，只能做一些计算相关的操作</p>
    <p>3. 有的东西是无法通过主线程传递给子线程的，比如方法，dom节点，一些对象里的特殊设置（freeze,getter,setter这些，所以vue的响应式对象是不能传递的）</p>
    <p>4. 模块的引入问题</p>
    <h1>常见的应用</h1>
    <p>因为webworker的限制，就别想着多线程渲染dom了。因为他根本无法创建dom，所以vue和react框架没有考虑webworker，webworker的常见应用主要是<span
        style="color: red;">耗时计算</span></p>
    <p>1. 随着webgl，canvas等能力的加入，web前端有越来越多的可视化操作。比如在线滤镜，在线绘图，web游戏等。这些东西都是非常消耗计算的</p>
    <p>2. 一些后台管理系统也会涉及到一些，最常见的就是一些电子表单。大量的数据大量的计算，比如10万条数据导出为excel表格。</p>
  </main>
</template>
<style scoped>
p {
  line-height: 36px;
}
</style>