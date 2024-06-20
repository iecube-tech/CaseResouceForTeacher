<template>
    <div class="resource" v-if="route.name === 'CourseDetail'">
        <pageHeader :route="route" />
        <el-row :style="getStyle()">
            <el-col :span="10" style="display: flex; flex-direction: column; justify-content: center; ">
                <el-row>
                    <h1 style="font-size: 46px; color: #33b8b9;">{{ CurttenContent.name }}</h1>
                </el-row>
                <el-row v-if="ismy() == true">
                    <el-button type="primary" style="background-color: #33b8b9; color: #fff; align-self: stretch;"
                        @click="toAppliedCourse()" :disabled="disabled">发布课程</el-button>
                </el-row>
            </el-col>
            <el-col :span="14" style="display: flex; justify-content: center;">
                <img v-if="CurttenContent.cover" :src="'/local-resource/image/' + CurttenContent.cover" alt=""
                    style="width: auto; height: 31vh; object-fit: contain;">
            </el-col>
        </el-row>
        <el-tabs v-model="editableTabsValue" stretch @tab-click="tabClickHandle">
            <el-tab-pane label="课程概览" name="0">
                <div :style="getStyle()" style="background-color: #fff;">
                    <el-row class="summary_title">
                        课程介绍
                    </el-row>
                    <el-row class="summary_detail">
                        <div>
                            {{ CurttenContent.introduction }}
                        </div>
                        <div>
                            {{ CurttenContent.introduce }}
                        </div>
                        <div v-if="CurttenContent.target">
                            {{ CurttenContent.target }}
                        </div>
                    </el-row>
                    <el-row class="points_title">
                        理实映射
                    </el-row>
                    <div v-if="CurttenContent.mdCourse == null" style="margin-top:30px">
                        <img v-if="CurttenContent.fourth" :src="'/local-resource/image/' + CurttenContent.fourth" alt=""
                            style="max-width:100%">
                    </div>
                    <div v-else class="course_mapping" id="course_mapping"
                        :style="{ height: courseMappingHeight + 'px' }">
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="课程设计" name="1">
                <el-row class="table_title" :style="getStyle()">
                    课程对毕业能力的支撑关系
                </el-row>

                <div style="background-color: #fff;padding: 20px 20px; padding-bottom: 50px; padding-top: 50px; "
                    :style="getStyle()">
                    <el-table class="table" :data="tableDate" :border="true"
                        :header-cell-style="{ background: '#33b8b9', fontSize: '24px', color: '#fff', lineHeight: '30px' }"
                        :header-row-style="{ height: '60px' }"
                        :cell-style="{ fontSize: '18px', whiteSpace: 'pre-line' }" :row-style="tableRowStyle">
                        <el-table-column label="毕业要求" prop="graduationRequirementName" header-align="center">

                        </el-table-column>
                        <el-table-column label="毕业要求指标点" header-align="center">
                            <template #default="scope">
                                <div v-if="tableDate.length > 0 && tableDate[0] != null">
                                    <li v-for="i in scope.row.graduationPointList.length">
                                        {{ scope.row.graduationPointList[i - 1].name }}
                                    </li>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column label="课程目标" header-align="center">
                            <template #default="scope">
                                <div v-if="tableDate.length > 0 && tableDate[0] != null">
                                    <li v-for="i in scope.row.courseTargetList.length">
                                        {{ scope.row.courseTargetList[i - 1].name }}
                                    </li>
                                </div>
                            </template>
                        </el-table-column>
                        <!-- <el-table-column label="课程内容" header-align="center">
                            <template #default="scope">
                                <div v-if="tableDate.length > 0 && tableDate[0] != null">
                                    <li v-for="i in scope.row.courseChapterList.length">
                                        {{ scope.row.courseChapterList[i - 1].name }}
                                    </li>
                                </div>
                            </template>
                        </el-table-column> -->
                    </el-table>
                </div>
                <el-row class="task-title" :style="getStyle()">
                    课程实验模块
                </el-row>
                <el-row class="task-info" :style="getStyle()">
                    本课程共设计{{ tasks.length }}个教学实验。详细实验内容请参考课程资源的实验指导书。
                </el-row>
                <div class="task" :style="getStyle()">
                    <div style="display:flex; align-items:center; margin-right:3vw">
                        <el-button :icon="ArrowLeftBold" circle type="primary" @click="moveRight()" />
                    </div>
                    <div class="moveable-container" style="width: 100%; height: 100%;" ref="parentDiv"> <!-- 窗口 -->
                        <div class="slideway" ref="slideway"> <!-- 滑轨 -->
                            <div class="hh" v-for="i in Math.ceil(tasks.length / 5)" :key="i" ref="childDiv"
                                style="display:flex; width: 100%;">
                                <!-- 单次展示的内容 -->
                                <div class="task-module" id="task-module"
                                    v-for="task in tasks.slice((i - 1) * 5, i * 5)" :key="task.id">
                                    <div class="task-module-img">
                                        <img v-if="task.taskCover" :src="'/local-resource/image/' + task.taskCover"
                                            alt=""
                                            style="width: 100%; height: 100%; object-fit: cover; position: relative;">
                                        <div class="task-name">{{ task.taskName }}</div>
                                    </div>
                                    <div v-if="task.requirementLis"
                                        style="display: flex; flex-direction: column; align-items: flex-start; justify-content: flex-start; width: 100%; padding-left: 30px;">
                                        <div class="task-module-content">
                                            <h1>实验目的</h1>
                                            <div v-for="i in task.requirementList.length">
                                                {{ task.requirementList[i - 1].name }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="display:flex; align-items:center; margin-left:3vw">
                        <el-button :icon="ArrowRightBold" circle type="primary" @click="moveLeft()" />
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="课程样章" name="2">
                <div v-if="CurttenContent.mdCourse == null" class="guidance">
                    <div class="editor-content-view" v-html="CurttenContent.guidance">
                    </div>
                </div>
                <div v-else class="article_container" :style="getStyle()">
                    <div v-for="(item, i) in articleList">
                        <el-row v-if="item.content && item.content != ''" class="article_title" :id="item.chapterName"
                            @click="openArticle(item.chapterName)">
                            {{ '样章--' + item.chapterName }}
                        </el-row>
                        <MdPreview class="article_content" :class="'article_' + item.chapterName"
                            :editorId="'preview-only_' + item.chapterId" :modelValue="item.content" />
                    </div>
                    <div style="height: 30px;">

                    </div>
                </div>
                <div v-if="ismy()">
                    <div class="download" :style="getStyle()">
                        <div v-for="pkg in CurttenContent.pkgs " style="font-size: 20px;">
                            <el-link :underline="false" type="primary"
                                :href="'/local-resource/file/' + pkg.filename"><el-icon>
                                    <Download />
                                </el-icon>{{ pkg.originFilename }}</el-link>
                        </div>
                    </div>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>


<script setup lang="ts">
import { onBeforeMount, onMounted, nextTick, onUnmounted, ref, watch, onBeforeUnmount } from 'vue';
import router from '@/router';
import { useRoute } from 'vue-router';
import { ElMessage } from 'element-plus'
import { ArrowLeftBold, ArrowRightBold } from '@element-plus/icons-vue'
import { GetById } from '@/apis/content/getById';
import pageHeader from '@/components/pageheader.vue'
import { ContentTasks } from '@/apis/content/contentTasks';
import { GetGuidance } from '@/apis/content/getGuidance.js';
import { GetPackages } from '@/apis/content/getPackages.js';
import { CourseDesign } from "@/apis/course/courseDesign.js";
import { MyCourses } from "@/apis/course/myCourses.js";
import { GetCaseMapping } from "@/apis/map/getCaseMapping.js";
import { GetArticleVoList } from "@/apis/doc_md/getArticleVoList.js"
import * as echarts from 'echarts';
import { MdPreview } from 'md-editor-v3';
// preview.css相比style.css少了编辑器那部分样式
import 'md-editor-v3/lib/preview.css';


const route = useRoute()
const contentId = route.params.courseId
const CurttenContent = ref({
    id: '',
    name: '',
    parentId: '', // 分类
    cover: '',  // 封面
    introduction: '',  // 简介
    introduce: '', // 介绍
    target: '',
    guidance: '', // 指导
    third: '',  // 详细的实现流程
    fourth: '',  // 结构关系
    keyWord: '', // 关键字
    packageId: '',
    isDelete: '',
    pkgs: [],
    mdCourse: null,
})

const editableTabsValue = ref('0')
const mdCourse = ref()
watch(mdCourse, (newValue, oldValue) => {
    if (newValue) {
        getArticleList(newValue);
    }

})

watch(editableTabsValue, (newValue, oldValue) => {
    if (newValue == '0' && !InitChartStatus.value) {
        setTimeout(() => {
            initChart()
        }, 1000)
    }
})
const disabled = ref(false)
const toAppliedCourse = async () => {
    await router.push({
        name: 'AppliedCourse',
        params: {
            courseId: contentId
        }
    })
}

const tableDate = ref([])

const myContents = ref([])

const ismy = () => {
    if (myContents.value.length > 0) {
        let myContentIdList = []
        for (let i = 0; i < myContents.value.length; i++) {
            myContentIdList.push(myContents.value[i].id)
        }
        if (myContentIdList.includes(CurttenContent.value.id)) {
            return true
        } else {
            return false
        }
    } else return false
}

const tableRowStyle = ({ rowIndex }: { rowIndex: number }) => {
    if (rowIndex % 2 === 1) {
        return { backgroundColor: '#f2faff' }
    }
}
const status = ref(false)

const tasks = ref([])

const showTasks = ref([])
const left = ref(0)
const right = ref(5)

const scrollLeft = () => {
    if (tasks.value.length < 5) {
        return
    }
    if (left.value > 0) {
        left.value = left.value--
        right.value = right.value--
        // console.log(left.value, right.value)
        showTasks.value = tasks.value.slice(left.value, right.value)
    }
}

const scrollRight = () => {
    if (tasks.value.length < 5) {
        return
    }
    if (right.value < tasks.value.length) {
        left.value = left.value++
        right.value = right.value++
        // console.log(left.value, right.value)
        showTasks.value = tasks.value.slice(left.value, right.value)
    }
}
const changeShowTasks = (i) => {
    // console.log(tasks.value)
    if (tasks.value.length < 5) {
        return
    }
    //last
    if (i == 0) {
        if (left.value > 0) {
            left.value = left.value - 1
            right.value = right.value - 1
            // console.log(left.value, right.value)
            showTasks.value = tasks.value.slice(left.value, right.value)
        }
    }
    //next
    if (i == 1) {
        if (right.value < tasks.value.length) {
            left.value = left.value + 1
            right.value = right.value + 1
            // console.log(left.value, right.value)
            showTasks.value = tasks.value.slice(left.value, right.value)
        }
    }
}

const getMapping = (caseId) => {
    GetCaseMapping(caseId).then(res => {
        if (res.state == 200) {
            dataSource.value = res.data
            updataChart()
        } else {
            ElMessage.error(res.message)
        }
    })
}
const InitChartStatus = ref(false)

const option = ref({
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
    },
    series: [
        {
            type: 'tree',
            name: 'tree',
            data: [],
            top: '5%',
            left: '10%',
            bottom: '5%',
            right: '10%',
            // roam: 'move',
            // zoom: 0.7,
            symbolSize: 10, // 标记的大小
            symbol: "emptyCircle",
            itemStyle: {
                color: "#89c7c7",
            },
            leaves: {
                label: {
                    position: 'right',
                },
            },
            emphasis: {
                focus: 'relative', // 聚焦方式
            },
            initialTreeDepth: 3, // 全部展开-1 / 展开层级
            animationDuration: 550,
            animationDurationUpdate: 750,
            layout: 'orthogonal',
            orient: 'LR',
        },
    ]
})
const dataSource = ref<Tree[]>([])
const treeChart = ref()
const courseMappingHeight = ref(1000)

