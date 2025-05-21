<template>
    <div class="common-layout">
        <el-container style="height: 100vh;">
            <el-aside width="250px">
                <div class="sidebar-groups">
                    <div class="sidebar-top">
                        <a href="/">
                            <div style="height: 3em; line-height: 3em; padding: 0.5em 1em">
                                <img src="@/assets/images/产业资源管理平台.svg" alt="">
                            </div>
                        </a>
                    </div>

                    <section class="sidebar-group" v-for="(rootNode, i) in rootNodeList" :key="i">
                        <div class="sidebar-group-title" @mouseenter="showButton('rootNode' + rootNode.id)"
                            @mouseleave="hideButton('rootNode' + rootNode.id)">
                            <div class="sidebar-group-title-text" @click="toDetail(rootNode.id)">
                                <p :title="rootNode.name">{{ rootNode.name }}</p>
                            </div>
                            <div class="sidebar-group-title-btn-div" :id="'rootNode' + rootNode.id">
                                <el-popover placement="right" :width="150" trigger="click"
                                    @show="popoverShow('rootNode' + rootNode.id)"
                                    @hide="popoverHide('rootNode' + rootNode.id)">
                                    <template #reference>
                                        <el-button class="sidebar-group-title-btn" link :icon="MoreFilled"></el-button>
                                    </template>
                                    <template #default>
                                        <div class="more_filled_container">
                                            <div class="more_filled_item" @click="toDelCourse(rootNode.id)">
                                                <el-button link :icon="Delete" size="large">删除</el-button>
                                            </div>
                                        </div>
                                    </template>
                                </el-popover>
                            </div>
                        </div>
                    </section>
                </div>

                <div class="floating-button" @click="dialogFormVisible = true">
                    +
                </div>
                <el-dialog v-model="dialogFormVisible" title="新建MAP" width="500" align-center>
                    <el-form :model="newRootNode">
                        <el-form-item label="名称：" label-width="80px">
                            <el-input v-model="newRootNode" autocomplete="off" />
                        </el-form-item>
                    </el-form>
                    <template #footer>
                        <div class="dialog-footer">
                            <el-button link @click="dialogFormVisible = false">取消</el-button>
                            <el-button type="primary" link @click="addRootNode">
                                确定
                            </el-button>
                        </div>
                    </template>
                </el-dialog>

                <el-dialog v-model="dialogDelRootNodeTip" title="删除MAP?" width="500" align-center>
                    <div>
                        <p>您正在删除一个MAP，删除后不可恢复，继续删除吗？</p>
                    </div>
                    <template #footer>
                        <div class="dialog-footer">
                            <el-button link @click="dialogDelRootNodeTip = false">取消</el-button>
                            <el-button type="danger" link @click="delRootNode">
                                删除
                            </el-button>
                        </div>
                    </template>
                </el-dialog>

            </el-aside>

            <el-main>
                <RouterView :key="key" @updateRootNode="getNodeList" />
            </el-main>

        </el-container>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { Plus, MoreFilled, Delete } from '@element-plus/icons-vue';
import { onBeforeMount, ref } from 'vue';

import { GetRootNodeList } from '@/apis/liShiMap/getRootNodeList.js';
import { AddRootNode } from '@/apis/liShiMap/addRootNode.js';
import { DelRootNode } from '@/apis/liShiMap/delRootNode.js';
import { ElMessage } from 'element-plus';

const newRootNode = ref('')
const dialogFormVisible = ref(false)

const addRootNode = () => {
    if (newRootNode.value == '' || newRootNode.value == null) {
        ElMessage.warning("请输入名称")
        return
    }
    dialogFormVisible.value = false
    AddRootNode(newRootNode.value).then(res => {
        if (res.state == 200) {
            newRootNode.value = ''
            rootNodeList.value = res.data
        } else {
            ElMessage.error(res.message)
        }
    })

}

const dialogDelRootNodeTip = ref(false)

const willDelNode = ref()

const toDelCourse = (id) => {
    willDelNode.value = id
    dialogDelRootNodeTip.value = true
}

