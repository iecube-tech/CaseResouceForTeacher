<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import router from '@/router';

onMounted(() => {
    if (localStorage.getItem("x-access-token") !== null) {
        const authList = localStorage.getItem("auth")
        if (authList == null) {
            router.push('/t')
        }
        else {
            if (authList.length == 0) {
                router.push('/t')
            }
            else {
                router.push({
                    name: 'IMenu'
                })
            }
        }
    } else {
        router.push({
            name: 'login'
        })
    }
})

</script>
