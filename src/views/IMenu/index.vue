<template>
    <main class="imenu-main">
        <nav class="imenu-header">
            欢迎使用IECUBEOnline
        </nav>

        <div class="imenu-menu">
            <a href="/t">
                <div class="imenu-item">
                    <div>
                        Online
                    </div>
                    <div>
                        {{ ' -->' }}
                    </div>
                </div>
            </a>

            <a v-if="authList.includes('MD')" href="/md">
                <div class="imenu-item">
                    <div>
                        MarkDown文档
                    </div>
                    <div>
                        {{ ' -->' }}
                    </div>
                </div>
            </a>

            <a v-if="authList.includes('EMD')" href="/emdv3">
                <div class="imenu-item">
                    <div>
                        AI版markdown文档
                    </div>
                    <div>
                        {{ ' -->' }}
                    </div>
                </div>
            </a>

            <a v-if="authList.includes('LS')" href="/ls">
                <div class="imenu-item">
                    <div>
                        理实映射
                    </div>
                    <div>
                        {{ ' -->' }}
                    </div>
                </div>
            </a>

            <a v-if="authList.includes('CR')" href="/creation">
                <div class="imenu-item">
                    <div>
                        创作中心
                    </div>
                    <div>
                        {{ ' -->' }}
                    </div>
                </div>
            </a>

            <a v-if="authList.includes('CRE')" href="/creation">
                <div class="imenu-item">
                    <div>
                        创作审核
                    </div>
                    <div>
                        {{ ' -->' }}
                    </div>
                </div>
            </a>

            <a v-if="authList.includes('SC') && authList.includes('CO')" href="/school">
                <div class="imenu-item">
                    <div>
                        院校
                    </div>
                    <div>
                        {{ ' -->' }}
                    </div>
                </div>
            </a>

            <a v-if="authList.includes('TE')" href="/teacher">
                <div class="imenu-item">
                    <div>
                        教师
                    </div>
                    <div>
                        {{ ' -->' }}
                    </div>
                </div>
            </a>

            <a v-if="authList.includes('TEC')" href="/case_teacher">
                <div class="imenu-item">
                    <div>
                        案例/课程授权
                    </div>
                    <div>
                        {{ ' -->' }}
                    </div>
                </div>
            </a>

            <a v-if="authList.includes('UG')" href="/user_group">
                <div class="imenu-item">
                    <div>
                        用户组和权限
                    </div>
                    <div>
                        {{ ' -->' }}
                    </div>
                </div>
            </a>
        </div>
    </main>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';

const authList = ref([])

onBeforeMount(() => {
    authList.value = <any>localStorage.getItem("auth")
})

</script>
<style scoped>
.imenu-main {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    font-size: 1.5em;
}

.imenu-header {
    font-size: 1.8em;
}

.imenu-item {
    height: 3em;
    width: var(100% - 2em);
    line-height: 3em;
    display: flex;
    justify-content: space-between;
    padding: 0 1em;
    margin: 1em 0.5em;
    color: var(--el-color-primary);
    background-color: var(--el-color-primary-light-9);
    border-radius: 4px;
    overflow: hidden;
    transition: all 0.3s ease;
}

.imenu-item:hover {
    background-color: var(--el-color-primary-light-8);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
    /* 添加阴影 */
}

@media screen and (max-width: 425px) {
    .imenu-header {
        font-size: 1.2em;
    }
}

@media screen and (max-width: 799.9px) {
    .imenu-menu {
        width: 100%;
    }
}

@media screen and (min-width: 800px) {
    .imenu-menu {
        width: 800px;
    }
}
</style>