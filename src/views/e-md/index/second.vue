<template>
    <div class="common-layout">
        <div class="main-content">
            <RouterView />
        </div>
        <div class="right-content">
            aside
        </div>
    </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';


</script>
<style scoped>
.common-layout {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
}

.main-content {
    flex: 1;
}

.right-content {
    width: 300px;
    height: 100%;
}
</style>