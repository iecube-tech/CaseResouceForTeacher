<template>
    <main>
        <div class="aside">

        </div>

        <div class="resource">
            <el-collapse class="classical" v-model="activeNames" @change="handleChange">
                <el-collapse-item title="分类筛选" name="1">
                    <div style="margin-top: 10px;">
                        专业类别:
                    </div>
                    <div style="margin-top: 20px;">
                        课程方向:
                    </div>
                </el-collapse-item>
            </el-collapse>
            <div class="resources">
                <el-card class="resource_card" shadow="hover" v-for="o in 6" key="o" :body-style="{ padding: '0px' }">
                    <el-row>
                        <el-col :span="11" style="overflow: hidden;">
                            <img src="@/assets/images/ELVIS-QCB.png" height="300" alt="">
                        </el-col>
                        <el-col :span="13" style="padding-left: 20px;">
                            {{ o }}
                        </el-col>
                    </el-row>
                </el-card>
            </div>
        </div>

        <div class="right_aside">

        </div>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const resource = ref([])
resource.value = [
    {
        id: '',
        img: '',
        title: '',

    }
]

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

.resources {
    margin-top: 20px;
    padding-bottom: 20px;
}

.resource_card {
    /* width: 310px; */
    height: 300px;
    margin-top: 30px;
}

.right_aside {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 200px;
}
</style>