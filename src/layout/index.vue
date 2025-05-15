<script setup lang="ts">
import { ref } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import { Location, HomeFilled } from '@element-plus/icons-vue'
import  MenuList from './menu'

const router = useRouter()

const menuList = ref(MenuList)

const defaultOpens = ref(["0"])
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
    <div class="menu-container">
      <el-menu default-active="0" :default-openeds="defaultOpens" class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
        <template v-for="(item, index) in menuList">
          <el-menu-item v-if="!item.children" :index="item.id" @click="onHandleClick(item)">
            <component :is="item.icon" style="width: 16px;height: 16px;"></component>
            <span v-if="item.label">{{ item.label }}</span>
          </el-menu-item>
          <el-sub-menu v-else :key="index" :index="item.id">
            <template #title>
              <component :is="item.icon" style="width: 16px;height: 16px;"></component>
              <span>{{ item.label }}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item v-for="(child, index) in item.children" :index="child.id" :key="child.id"
                @click="onHandleClick(child)">
                {{ child.label }}
              </el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </template>
      </el-menu>
    </div>
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
  .menu-container{
    width: 100%;
    height: calc(100vh - 48px);
    overflow-y: auto;
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
