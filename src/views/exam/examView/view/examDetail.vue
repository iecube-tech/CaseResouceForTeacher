<template>
    <div class="mb-8">
        <div class="flex justify-between items-start">
            <div v-if="examInfo">
                <h2 class="text-2xl font-bold text-gray-900 mb-2" id="exam-title">
                    {{ examInfo.examName }}
                </h2>
                <div class="flex items-center space-x-4 text-gray-600">
                    <span class="text-sm">课程: <span id="exam-course">{{ examInfo.projectName }}</span></span>
                    <span class="text-sm">考试时长: <span id="exam-duration">{{ examInfo.duration }}分钟</span></span>
                    <span class="text-sm">总分: <span id="exam-total-score">{{ examInfo.totalScore }}</span></span>
                    <span class="text-sm">及格分数: <span id="exam-passing-score">{{ examInfo.passScore }}</span></span>
                </div>
            </div>
            <button id="back-to-exams" @click="goBack()"
                class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50">
                <font-awesome-icon icon="fas fa-arrow-left" class=" mr-2"></font-awesome-icon>
                返回考试列表
            </button>
        </div>
    </div>
    <div v-if="examInfo" class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div class="score-summary-card p-5">
            <div class="text-sm opacity-80">平均分</div>
            <div class="text-3xl font-bold mt-2">{{ examInfo.avgScore }}</div>
        </div>
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
            <div class="text-sm text-gray-500">已提交</div>
            <div class="text-3xl font-bold text-green-600 mt-2">{{ examInfo.doneNum }}</div>
        </div>
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
            <div class="text-sm text-gray-500">进行中</div>
            <div class="text-3xl font-bold text-blue-600 mt-2">{{ examInfo.doingNum }}</div>
        </div>
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
            <div class="text-sm text-gray-500">未开始</div>
            <div class="text-3xl font-bold text-gray-600 mt-2">{{ examInfo.notStartedNum }}</div>
        </div>
    </div>

    <!-- 学生列表 -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <!-- 搜索和筛选 -->
        <div class="p-6 border-b border-gray-200">
            <div class="flex flex-col md:flex-row md:items-center justify-between">
                <div class="mb-4 md:mb-0">
                    <h3 class="text-lg font-bold text-gray-900">学生列表</h3>
                    <p v-if="examInfo" class="text-gray-600 text-sm">共{{ examInfo.stuNum }}名学生</p>
                </div>
                <div class="flex space-x-3">
                    <div class="relative">
                        <input type="text" placeholder="搜索学生..."
                            class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <font-awesome-icon icon="fas fa-search" class="absolute left-3 top-3 text-gray-400">
                        </font-awesome-icon>
                    </div>
                </div>
            </div>
        </div>

        <!-- 学生表格 -->
        <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                    <tr>
                        <th scope="col"
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">学号
                        </th>
                        <th scope="col"
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">姓名
                        </th>
                        <th scope="col"
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">考试状态
                        </th>
                        <th scope="col"
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">分数
                        </th>
                        <th scope="col"
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">提交时间
                        </th>
                        <th scope="col"
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">用时
                        </th>
                        <th scope="col"
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作
                        </th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200" id="students-table-body">
                    <tr v-for="student in examStuList">
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm font-medium text-gray-900">{{ student.stuId }}</div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm font-medium text-gray-900">{{ student.stuName }}</div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <span class="status-badge" :class="statusClass(student.status)">
                                <font-awesome-icon icon="fas fa-check-circle" class="mr-1"></font-awesome-icon>
                                {{ student.status == 'notStart' ? '未开始' : student.status == 'doing' ? '进行中' : '已完成' }}
                            </span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <span v-if="examInfo" class="score-chip" :class="student.score == null ? '' : student.score >= 0.8 * examInfo.totalScore ? 'score-high' :
                                student.score >= 0.6 * examInfo.totalScore ? 'score-medium' : 'score-low'">
                                {{ student.score }}
                            </span>
                            <span v-else>
                                -
                            </span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {{ student.endTime == null ? '-' : formatDate(student.endTime) }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <span>
                                {{ student.status == 'doing' ? '已用时' : '' }}
                                {{ calculateTimeDuration(student.startTime, student.endTime) }}
                                {{ student.status == 'notStart' ? '' : '分钟' }}
                            </span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button class="view-exam-btn text-blue-600 hover:text-blue-900"
                                @click="toStuExamDetail(student.esId)">
                                查看答卷
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- 分页 -->
        <div class="px-6 py-4 border-t border-gray-200">
            <div v-if="examInfo" class="flex items-center justify-between">
                <div class="text-sm text-gray-700">
                    显示 <span class="font-medium">{{ (page - 1) * pageSize + 1 }}</span>
                    到 <span class="font-medium">{{ page * pageSize }}</span> 个，共
                    <span class="font-medium"> {{ examInfo.stuNum }}</span> 个结果
                </div>
                <nav class="flex items-center space-x-2">
                    <button class="p-2 text-gray-500 hover:text-gray-700 disabled:opacity-50" :disabled="page == 1"
                        @click="pageChange(page--)">
                        <font-awesome-icon icon="fas fa-chevron-left"></font-awesome-icon>
                    </button>
                    <button v-for="item in displayPageList" :key="item" class="px-3 py-1" @click="pageChange(item)"
                        :class="[item === '...' ? 'text-gray-400 cursor-default' : page === item ? 'bg-blue-600 text-white rounded-lg' : 'text-gray-600 hover:text-gray-900']"
                        :disabled="item === '...'">
                        {{ item }}
                    </button>
                    <button class="p-2 text-gray-500 hover:text-gray-700" :disabled="page >= totalPage"
                        @click="pageChange(page++)">
                        <font-awesome-icon icon="fas fa-chevron-right"></font-awesome-icon>
                    </button>
                </nav>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getExamInfo, getExamStuList } from '@/apis/exam/examView'
