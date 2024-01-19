<template>
    <el-container>
        <header :class="headrClass" @mouseover="hover()" @mouseleave="leave()">
            <indexHeader></indexHeader>
        </header>
        <el-main style="padding-top: 100px; padding-left: 3vw; padding-right: 3vw;">
            <div class="maincontainer">
                <RouterView :key="$route.path" />
            </div>
        </el-main>
        <el-footer class="footer">
            京ICP备20018557号-3
        </el-footer>
    </el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import indexHeader from "@/components/indexHeader.vue";
const down = ref({
    top: 20,
    background: "",
})

const hover = () => {
    headrClass.value = 'down'
}

const leave = () => {
    handleScroll();
}

const headrClass = ref('')

const handleScroll = () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop) {
        headrClass.value = "down"
    } else {
        headrClass.value = ""
    }
}

window.addEventListener("scroll", handleScroll)
</script>

<style scoped>
@import "@/styles/header/header.css";
</style>