const treeLeafNum = ref(0)
function getTreeLeaf(treeData, leafList) {
    // 判断是否为数组
    if (Array.isArray(treeData)) {
        treeData.forEach(item => {
            if (item.children && item.children.length > 0) {
                getTreeLeaf(item.children, leafList)
            } else {
                leafList.push(item)
            }
        })
    } else {
        if (treeData.children && treeData.children.length > 0) {
            getTreeLeaf(treeData.children, leafList)
        } else {
            leafList.push(treeData)
        }
    }
    return leafList
}

const initChart = () => {
    if (editableTabsValue.value != '0') {
        return
    }
    destoryEchart()
    if (!document.getElementById("course_mapping")) {
        return
    }
    const eleArr = getTreeLeaf(dataSource.value, [])
    const itemHeight = 40;
    const currentHeight = itemHeight * (eleArr.length - 1) || itemHeight;
    const newHeight = Math.max(currentHeight, itemHeight, courseMappingHeight.value);
    courseMappingHeight.value = newHeight;
    // treeChart.value.resize();
    treeChart.value = echarts.init(document.getElementById("course_mapping"))
    treeChart.value.showLoading();
    //todo 初始化数据
    option.value.series[0].data = dataSource.value
    // console.log(dataSource.value)
    treeChart.value.setOption(option.value);
    treeChart.value.hideLoading();
    treeChart.value.on('mousedown', function (params: any) {
        const name = params.data.name;
        const dataIndex = params.dataIndex;
        // console.log(dataIndex)
        const curNode = treeChart.value._chartsViews[0]._data.tree._nodes.filter(function (item: any) {
            return item.name === name;
        });
        if (curNode[0].depth) {
            treeChart.value._chartsViews[0]._data.tree._nodes.forEach(function (item: any) {
                if (params.event.target.culling === false) {
                    //点击标签阻止默认节点展开或收缩事件
                    if (item.dataIndex === dataIndex) {
                        // 若是展开状态不允许收缩，若是收缩状态不允许展开
                        item.isExpand = !item.isExpand;
                    }
                }
            });
        }
    })
    treeChart.value.on('click', function (params: any) {
        if (params.event.target.culling === false) {
            if (params.data.link && params.data.link != '') {
                if (params.data.link.startsWith('http', 0) || params.data.link.startsWith('#', 0)) {
                    window.open(params.data.link);
                }
            }
        }
    })

    window.addEventListener('resize', function () {
        getWindowResize();
        if (treeChart.value) {
            treeChart.value.resize();
        }
    })
    if (treeChart.value.getWidth() && treeChart.value.getHeight()) {
        InitChartStatus.value = true
        treeChart.value.resize({ height: courseMappingHeight.value + 'px' });
        // console.log("true---")
    } else {
        treeChart.value = null
    }
}

