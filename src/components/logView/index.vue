<template>
    <div style="margin-left: 20px;">
        <pre>{{ logContent }}</pre>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { RouteLocationNormalizedLoaded } from 'vue-router';

const props = defineProps<{
    url: string;
}>();

const logContent = ref('');

onMounted(() => {
    loadLogContent();
});

const loadLogContent = () => {
    // fetch(props.url)
    //     .then(response => response.text())
    //     .then(data => {
    //         logContent.value = data;
    //         console.log(logContent)
    //     })
    //     .catch(error => {
    //         console.error('Failed to load log content:', error);
    //     });
    fetch(props.url, {
        headers: {
            'x-access-token': localStorage.getItem("x-access-token"),
            'x-access-type': localStorage.getItem("x-access-type")
        }
    })
        .then(response => response.arrayBuffer())
        .then(buffer => {
            const decoder = new TextDecoder('GBK'); // 指定实际的.log文件编码
            logContent.value = decoder.decode(buffer);
            console.log(logContent.value); // 输出中文内容
        })
        .catch(error => {
            console.error('Failed to load log content:', error);
        });

};
</script>