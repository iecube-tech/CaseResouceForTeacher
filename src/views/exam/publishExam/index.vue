<template>
    <div>
        <!-- 导航栏 -->
        <nav class="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <div class="flex items-center">
                        <button href="实验状态监测3.html" class="flex items-center text-blue-600 hover:text-blue-800"
                            @click="toProjectDetail()">
                            <font-awesome-icon class="mr-2" icon="fas fa-arrow-left "></font-awesome-icon>
                            <span>返回监测平台</span>
                        </button>
                    </div>
                    <div class="flex items-center">
                        <h1 class="text-lg font-semibold text-gray-900">创建考试</h1>
                    </div>
                    <div class="w-24"></div> <!-- 占位保持居中 -->
                </div>
            </div>
        </nav>

        <el-dialog v-model="parseFileErrorDialog" title="解析文件错误" width="50%">
            <div>
                {{ parseFileError }}
            </div>
            <div>
                <span>请根据错误提示处理表格内容后重新上传</span>
            </div>
        </el-dialog>

        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <!-- 步骤指示器 - 改为三步 -->
            <div class="mb-10">
                <div class="flex justify-between items-center relative max-w-lg mx-auto">
                    <div class="absolute top-4 left-0 right-0 h-0.5 bg-gray-200 -z-10"></div>

                    <!-- 步骤1：上传文件 -->
                    <div class="flex flex-col items-center relative">
                        <div ref="step1" class="step-indicator active mb-2" data-step="1">
                            1
                        </div>
                        <span class="text-sm font-medium text-blue-600">上传文件</span>
                    </div>

                    <!-- 步骤2：预览内容 -->
                    <div class="flex flex-col items-center relative">
                        <div ref="step2" class="step-indicator pending mb-2" data-step="2">
                            2
                        </div>
                        <span class="text-sm font-medium text-gray-500">预览内容</span>
                    </div>

                    <!-- 步骤3：发布考试 -->
                    <div class="flex flex-col items-center relative">
                        <div ref="step3" class="step-indicator pending mb-2" data-step="3">
                            3
                        </div>
                        <span class="text-sm font-medium text-gray-500">发布考试</span>
                    </div>
                </div>
            </div>

            <!-- 页面1：上传文件 -->
            <div ref="page1" class="page-transition page-visible">
                <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div class="flex items-center justify-between mb-6">
                        <div>
                            <h2 class="text-xl font-bold text-gray-900 mb-2">上传考试文件</h2>
                            <p class="text-gray-600">请下载模板，填写考试内容后上传Excel文件</p>
                        </div>
                        <button id="downloadTemplateBtn" @click="DownloadTemplate()"
                            class="btn-gradient-hover inline-flex items-center px-5 py-2.5 rounded-lg text-white font-medium">
                            <font-awesome-icon icon="fas fa-download" class="mr-2"></font-awesome-icon>
                            下载模板
                        </button>
                    </div>

                    <!-- 模板说明卡片 -->
                    <div class="bg-blue-50 rounded-lg p-5 mb-6 border border-blue-100">
                        <div class="flex items-start">
                            <div class="flex-shrink-0 mt-1">
                                <font-awesome-icon icon="fas fa-info-circle"
                                    class=" text-blue-500 text-xl"></font-awesome-icon>
                            </div>
                            <div class="ml-4">
                                <h3 class="font-medium text-blue-900 mb-2">模板说明</h3>
                                <p class="text-blue-700 mb-3">请严格按照模板格式填写，模板包含以下信息：</p>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <h4 class="font-medium text-blue-800 mb-1">考试信息</h4>
                                        <ul class="text-sm text-blue-700 space-y-1">
                                            <li>• 考试名称</li>
                                            <li>• 考试时长（分钟）</li>
                                            <li>• 总分值</li>
                                            <li>• 及格分数</li>
                                            <li>• 开始/结束时间</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 class="font-medium text-blue-800 mb-1">题目信息（每题需包含）</h4>
                                        <ul class="text-sm text-blue-700 space-y-1">
                                            <li>• 难度等级（易/中/难）</li>
                                            <li>• 关联知识点</li>
                                            <li>• 分值</li>
                                            <li>• 正确答案</li>
                                            <li>• 随机规则（如：5选2）,如无随机需求，该信息不填</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 文件上传区域 -->
                    <div>
                        <div v-if="fileResourceSuccess == false" class="mb-6">
                            <el-upload drag action="/dev-api/exam/upload" :headers="headers" :show-file-list="false"
                                :before-upload="beforeAvatarUpload" :on-success="handleAvatarSuccess">
                                <font-awesome-icon icon="fa-solid fa-file-excel" class="text-5xl text-green-500 mb-5" />
                                <h3 class="text-xl font-medium text-gray-900 mb-3">拖放Excel文件到这里</h3>
                                <p class="text-gray-500 mb-6 text-lg">或点击下方按钮选择文件</p>
                                <input type="file" id="examFileInput" accept=".xlsx,.xls" class="hidden">
                                <button id="selectFileBtn"
                                    class="btn-gradient-hover inline-flex items-center px-8 py-4 rounded-lg text-white font-medium text-lg">
                                    <font-awesome-icon icon="fas fa-upload" class="mr-3"></font-awesome-icon>
                                    选择Excel文件
                                </button>
                                <p class="text-gray-400 mt-4">支持 .xlsx 格式，最大10MB</p>
                            </el-upload>
                        </div>

                        <!-- 文件信息 -->
                        <div v-else id="fileInfo" class="bg-green-50 rounded-lg p-5 mb-6 border border-green-200">
                            <div class="flex items-center justify-between">
                                <div class="flex items-center">
                                    <div class="bg-white p-3 rounded-lg mr-4">
                                        <font-awesome-icon icon="fa-solid fa-file-excel"
                                            class="text-green-500 text-2xl" />
                                    </div>
                                    <div>
                                        <div v-if="fileResource" class="font-bold text-gray-900 text-lg" id="fileName">
                                            {{ fileResource.originFilename }}
                                        </div>
                                        <div class="text-gray-600" id="fileSize"></div>
                                        <div class="text-sm text-green-600 mt-1">
                                            <font-awesome-icon icon="fas fa-check-circle"
                                                class="mr-1"></font-awesome-icon>
                                            文件已就绪，可以解析
                                        </div>
                                    </div>
                                </div>
                                <div class="flex space-x-3">
                                    <button id="removeFileBtn" @click="removeExcelFile()"
                                        class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50">
                                        <font-awesome-icon icon="fas fa-times" class="mr-2" />
                                        移除
                                    </button>
                                    <button id="parseFileBtn" @click=praseFile()
                                        class="btn-gradient-hover inline-flex items-center px-5 py-2 rounded-lg text-white font-medium">
                                        <font-awesome-icon icon="fas fa-cogs" class="mr-2" />
                                        解析文件
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 注意事项 -->
                    <div class="bg-yellow-50 rounded-lg p-5 border border-yellow-200">
                        <div class="flex items-start">
                            <div class="flex-shrink-0 mt-1">
                                <font-awesome-icon icon="fas fa-exclamation-triangle" class="text-yellow-500">
                                </font-awesome-icon>
                            </div>
                            <div class="ml-4">
                                <h4 class="font-medium text-yellow-800 mb-2">注意事项</h4>
                                <ul class="text-sm text-yellow-700 space-y-1">
                                    <li>• 确保所有必填字段都已填写</li>
                                    <li>• 难度等级请填写：易、中、难</li>
                                    <li>• 关联知识点使用逗号分隔多个标签</li>
                                    <li>• 多选题正确答案用逗号分隔，如：A,B,D</li>
                                    <li>• 所有题需提供参考答案</li>
                                    <li>• 支持单选题、多选题和简答题</li>
                                    <li>• 随机规则格式：X选Y（如：5选2，表示从5道题中随机选2道）</li>
                                    <li>• 相同知识点、相同难度的题目视为同一随机组</li>
                                    <li>• 考试发布后题目无法修改</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 页面2：预览内容 -->
            <div ref="page2" class="page-transition page-hidden">
                <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div class="flex items-center justify-between mb-6">
                        <div>
                            <h2 class="text-xl font-bold text-gray-900 mb-2">预览考试内容</h2>
                            <p class="text-gray-600">请仔细检查考试内容和题目，确认无误后发布</p>
                        </div>
                        <button id="backToUploadBtn" @click="goToStep(1)"
                            class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50">
                            <font-awesome-icon icon="fas fa-arrow-left" class="mr-2"></font-awesome-icon>
                            返回修改
                        </button>
                    </div>

                    <!-- 考试基本信息 -->
                    <div class="bg-blue-50 rounded-lg p-6 mb-6 border border-blue-200">
                        <h3 class="text-lg font-bold text-blue-900 mb-4">考试基本信息</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div class="bg-white p-4 rounded-lg border border-blue-100">
                                <div class="text-sm text-blue-600 mb-1">考试名称</div>
                                <div id="previewExamName">
                                    <span class="font-bold text-gray-900" v-if="parseRes">
                                        {{ parseRes.exam.name }}
                                    </span>
                                    <span class="font-bold text-gray-900" v-else>-</span>
                                </div>
                            </div>
                            <div class="bg-white p-4 rounded-lg border border-blue-100">
                                <div class="text-sm text-blue-600 mb-1">考试时长</div>
                                <div id="previewExamDuration">
                                    <span class="font-bold text-gray-900" v-if="parseRes">
                                        {{ parseRes.exam.duration }}分钟
                                    </span>
                                    <span class="font-bold text-gray-900" v-else>-</span>
                                </div>
                            </div>
                            <div class="bg-white p-4 rounded-lg border border-blue-100">
                                <div class="text-sm text-blue-600 mb-1">总分值</div>
                                <div id="previewTotalScore">
                                    <span class="font-bold text-gray-900" v-if="parseRes">
                                        {{ parseRes.exam.totalScore }}
                                    </span>
                                    <span class="font-bold text-gray-900" v-else>-</span>
                                </div>
                            </div>
                            <div class="bg-white p-4 rounded-lg border border-blue-100">
                                <div class="text-sm text-blue-600 mb-1">及格分数</div>
                                <div id="previewPassingScore">
                                    <span class="font-bold text-gray-900" v-if="parseRes">
                                        {{ parseRes.exam.passScore }}
                                    </span>
                                    <span class="font-bold text-gray-900" v-else>-</span>
                                </div>
                            </div>
                        </div>
                        <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="bg-white p-4 rounded-lg border border-blue-100">
                                <div class="text-sm text-blue-600 mb-1">开始时间</div>
                                <div id="previewStartTime">
                                    <span class="font-bold text-gray-900" v-if="parseRes">
                                        {{ formatDate(parseRes.exam.startTime) }}
                                    </span>
                                    <span class="font-bold text-gray-900" v-else>-</span>
                                </div>
                            </div>
                            <div class="bg-white p-4 rounded-lg border border-blue-100">
                                <div class="text-sm text-blue-600 mb-1">结束时间</div>
                                <div id="previewEndTime">
                                    <span class="font-bold text-gray-900" v-if="parseRes">
                                        {{ formatDate(parseRes.exam.endTime) }}
                                    </span>
                                    <span class="font-bold text-gray-900" v-else>-</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 题目统计 -->
                    <div class="bg-gray-50 rounded-lg p-6 mb-6 border border-gray-200">
                        <h3 class="text-lg font-bold text-gray-900 mb-4">题目统计</h3>
                        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div class="bg-white p-4 rounded-lg border border-gray-200 text-center">
                                <div id="totalQuestions">
                                    <span class="text-3xl font-bold text-blue-600 mb-2" v-if="parseRes">
                                        {{ getQuesNum("all") }}
                                    </span>
                                    <span class="text-3xl font-bold text-blue-600 mb-2" v-else>-</span>
                                </div>
                                <div class="text-sm text-gray-600">总题数</div>
                            </div>
                            <div class="bg-white p-4 rounded-lg border border-gray-200 text-center">
                                <div id="singleChoiceCount">
                                    <span class="text-3xl font-bold text-green-600 mb-2" v-if="parseRes">
                                        {{ getQuesNum("CHOICE") }}
                                    </span>
                                    <span class="text-3xl font-bold text-green-600 mb-2" v-else>-</span>
                                </div>
                                <div class="text-sm text-gray-600">单选题</div>
                            </div>
                            <div class="bg-white p-4 rounded-lg border border-gray-200 text-center">
                                <div id="multipleChoiceCount">
                                    <span class="text-3xl font-bold text-purple-600 mb-2" v-if="parseRes">
                                        {{ getQuesNum("MultipleCHOICE") }}
                                    </span>
                                    <span class="text-3xl font-bold text-purple-600 mb-2" v-else>-</span>
                                </div>
                                <div class="text-sm text-gray-600">多选题</div>
                            </div>
                            <div class="bg-white p-4 rounded-lg border border-gray-200 text-center">
                                <div id="shortAnswerCount">
                                    <span class="text-3xl font-bold text-yellow-600 mb-2" v-if="parseRes">
                                        {{ getQuesNum("QA") }}
                                    </span>
                                    <span class="text-3xl font-bold text-yellow-600 mb-2" v-else>-</span>
                                </div>
                                <div class="text-sm text-gray-600">简答题</div>
                            </div>
                        </div>
                    </div>

                    <!-- 题目预览 -->
                    <div v-if="parseRes" class="mb-6">
                        <QuestionView :questions="parseRes.questions"></QuestionView>
                    </div>

                    <!-- 操作按钮 -->
                    <div class="border-t border-gray-200 pt-6">
                        <div class="flex justify-between">
                            <button id="backToUploadBtn2" @click="goToStep(1)"
                                class="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 font-medium">
                                <font-awesome-icon icon="fas fa-arrow-left" class="mr-2"></font-awesome-icon>
                                返回修改
                            </button>
                            <button id="continueToPublishBtn" @click="goToStep(3)"
                                class="btn-gradient-hover inline-flex items-center px-8 py-3 rounded-lg text-white font-medium">
                                继续发布
                                <font-awesome-icon icon="fas fa-arrow-right" class="ml-2"></font-awesome-icon>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 页面3：发布考试 -->
            <div ref="page3" class="page-transition page-hidden">
                <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div class="flex items-center justify-between mb-6">
                        <div>
                            <h2 class="text-xl font-bold text-gray-900 mb-2">发布考试</h2>
                            <p class="text-gray-600">确认考试信息并发布</p>
                        </div>
                        <button id="backToPreviewBtn" @click="goToStep(2)"
                            class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50">
                            <font-awesome-icon icon="fas fa-arrow-left" class="mr-2"></font-awesome-icon>
                            返回预览
                        </button>
                    </div>

                    <!-- 发布确认信息 -->
                    <div class="bg-green-50 rounded-lg p-6 mb-6 border border-green-200">
                        <div class="text-center mb-6">
                            <div
                                class="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                                <font-awesome-icon icon="fas fa-check"
                                    class="text-green-500 text-3xl"></font-awesome-icon>
                            </div>
                            <h3 class="text-xl font-bold text-gray-900 mb-2">考试内容已准备就绪</h3>
                            <p class="text-gray-600">请确认以下信息后发布考试</p>
                        </div>

                        <div class="bg-white rounded-lg p-5 border border-green-100 mb-6">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h4 class="font-medium text-gray-900 mb-3">考试信息</h4>
                                    <div class="space-y-3">
                                        <div class="flex justify-between">
                                            <span class="text-gray-600">考试名称:</span>
                                            <span v-if="parseRes" class="font-medium" id="publishExamName">
                                                {{ parseRes.exam.name }}
                                            </span>
                                        </div>
                                        <div class="flex justify-between">
                                            <span class="text-gray-600">考试时长:</span>
                                            <span v-if="parseRes" class="font-medium" id="publishExamDuration">
                                                {{ parseRes.exam.duration }}
                                            </span>
                                        </div>
                                        <div class="flex justify-between">
                                            <span class="text-gray-600">总分值:</span>
                                            <span v-if="parseRes" class="font-medium" id="publishTotalScore">
                                                {{ parseRes.exam.totalScore }}
                                            </span>
                                        </div>
                                        <div class="flex justify-between">
                                            <span class="text-gray-600">及格分数:</span>
                                            <span v-if="parseRes" class="font-medium" id="publishPassingScore">
                                                {{ parseRes.exam.passScore }}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 class="font-medium text-gray-900 mb-3">题目统计</h4>
                                    <div class="space-y-3">
                                        <div class="flex justify-between">
                                            <span class="text-gray-600">总题数:</span>
                                            <span v-if="parseRes" class="font-medium" id="publishTotalQuestions">
                                                {{ getQuesNum("all") }}
                                            </span>
                                        </div>
                                        <div class="flex justify-between">
                                            <span class="text-gray-600">单选题:</span>
                                            <span v-if="parseRes" class="font-medium" id="publishSingleChoice">
                                                {{ getQuesNum("CHOICE") }}
                                            </span>
                                        </div>
                                        <div class="flex justify-between">
                                            <span class="text-gray-600">多选题:</span>
                                            <span v-if="parseRes" class="font-medium" id="publishMultipleChoice">
                                                {{ getQuesNum("MultipleCHOICE") }}
                                            </span>
                                        </div>
                                        <div class="flex justify-between">
                                            <span class="text-gray-600">简答题:</span>
                                            <span v-if="parseRes" class="font-medium" id="publishShortAnswer">
                                                {{ getQuesNum("QA") }}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-6 pt-6 border-t border-gray-200">
                                <h4 class="font-medium text-gray-900 mb-3">考试时间</h4>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div class="bg-gray-50 p-3 rounded-lg">
                                        <div class="text-sm text-gray-600 mb-1">开始时间</div>
                                        <div v-if="parseRes" class="font-medium" id="publishStartTime">
                                            {{ formatDate(parseRes.exam.startTime) }}
                                        </div>
                                    </div>
                                    <div class="bg-gray-50 p-3 rounded-lg">
                                        <div class="text-sm text-gray-600 mb-1">结束时间</div>
                                        <div v-if="parseRes" class="font-medium" id="publishEndTime">
                                            {{ formatDate(parseRes.exam.endTime) }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 发布设置 -->
                        <div class="bg-white rounded-lg p-5 border border-gray-200 mb-6">
                            <h4 class="font-medium text-gray-900 mb-4">发布设置</h4>
                            <div class="space-y-4">
                                <div class="flex items-center">
                                    <input type="checkbox" id="allowRandomOrder" v-model="examSaveQo.useRandomOption"
                                        class="h-4 w-4 text-blue-600 border-gray-300 rounded" checked>
                                    <label for="allowRandomOrder" class="ml-3 text-gray-700">
                                        选择题选项顺序随机（题目相同，选项顺序变化）
                                    </label>
                                </div>
                                <div class="flex items-center">
                                    <input type="checkbox" id="allowRandomQuestion"
                                        v-model="examSaveQo.useRandomQuestion"
                                        class="h-4 w-4 text-blue-600 border-gray-300 rounded">
                                    <label for="allowRandomQuestion" class="ml-3 text-gray-700">
                                        题目随机（题目不同，难易程度一致。excel中需按要求填写相应字段）
                                    </label>
                                </div>
                                <div class="flex items-center">
                                    <input type="checkbox" id="autoGrade" v-model="examSaveQo.aiAutoCheck"
                                        class="h-4 w-4 text-blue-600 border-gray-300 rounded" checked>
                                    <label for="autoGrade" class="ml-3 text-gray-700">
                                        AI自动批改
                                    </label>
                                </div>
                            </div>
                        </div>

                        <!-- 最终确认按钮 -->
                        <div class="text-center">
                            <button id="publishExamBtn" @click="publishExam()"
                                class="btn-gradient-hover inline-flex items-center px-10 py-4 rounded-lg text-white font-medium text-lg">
                                <font-awesome-icon icon="fas fa-paper-plane" class="mr-3"></font-awesome-icon>
                                确认发布考试
                            </button>
                            <p class="text-gray-500 mt-3 text-sm">发布后考试将对学生可见，请务必确认所有信息正确</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 加载遮罩 -->
        <div ref="loadingOverlay"
            class="fixed inset-0 z-30 flex items-center justify-center bg-white bg-opacity-75 hidden">
            <div class="text-center">
                <div
                    class="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent">
                </div>
                <p class="mt-4 text-gray-700" id="loadingText">正在处理文件...</p>
            </div>
        </div>

        <!-- 成功提示 -->
        <div ref="successModal"
            class="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50 hidden">
            <div class="bg-white rounded-xl p-6 max-w-md w-full mx-4">
                <div class="text-center">
                    <div class="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                        <font-awesome-icon class="text-green-500 text-2xl" icon="fas fa-check "></font-awesome-icon>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2" id="successTitle">考试发布成功</h3>
                    <p v-if="parseRes" class="text-gray-600 mb-6" id="successMessage">
                        考试"{{ parseRes.exam.name }}"已成功发布，学生现在可以参加考试。
                    </p>
                    <div class="flex space-x-3">
                        <button id="closeSuccessModal" @click="toNewExam()"
                            class="flex-1 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                            创建新考试
                        </button>
                        <button id="viewExamBtn" class="flex-1 btn-gradient-hover py-2.5 rounded-lg text-white">
                            查看考试
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- 下载模板成功提示（简化版） -->
        <div ref="downloadSuccessModal"
            class="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50 hidden">
            <div class="bg-white rounded-xl p-6 max-w-md w-full mx-4">
                <div class="text-center">
                    <div class="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                        <font-awesome-icon class=" text-green-500 text-2xl" icon="fas fa-check"></font-awesome-icon>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2" id="downloadSuccessTitle">模板下载成功</h3>
                    <p class="text-gray-600 mb-6" id="downloadSuccessMessage">考试模板已成功下载，请按照模板格式填写考试内容。</p>
                    <button id="closeDownloadSuccessModal" @click="downloadSuccessModal.classList.add('hidden')"
                        class="w-full btn-gradient-hover py-2.5 rounded-lg text-white">
                        确定
                    </button>
                </div>
            </div>
        </div>



    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from 'vue';
import router from '@/router';
import { useRoute } from 'vue-router';
import { ElMessage, UploadProps } from 'element-plus'
import { parseExcel, saveExam } from '@/apis/exam/exam'
import { formatDate } from '@/utils/dateUtil'
import QuestionView from './question/question.vue';

const route = useRoute()
const projectId = route.params.projectId

// 步骤指示器
const step1 = ref()
const step2 = ref()
const step3 = ref()

// 页面容器
const page1 = ref()
const page2 = ref()
const page3 = ref()
// 跳转到指定步骤
function goToStep(stepNumber) {
    // 更新步骤指示器
    const steps = [step1.value, step2.value, step3.value];
    const stepLabels = document.querySelectorAll('.step-indicator + .text-sm');

    steps.forEach((step, index) => {
        const stepNum = index + 1;
        const label = stepLabels[index];

        // 重置所有状态
        step.classList.remove('current', 'completed', 'pending', 'active');
        step.classList.add('pending');
        label.classList.remove('text-blue-600', 'text-green-600', 'text-gray-500');
        label.classList.add('text-gray-500');

        if (stepNum < stepNumber) {
            // 已完成步骤 - 绿色
            step.classList.remove('pending');
            step.classList.add('completed');
            label.classList.remove('text-gray-500');
            label.classList.add('text-green-600');
            step.textContent = stepNum.toString(); // 保持显示数字
        } else if (stepNum === stepNumber) {
            // 当前步骤 - 蓝色
            step.classList.remove('pending');
            step.classList.add('current');
            label.classList.remove('text-gray-500');
            label.classList.add('text-blue-600');
            step.textContent = stepNum.toString(); // 保持显示数字
        } else {
            // 未完成步骤 - 灰色
            step.classList.add('pending');
            label.classList.add('text-gray-500');
            step.textContent = stepNum.toString(); // 保持显示数字
        }
    });

    // 切换页面
    [page1.value, page2.value, page3.value].forEach((page, index) => {
        page.classList.remove('page-visible');
        page.classList.add('page-hidden');
        if (index + 1 === stepNumber) {
            setTimeout(() => {
                page.classList.remove('page-hidden');
                page.classList.add('page-visible');
            }, 10);
        }
    });
}

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
    if (rawFile.type !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        ElMessage.error('只支持.xlsx文件')
        return false
    }
    if (rawFile.size / 1024 / 1024 > 10) {
        ElMessage.error('请确认文件大小在10MB内!')
        return false
    }
    return true
}
const fileResource = ref({
    id: null,
    filename: "",
    originFilename: "",
})
const fileResourceSuccess = ref(false)

