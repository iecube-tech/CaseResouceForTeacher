<template>
    <main>
        <div class="aside">
            zuo
        </div>

        <div class="resource">
            <div id="a" style="background-color: aquamarine; width: 200px; height: 200px;"></div>
            <div id="b" style="background-color:beige; width: 200px; height: 200px;"></div>
            <div id="c" style="background-color:yellow; width: 200px; height: 200px;"></div>
        </div>

        <div class="right_aside">
            you
        </div>
    </main>
</template>

<script setup lang="ts">
import leaderLine from 'leader-line-vue';
import { onMounted } from 'vue';
onMounted(() => {
    const a = document.getElementById('a')
    const c = document.getElementById('c')
    console.log(a)
    console.log(c);

    leaderLine.setLine(a, c)
})

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
    min-height: 1000px;
    flex-basis: 1000px;
}

.right_aside {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 200px;
}
</style>