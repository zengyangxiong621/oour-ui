<template>
  <div class="home">
    <el-menu
      default-active="button"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      router
    >
      <el-sub-menu
          v-for="group in componentList"
          :index="group.name"
          :key="group.name"
      >
        <template #title>
          <span>{{ group.name }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
              v-for="component in group.children"
              :index="component.path"
              :key="component.path"
          >{{ component.name }}</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
    <div>
      <RouterView />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { RouterView } from "vue-router";

import {
  Document,
  Menu as IconMenu,
  Location,
  Setting
} from "@element-plus/icons-vue";

import { componentList } from '@/router'

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style lang="scss">
.home {
  display: flex;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