const parseRes = ref(null)
const parseQues = ref<Object>()
const parseFileErrorDialog = ref(false)
const parseFileError = ref("")
const praseFile = () => {
    if (!fileResource || !projectId) {
        console.warn("参数异常", fileResource.value, projectId)
        ElMessage.error("参数异常，无法解析")
        return
    }
    parseExcel(projectId, fileResource.value.filename).then(res => {
        if (res.state == 200) {
            parseRes.value = res.data
            parseQues.value = res.data.questions
            goToStep(2)
        } else {
            ElMessage.error("解析文件错误")
            parseFileError.value = res.message
            parseFileErrorDialog.value = true
        }
    })

}

const getQuesNum = (t: string) => {
    switch (t) {
        case "all":
            console.log(parseQues.value)
            let size = 0
            for (const key in parseQues.value) {
                if (parseQues.value.hasOwnProperty(key)) {
                    for (const item in parseQues.value[key]) {
                        // console.log(parseQues.value[key][item])
                        size += parseQues.value[key][item].randomNum
                    }

                }
            }
            return size
        case "CHOICE":
            if (parseQues.value.hasOwnProperty("CHOICE")) {
                let size = 0
                for (const item in parseQues.value["CHOICE"]) {
                    size += parseQues.value["CHOICE"][item].randomNum
                }
                return size
            }
            return "-"
        case "MultipleCHOICE":
            if (parseQues.value.hasOwnProperty("MultipleCHOICE")) {
                let size = 0
                for (const item in parseQues.value["MultipleCHOICE"]) {
                    size += parseQues.value["MultipleCHOICE"][item].randomNum
                }
                return size
            }
            return "-"
        case "QA":
            if (parseQues.value.hasOwnProperty("QA")) {
                let size = 0
                for (const item in parseQues.value["QA"]) {
                    size += parseQues.value["QA"][item].randomNum
                }
                return size
            }
            return "-"
        default: "-"
    }
}