const resetChart = () => {
    // console.log(treeChart.value.isRevoked)
    if (InitChartStatus.value) {
        return
    }
    initChart();
}


const updataChart = () => {
    if (treeChart.value != null) {
        option.value.series[0].data = dataSource.value
        treeChart.value.setOption(option.value)
    }
}

const destoryEchart = () => {
    if (treeChart.value != null) {
        treeChart.value.dispose()
        treeChart.value = null
    }
    InitChartStatus.value = false
}

interface Tree {
    id?: number
    name: string
    level?: number
    pid: number,
    itemStyle?: {
        color: string
    }
    label?: {
        position: string,
        color: string,
        fontSize: number,
    }
    symbolSize?: number
    link?: string
    children?: Tree[]
}
const articleList = ref([])
const getArticleList = (id) => {
    GetArticleVoList(id).then(res => {
        if (res.state == 200) {
            articleList.value = res.data
        } else {
            ElMessage.error(res.message)
        }
    })
}

const openArticle = (name) => {
    const elements = ref(<unknown>document.getElementsByClassName('article_' + name) as HTMLElement)
    if (elements.value[0].style.display == 'block') {
        elements.value[0].style.display = 'none'
        return
    }
    elements.value[0].style.display = 'block'
    // elements.value[0].style.display = 'block';
}

