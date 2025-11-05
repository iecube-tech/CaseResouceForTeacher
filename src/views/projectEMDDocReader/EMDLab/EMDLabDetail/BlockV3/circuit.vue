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

            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
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