<template>
    <div class="ist-theam border my-8 p-8">
        <h2 name="电路连线检测">电路连线检测</h2>
        <el-row class="my-4">
            <el-col :span="6" class="my-4 flex flex-row justify-center items-center">
                <button
                    class="w-full btn bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md flex justify-center items-center mx-8">
                    电路检查
                </button>
            </el-col>
            <el-col :span="18" class="my-4 flex flex-row justify-center items-center">
                <div v-if="checkRes.score == null">

                </div>
                <div v-else class="w-full">
                    <div v-if="checkRes.score == checkRes.full_mark"
                        class="w-full bg-green-100 p-4 border-l-4 border-green-500">
                        <div class="mb-4 flex flex-row items-center text-green-900 text-xl">
                            <!-- <font-awesome-icon icon="fa-solid fa-check" class="mr-4" /> -->
                            <font-awesome-icon icon="fa-solid fa-check-double" class="mr-4" />
                            <span>
                                电路连接正确！
                            </span>
                        </div>
                        <div class="mb-4 text-green-700 text-xl">
                            所有连接点均正确，您可以继续进行操作。
                        </div>
                    </div>

                    <div v-if="checkRes.score < checkRes.full_mark"
                        class="w-full bg-red-100 p-4 border-l-4 border-red-500">
                        <div class="mb-4 flex flex-row items-center text-red-900 text-xl">
                            <font-awesome-icon icon="fa-solid fa-xmark" class="mr-4" />
                            <span>
                                电路连接存在问题！
                            </span>
                        </div>
                        <div class="mb-4 text-red-700 text-xl">
                            {{ checkRes.remark }}
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
        <score-read-over :component="comp" />
    </div>
</template>

<script setup lang="ts">
import scoreReadOver from './scoreReadOver.vue';

const props = defineProps({
    blockVo: Object,
    status: Number,
    comp: Object,
    index: Number,
})

const payload = ref<any>()
const blockDetail = ref<any>()


const isCheckIng = ref(false)
const checkId = ref()

const circuitData = ref<any[]>()



const checkRes = ref({
    full_mark: 5,
    score: null,
    remark: ''
})
const handleCheckRes = (result: any) => {
    // console.log(result)
    // console.log(checkId.value)
    if (result.question.id == checkId.value) {
        checkRes.value.full_mark = result.full_mark
        checkRes.value.score = <any>result.score
        checkRes.value.remark = result.remark
        // console.log(checkRes.value)
        isCheckIng.value = false
    }
}


</script>
<style scoped>
@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

.loading {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 3px solid rgba(255, 255, 255, .3);
    border-radius: 50%;
    border-top-color: #fff;
    animation: spin 1s ease-in-out infinite;
    margin-left: 10px;
}
</style>