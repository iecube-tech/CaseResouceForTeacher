import { defineStore } from 'pinia';
import { ref } from 'vue';

export const RouterStore = defineStore("routerStore", () => {

    const savedPath = ref()
    const redirectState = ref(false)  // 登录后判断该状态， 如果是ture 则需要重定向  强制离开页面后需要将该值设置为true 重定向后设置为false

    const savePath = (path: string) => {
        console.log("state: " + redirectState.value)
        if (redirectState.value) {
            return
        }
        savedPath.value = path
        redirectState.value = true
        console.log("save " + path)
    }

    const redirectToSavedPath = () => {
        if (redirectState.value) {
            redirectState.value = false
            return savedPath.value
        }
        return "/"
    }
    return {
        savePath,
        redirectToSavedPath
    }
})  