const examSaveQo = ref({
    projectId: projectId,
    parseId: '',
    useRandomOption: true,
    useRandomQuestion: true,
    aiAutoCheck: true
})

const loadingOverlay = ref()
const successModal = ref()
const publishExam = () => {
    examSaveQo.value.parseId = parseRes.value.id
    loadingOverlay.value.classList.remove('hidden')
    saveExam(examSaveQo.value).then(res => {
        if (res.state == 200) {
            loadingOverlay.value.classList.add('hidden')
            successModal.value.classList.remove('hidden')
            init()
        }
    })
}

const toNewExam = () => {
    successModal.value.classList.add('hidden')
    goToStep(1)

}

const toExamView = () => {
    //todo
}

const toProjectDetail = () => {
    router.push({
        name: 'EMDV4ProejctDetail',
        params: {
            projectId: projectId
        }
    })
}

const removeExcelFile = () => {
    fileResource.value = null
    fileResourceSuccess.value = false
}

const handleAvatarSuccess: UploadProps['onSuccess'] = (
    response
) => {
    if (response.state == 200) {
        fileResource.value = response.data
        fileResourceSuccess.value = true
        ElMessage.success("文件上传成功")
    } else {
        ElMessage.error("文件上传失败")
    }
}

const headers = ref({
    'x-access-token': localStorage.getItem("x-access-token"),
    'x-access-type': localStorage.getItem("x-access-type")
})

