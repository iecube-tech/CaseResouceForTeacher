<template>
  <el-config-provider :locale="zhCn">
    <router-view v-slot="{ Component }">
      <keep-alive :include="cachedComponents">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </el-config-provider>
</template>

<script setup>
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { useRouteCacheStore } from '@/stores/useRouteCacheStore'
const routeCacheStore = useRouteCacheStore()

const cachedComponents = computed(() => {
  let cache = routeCacheStore.getCachedRoutes
  return cache
})

</script>