onBeforeMount(async () => {
    // getTableDate(contentId);
    // 内容基本信息
    await GetById(contentId).then(res => {
        if (res.state == 200) {
            CurttenContent.value = res.data
            mdCourse.value = CurttenContent.value.mdCourse
            // console.log(CurttenContent.value);
            status.value = true;
        } else {
            ElMessage.error(res.message)
        }
    })

    await getMapping(contentId)


    await GetGuidance(contentId).then(res => {
        if (res.state == 200) {
            CurttenContent.value.guidance = res.data
        } else {
            ElMessage.error("获取课程指导异常")
        }
    })
    await CourseDesign(contentId).then(res => {
        if (res.state == 200) {
            tableDate.value = res.data
            // console.log(tableDate.value)
        } else {
            ElMessage.error("获取课程设计异常")
        }
    })

    await GetPackages(contentId).then(res => {
        if (res.state == 200) {
            CurttenContent.value.pkgs = res.data
            // console.log(CurttenContent.value.pkgs);

        } else {
            ElMessage.error("获取资源包导异常")
        }
    })

    await ContentTasks(contentId).then(res => {
        if (res.state == 200) {
            // console.log(res)
            tasks.value = res.data
            // console.log(tasks.value);
            showTasks.value = tasks.value.slice(left.value, right.value)
        } else {
            ElMessage.error(res.message)
        }

    })

    await MyCourses().then(res => {
        if (res.state == 200) {
            myContents.value = res.data
        } else {
            ElMessage.error(res.message)
        }
    })


})

