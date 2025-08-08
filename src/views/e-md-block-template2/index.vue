<template>
    <div class="emdContainer">
        <div class="emd-catalogue-container">
            <lefAside />
        </div>

        <div class="emd-content-container">
            <RouterView :key="routeKey" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { emdV2Store } from '@/stores/emdV2Store';
import lefAside from './aside/aside.vue';

const emdStore = emdV2Store();

const routeKey = computed(()=> emdStore.routerKey  )

</script>
<style scoped>
.emdContainer {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
}

.emd-catalogue-container {
    width: 400px;
    height: 100%;
    box-shadow: 8px 0 8px -4px rgba(0, 0, 0, 0.2);
}

.emd-content-container {
    height: 100%;
    overflow: auto;
    width: calc(100vw - 400px);
}
</style>
