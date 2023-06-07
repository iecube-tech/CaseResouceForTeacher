<template>
    <main>
        <div class="aside">

        </div>

        <div class="resource">

        </div>

        <div class="right_aside">

        </div>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeNames = ref(['1'])
const handleChange = (val: string[]) => {
    console.log(val)
}
</script>

<style scoped>
main {
    width: 100%;
    height: 100%;
    display: flex;
}

.aside {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 200px;
}

.resource {
    flex-basis: 1000px;
    padding: 10px;
}

.classical {
    border-top: 0;
}

.right_aside {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 200px;
}
</style>