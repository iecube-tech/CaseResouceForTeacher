<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { type PAYLOAD } from '../../../../ts/block';
import textpreview from '../../../emdV3/textPreview/textPreview.vue'
const props = defineProps({
    payload: Object
})

const payload = ref<PAYLOAD>(<any>props.payload)
</script>
<style scoped></style>