window.addEventListener('popstate', function () {
    // destoryEchart()
    // // // setTimeout(() => {
    // // //     initChart()
    // // // }, 300)
    router.go(0)
})

const getStyle = () => {
    if (windowWidth.value > 1900) {
        return 'padding: 0px calc(164px + 4.8vw);'
    }
    return 'padding: 0px 10px;'
}
const down = ref({
    top: 20,
    background: "",
})
const headrClass = ref('')
const handleScroll = () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop) {
        headrClass.value = "down"
    } else {
        headrClass.value = ""
    }
}
// 屏幕宽度
const windowWidth = ref(0)
// 屏幕高度
const windowHeight = ref(0)
// 生命周期

const containerWidth = ref(0)
const taskModuleWidth = ref(0)
const currentPage = ref(0);
const container = ref(null)
const parentDiv = ref(null);
const childDiv = ref(null);
const slideway = ref(null)
const childDivWidth = ref(0) //单次要平移的长度

const moveLeft = () => {
    if (currentPage.value >= Math.ceil(tasks.value.length / 5) - 1) {
        return
    }
    currentPage.value += 1
    let position = 0 - (currentPage.value / Math.ceil(tasks.value.length / 5)) * slideway.value.clientWidth
    // console.log(currentPage.value)
    // console.log(position)
    slideway.value.style.transform = 'translateX(' + position + 'px)'
}

const moveRight = () => {
    if (currentPage.value <= 0) {
        return
    }
    currentPage.value -= 1
    let position = 0 - (currentPage.value / Math.ceil(tasks.value.length / 5)) * slideway.value.clientWidth
    // console.log(currentPage.value)
    // console.log(position)
    slideway.value.style.transform = 'translateX(' + position + 'px)'
}

const tabClickHandle = () => {

    setTimeout(() => {
        // console.log(parentDiv.value.clientWidth)
        childDivWidth.value = parentDiv.value.clientWidth
        if (childDiv.value) {
            for (let i = 0; i < childDiv.value.length; i++) {
                childDiv.value[i].style.width = parentDiv.value.clientWidth + 'px'
            }
        }
        let position = 0 - (currentPage.value / Math.ceil(tasks.value.length / 5)) * slideway.value.clientWidth
        slideway.value.style.transform = 'translateX(' + position + 'px)'
    }, 10)
    resetChart();
}

const scrollToHeading = (headingText) => {
    // 根据传入的标题文本，找到对应的目录项在主页面中的位置
    const element = document.getElementById(headingText);
    // 使用JavaScript的scrollIntoView方法将主页面滚动到对应位置
    element.scrollIntoView({ behavior: 'smooth' });
    openArticle(headingText)
}

const autoScrollToAnchor = () => {
    const target = <any>route.meta.scrollTo;
    if (target) {
        editableTabsValue.value = ('2')
        setTimeout(() => {
            scrollToHeading(decodeURIComponent(target).slice(1))
        }, 1000)
    }
}

onMounted(async () => {
    getWindowResize()
    window.addEventListener('resize', function () {
        getWindowResize();
        if (treeChart.value) {
            treeChart.value.resize();
        }
    })
    autoScrollToAnchor();
    setTimeout(() => {
        initChart();

    }, 2000)
})
// 获取屏幕尺寸
const getWindowResize = function () {
    windowWidth.value = window.innerWidth
    windowHeight.value = window.innerHeight
    tabClickHandle()
}

onUnmounted(() => {
    destoryEchart();
})

window.addEventListener("scroll", handleScroll)
</script>
<style scoped>
.article_container {
    background-color: #ffffff;
    padding-bottom: 2.2em;
}

