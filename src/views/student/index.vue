<template>
    <main>
        <div class="aside">
            zuo
        </div>

        <div class="resource">
            学生管理
        </div>

        <div class="right_aside">
            you
        </div>
    </main>
</template>

<script setup lang="ts">

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
    background-color: aqua;
    height: 200%;
    flex-basis: 1000px;
}

.right_aside {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 200px;
}
</style>