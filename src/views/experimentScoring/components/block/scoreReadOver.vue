<template>
    <div v-if="component" class="flex items-center justify-between mt-4 ">
        <div class="flex flex-row items-center">
            <div>
                AI评分：
            </div>
            <div :class="component.aiScore >= component.totalScore ? 'text-green-600' : 'text-red-600'">
                {{ component.aiScore }}分
            </div>
        </div>

        <div class="flex flex-row items-center">
            <div>修改评分：</div>
            <div>
                <el-input-number v-model="component.score" :min="0" :max="component.totalScore"
                    controls-position="right" @change="checkTScore(component.id, component.score)"
                    style="--el-input-focus-border:#020617" />
                / {{ component.totalScore }}分
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { checkComponentScore } from '@/apis/emdv4Proejct/projectStudnetTaskBookComponent';
import { emitter } from '@/ts/eventBus';

const props = defineProps({
    component: Object
})

const component = ref<any>()

const checkTScore = (id: String, score: number) => {
    checkComponentScore(id, score).then(res => {
        if (res.state == 200) {
            emitter.emit("checkScoreChange")
        }
        else {
            ElMessage.error("修改评分错误：" + res.message)
        }
    })
}

onMounted(() => {
    component.value = props.component
    // console.log(component)
})
</script>
<style scoped></style>