const downloadSuccessModal = ref()

const DownloadTemplate = async () => {
    await downloadFile("/dev-api/exam/template", "考试信息模版.xlsx")
}

async function downloadFile(url, filename) {
    try {
        // 发起请求
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'x-access-token': localStorage.getItem("x-access-token"),
                'x-access-type': localStorage.getItem("x-access-type")
            }
        });

        // 检查请求是否成功
        if (!response.ok) {
            ElMessage.error("获取错误")
        }

        // 获取响应数据为 Blob
        const blob = await response.blob();

        // 创建一个链接元素
        const link = document.createElement('a');
        const objectUrl = URL.createObjectURL(blob);

        // 设置链接的下载属性和文件名
        link.href = objectUrl;
        link.download = filename;

        // 触发下载
        document.body.appendChild(link); // 必须将链接添加到 DOM
        link.click();

        // 清理
        document.body.removeChild(link);
        URL.revokeObjectURL(objectUrl); // 释放内存
        downloadSuccessModal.value.classList.remove('hidden')
    } catch (error) {
        console.error('Download failed:', error);
    }
}

const init = () => {
    fileResourceSuccess.value = false
    fileResource.value.id = null
    fileResource.value.filename = ''
    fileResource.value.originFilename = ''
    parseRes.value = null
    parseQues.value = null
    examSaveQo.value.parseId = ''
    examSaveQo.value.useRandomOption = true
    examSaveQo.value.useRandomQuestion = true
    examSaveQo.value.aiAutoCheck = true
}

