<script setup lang="ts">
import { ref } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import { Location } from '@element-plus/icons-vue'

const router = useRouter()

const menuList = ref([
  {
    id: "1",
    label: 'webworker',
    icon: 'Location',
    path: '/',
    children: [
      {
        id: "1-1",
        label: '笔记',
        path: '/'
      },
      {
        id: "1-2",
        label: '基本功能',
        path: '/about'
      },
      {
        id: "1-3",
        label: '图片处理',
        path: '/testPic'
      },
      {
        id: "1-4",
        label: '表格',
        path: '/workbook'
      }
    ]
  },
  {
    id: "2",
    label: "GSAP",
    icon: "Location",
    path: '/gsap',
    children: [
      {
        id: "2-1",
        label: 'GSAP',
        path: '/gsap'
      }
    ]
  }
])

const defaultOpens = ref(["1", "1-1"])
// 菜单点击事件
const onHandleClick = (item: any) => {
  router.push(item.path);
}
function handleOpen(key: string, keyPath: string[]) {
  console.log(key, keyPath);
}

function handleClose(key: string, keyPath: string[]) {
  console.log(key, keyPath);
}

</script>

<template>
  <div class="left-nav">
    <div class="title-container">
      <span class="text">STUDY</span>
    </div>
    <el-menu default-active="1-1" :default-openeds="defaultOpens" class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-sub-menu v-for="(item, index) in menuList" :key="index" :index="item.id">
        <template #title>
          <el-icon>
            <location />
          </el-icon>
          <span>{{ item.label }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item v-for="(child, index) in item.children" :index="child.id" :key="child.id"
            @click="onHandleClick(child)">
            {{ child.label }}
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
    <nav>
    </nav>
  </div>
  <div class="wrapper">
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
.left-nav {
  width: 200px;
  .title-container{
    background-color: #0e2851;
    padding: 5px 10px;
    .text{
      font-size: 24px;
      font-weight: bold;
      font-style: italic;
      background: linear-gradient(0deg, rgba(168, 216, 255, 1) 0%, rgba(255, 255, 255, 1) 100%);
      -webkit-background-clip: text !important;
      -webkit-text-fill-color: transparent;
    }
  }
}

.wrapper {
  flex-grow: 1;
  padding: 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
