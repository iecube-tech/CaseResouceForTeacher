<template>
    <div>
        组件配置详情{{ blockId }}
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()

const blockId = ref()

onMounted(() => {
    setTimeout(() => {
        blockId.value = route.query.block;
    }, 10)
})

</script>
<style scoped></style>