.article_title {
    padding-top: 0.8em;
    padding-bottom: 0.7em;
    display: flex;
    justify-content: start;
    text-align: center;
    font-size: 2.2em;
    color: #33b8b9;
}

.article_content {
    display: none;
}

.course_mapping {
    /* height: 80vh; */
    width: 100%;
    background-color: #ffffff;
}

.moveable-container {
    display: flex;
    flex: 1;
    overflow: hidden;
}

.slideway {
    display: flex;
    flex-direction: row;
    z-index: 1;
    transition: transform 1s ease;
    transition-duration: 0ms;
    transform: translate3d(0px, 0px, 0px);
}

.task-name {
    position: absolute;
    z-index: 100;
    text-align: center;
    height: 100%;
    width: 33%;
    line-height: 18px;
    left: 38%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

}

.resource {
    background-color: #f2faff;
    overflow: hidden;
}

.table_title {
    padding: 20px 0px;
    background-color: #fff;
    font-size: 36px;
    color: #33b8b9;
}

.download {
    padding: 20px 0px;
}

.guidance {
    padding: 20px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.guidance-title,
.resource-title {
    padding: 20px 0px;
    font-size: 36px;
    color: #33b8b9;
}

.task-title {
    padding: 20px 0px;
    font-size: 36px;
    color: #33b8b9;
}

.task-info {
    padding: 20px 0px;
    font-size: 24px;
}

.task {
    /* width: 20vw; */
    padding: 20px 4vw;
    display: flex;
    justify-content: center;
}

.task-module {
    width: 20%;
    padding-right: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    /* flex-grow: 1; */
}

.task-module-img {
    margin-top: 5vh;
    position: relative;
}

.task-module-content {
    /* margin-left: 2vw;
    margin-top: 5vh;
    display: flex;
    flex-direction: column; */
    min-height: 250px;
}

.task-module-content h1 {
    color: #33b8b9;
    font-size: 24px;
    font-weight: bold;
}

.task-module-content span {
    font-size: 24px;
}

.task-module-deliverable h1 {
    color: #33b8b9;
    font-size: 24px;
    font-weight: bold;
}

.task-module-deliverable span {
    font-size: 24px;
}

.table {
    box-shadow: var(--el-box-shadow-lighter);
}

.summary {
    min-height: 30vh;
    background-color: #ffffff;
    /* padding-top: 20px; */
    flex-direction: column;
}

.summary_title {
    background-color: #ffffff;
    font-size: 36px;
    color: #33b8b9;
}

.points_title {
    background-color: #ffffff;
    padding: 20px 0px;
    font-size: 36px;
    color: #33b8b9;
}

.summary_detail {
    min-height: 20vh;
    /* flex-grow: 1; */
    font-size: 16px;
    background-color: #ffffff;
}
</style>

<style>
.editor-content-view {
    /* border: 3px solid #ccc; */
    /* border-radius: 5px; */
    padding: 0 10px;
    margin-top: 20px;
    overflow-x: auto;
    width: 1100px;
}

.editor-content-view p,
.editor-content-view li {
    white-space: pre-wrap;
    /* 保留空格 */
}

.editor-content-view blockquote {
    border-left: 8px solid #d0e5f2;
    padding: 10px 10px;
    margin: 10px 0;
    background-color: #f1f1f1;
}

.editor-content-view code {
    font-family: monospace;
    background-color: #eee;
    padding: 3px;
    border-radius: 3px;
}

.editor-content-view pre>code {
    display: block;
    padding: 10px;
}

.editor-content-view table {
    border-collapse: collapse;
}

.editor-content-view td,
.editor-content-view th {
    border: 1px solid #ccc;
    min-width: 50px;
    height: 20px;
}

.editor-content-view th {
    background-color: #f1f1f1;
}

.editor-content-view ul,
.editor-content-view ol {
    padding-left: 20px;
}

.editor-content-view input[type="checkbox"] {
    margin-right: 5px;
}

.editor-content-view img {
    max-width: 100%;
    height: auto;
    margin: 0px 20px;
    float: right;
}

.editor-content-view strong {
    font-weight: bold;
}

.clearfix::after {
    content: "";
    clear: both;
    display: table;
}
</style>