onMounted(() => {
    init()
})


</script>
<style scoped>
.btn-gradient-hover {
    background: linear-gradient(to right, #3b82f6, #2563eb);
    transition: all 0.3s ease;
}

.btn-gradient-hover:hover {
    background: linear-gradient(to right, #2563eb, #1d4ed8);
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(37, 99, 235, 0.2);
}

.step-indicator {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.step-indicator.active {
    background-color: #3b82f6;
    color: white;
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.step-indicator.completed {
    background-color: #10b981;
    color: white;
}

.step-indicator.pending {
    background-color: #e5e7eb;
    color: #6b7280;
}


.question-card {
    transition: all 0.2s ease;
    border-left: 4px solid transparent;
}

.question-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.question-card.single-choice {
    border-left-color: #3b82f6;
}

.question-card.multiple-choice {
    border-left-color: #10b981;
}

.question-card.short-answer {
    border-left-color: #8b5cf6;
}

.difficulty-badge {
    display: inline-flex;
    align-items: center;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 500;
}

.difficulty-easy {
    background-color: #d1fae5;
    color: #065f46;
}

.difficulty-medium {
    background-color: #fef3c7;
    color: #92400e;
}

.difficulty-hard {
    background-color: #fee2e2;
    color: #991b1b;
}

.knowledge-tag {
    display: inline-flex;
    align-items: center;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 12px;
    background-color: #e0e7ff;
    color: #3730a3;
    margin-right: 4px;
    margin-bottom: 4px;
}

.page-transition {
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.page-hidden {
    opacity: 0;
    transform: translateX(20px);
    pointer-events: none;
    position: absolute;
    display: none;
}

.page-visible {
    opacity: 1;
    transform: translateX(0);
    pointer-events: all;
    position: relative;
}

.option-item {
    padding: 12px;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    margin-bottom: 8px;
    transition: all 0.2s ease;
}

.option-item:hover {
    background-color: #f9fafb;
}

.option-item.correct {
    background-color: #d1fae5;
    border-color: #10b981;
}

.preview-container {
    max-height: 70vh;
    overflow-y: auto;
    padding-right: 8px;
}

.preview-container::-webkit-scrollbar {
    width: 6px;
}

.preview-container::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
}

.preview-container::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 3px;
}

.preview-container::-webkit-scrollbar-thumb:hover {
    background: #a1a1a1;
}


.step-indicator {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

/* 当前步骤 - 修改为蓝色背景，白色文字 */
.step-indicator.current {
    background-color: #3b82f6;
    color: white;
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

/* 已完成步骤 - 修改为绿色背景，白色文字 */
.step-indicator.completed {
    background-color: #10b981;
    color: white;
}

/* 未完成步骤 - 修改为灰色背景，灰色文字 */
.step-indicator.pending {
    background-color: #e5e7eb;
    color: #6b7280;
}

.random-rule-badge {
    display: inline-flex;
    align-items: center;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 12px;
    background-color: #fce7f3;
    color: #9d174d;
    margin-left: 4px;
}
</style>