const delRootNode = () => {
    DelRootNode(willDelNode.value).then(res => {
        if (res.state == 200) {
            rootNodeList.value = res.data
        } else {
            ElMessage.error(res.message)
        }
    })
    dialogDelRootNodeTip.value = false
    willDelNode.value = null
}

const rootNodeList = ref([])

const key = ref(0)

const isThisShow = ref([])
const popoverShow = (id) => {
    isThisShow.value.push(id)

}

const popoverHide = (id) => {
    let index = isThisShow.value.indexOf(id);
    if (index !== -1) {
        isThisShow.value.splice(index, 1);
    }
    hideButton(id)
}

const showButton = (id) => {
    document.getElementById(id).style.display = "flex"
};
const hideButton = (id) => {
    setTimeout(() => {
        if (isThisShow.value.includes(id)) {
            return
        }
        document.getElementById(id).style.display = "none"
    }, 200)
}


const toDetail = (id) => {
    key.value = id
    router.push({
        name: 'MapDetail',
        params: {
            id: id,
        }
    })
}

const getNodeList = () => {
    GetRootNodeList().then(res => {
        if (res.state == 200) {
            rootNodeList.value = res.data
        }
    })
}

onBeforeMount(() => {
    getNodeList()
})

</script>
<style scoped>
.el-aside:deep() {
    display: flex;
    flex-direction: column;
}

.el-aside::-webkit-scrollbar {
    /* 隐藏滚动条 */
    display: none;
}

.sidebar-groups {
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 1em;
}

.sidebar-top {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    background-color: white;
    padding: 10px;
    z-index: 100;
}

.sidebar-group {
    display: flex;
    flex-direction: column;
}

.sidebar-group-title {
    padding-left: 1.2em;
    padding-right: 0.5em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 1.2em;
    line-height: 2;
    border-radius: 5px;
    overflow: hidden;
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.3s ease;
}

.sidebar-group-title:hover {
    background-color: #DCDCDC
}

.sidebar-group-title:hover .sidebar-group-title-text {
    overflow: hidden;
    max-width: 160px;
}

.sidebar-group-title-text {
    transition: all 0.3s ease;
    font-weight: 600;
}

.link-title {
    overflow: hidden;
}

.link {
    margin-left: 2em;
    padding-right: 0.5em;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    transition: all 0.3s ease;
}

.link:hover {
    background-color: #DCDCDC;

}

.link:hover .link-button {
    max-width: 190px;
    overflow: hidden;
}

.link-button {
    font-size: 1em;
    font-weight: 500;
    line-height: 1.3em;
    transition: all 0.3s ease;
}

.sidebar-group-title-btn-div {
    display: none;
    align-items: center;
    justify-content: right;
    width: 2.2em;
}

.sidebar-group-title-btn {
    cursor: pointer;
}

.sidebar-group-title-btn.hidden {
    display: none;
}

.sidebar-group-title-btn:hover {
    background-color: #000000;
}

.floating-button {
    position: fixed;
    bottom: 20px;
    left: 30px;
    width: 50px;
    height: 50px;
    background-color: var(--el-color-primary-light-3);
    /* 设置按钮背景色 */
    color: white;
    /* 设置文字颜色 */
    border-radius: 50%;
    /* 将按钮设置为圆形 */
    font-size: 26px;
    /* 设置按钮内文字大小 */
    text-align: center;
    /* 文字居中 */
    line-height: 45px;
    /* 设置文字垂直居中 */
    cursor: pointer;
    /* 设置鼠标悬停样式 */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    /* 添加阴影效果 */
    z-index: 999;
    /* 确保按钮位于其他内容之上 */
}

.floating-button:hover {
    background-color: var(--el-color-primary);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    /* 悬浮时的阴影效果更明显 */
}

.more_filled_container {
    padding: 20 20;
}

.more_filled_item {
    border-radius: 4px;
}

.more_filled_item:hover {
    background-color: #DCDCDC;
}

.more_filled_item button {
    font-size: 16px
}
</style>