import { formatDate, calculateTimeDuration } from '@/utils/util'
import router from '@/router';


const route = useRoute()
const examId = <number><any>route.params.examId

const page = ref(1)
const pageSize = ref(10)
const totalPage = ref(1)
const examInfo = ref<any>()
const examStuList = ref<any[]>([])
// 计算属性：生成1到maxNum的连续数组
const numList = computed(() => {
    // 方案A：Array.from（简洁）
    return Array.from({ length: totalPage.value }, (_, i) => i + 1);
    // 方案B：Array.fill + map（兼容低版本ES）
    // return Array(maxNum.value).fill(0).map((_, i) => i + 1);
});

// 核心：计算需要显示的页码列表（包含省略号）
const displayPageList = computed(() => {
    const current = page.value;
    const total = totalPage.value;
    const result = [];

    // 如果总页数 <= 7，全部显示（可根据需求调整这个阈值）
    if (total <= 7) {
        return numList.value;
    }
    // 始终显示第一页
    result.push(1);

    // 处理前面的省略号
    if (current > 4) {
        result.push('...');
    }
    // 显示当前页附近的页码（当前页前2页到后2页）
    const start = Math.max(2, current - 2);
    const end = Math.min(total - 1, current + 2);
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    // 处理后面的省略号
    if (current < total - 3) {
        result.push('...');
    }
    // 始终显示最后一页
    result.push(total);
    return result;
});

const pageChange = (p: number) => {
    page.value = p
    getExamStuList(examId, page.value, pageSize.value).then(res => {
        if (res.state == 200) {
            examStuList.value = res.data
        }
    })
}

const statusClass = (status: string) => {
    if (status == 'done') {
        return 'status-completed'
    }
    if (status == 'doing') {
        return 'status-in-progress'
    }
    if (status == 'notStart') {
        return 'status-not-started'
    }
}

const goBack = () => {
    router.push({
        name: 'examList',
        params: {
            projectId: route.params.projectId
        },
    })
}

const toStuExamDetail = (esId: number) => {
    router.push({
        name: 'stuExamDetail',
        params: {
            esId: esId
        }
    })
}

onBeforeMount(() => {
    getExamInfo(examId).then(res => {
        if (res.state == 200) {
            examInfo.value = res.data
            totalPage.value = Math.ceil(examInfo.value.stuNum / pageSize.value)
        }
    })
    getExamStuList(examId, page.value, pageSize.value).then(res => {
        if (res.state == 200) {
            examStuList.value = res.data
        }
    })
})
</script>
<style scoped>
.score-summary-card {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-radius: 12px;
}

.status-badge {
    display: inline-flex;
    align-items: center;
    padding: 4px 12px;
    border-radius: 16px;
    font-size: 12px;
    font-weight: 500;
}

.status-completed {
    background-color: #d1fae5;
    color: #065f46;
}

.status-in-progress {
    background-color: #fef3c7;
    color: #92400e;
}

.status-not-started {
    background-color: #e5e7eb;
    color: #6b7280;
}

.status-submitted {
    background-color: #dbeafe;
    color: #1e40af;
}

.score-chip {
    display: inline-flex;
    align-items: center;
    padding: 2px 10px;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 600;
}

.score-high {
    background-color: #d1fae5;
    color: #065f46;
}

.score-medium {
    background-color: #fef3c7;
    color: #92400e;
}

.score-low {
    background-color: #fee2e2;
    color: #991b1b;
}
</style>