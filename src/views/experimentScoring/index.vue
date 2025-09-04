<template>
  <header class="bg-white border-b border-gray-200 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center space-x-4">
          <div class="flex items-center space-x-2">
            <font-awesome-icon icon="fas fa-microchip" class="text-2xl text-indigo-600"></font-awesome-icon>
            <h1 class="text-xl font-semibold text-gray-900">实验评分系统</h1>
          </div>
          <div class="h-6 w-px bg-gray-300"></div>
          <span class="text-sm text-gray-500">教师端</span>
        </div>

        <div class="flex items-center space-x-4">
          <!-- 学生选择器 -->
          <div class="flex items-center space-x-2">
            <label class="text-sm font-medium text-gray-700">当前学生:</label>
            <el-select id="studentSelect" v-model="currentStudent.id">
              <el-option v-for="(item, k) in students" :key="k" :value="item.value" :label="item.label"></el-option>
            </el-select>
          </div>

          <!-- 操作按钮 -->
          <div class="flex items-center space-x-2">
            <button id="prevStudent"
              class="px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg smooth-transition">
              <font-awesome-icon icon="fas fa-chevron-left" class=" mr-1"></font-awesome-icon>上一个
            </button>
            <button id="nextStudent"
              class="px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg smooth-transition">
              下一个
              <font-awesome-icon icon="fas fa-chevron-right" class=" ml-1"></font-awesome-icon>
            </button>
            <button id="saveBtn" class="px-4 py-1.5 text-sm btn-primary text-white rounded-lg smooth-transition">
              <font-awesome-icon icon="fas fa-save" class="mr-1"></font-awesome-icon>保存评分
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <div class="flex gap-6">
      <!-- 主内容区域 -->
      <div class="flex-1">
        <!-- 学生信息卡片 -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6 fade-in">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4">
              <div
                class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-lg"
                id="studentAvatar">张</div>
              <div>
                <h2 class="text-xl font-semibold text-gray-900" id="studentName">{{ currentStudent.name }}</h2>
                <p class="text-sm text-gray-500" id="studentInfo">学号: {{ currentStudent.id }} | 班级: {{
                  currentStudent.gradeClass }}</p>
              </div>
            </div>
            <div class="flex items-center space-x-4">
              <div class="text-right">
                <p class="text-sm text-gray-500">提交时间</p>
                <p class="text-sm font-medium text-gray-900" id="submitTime">{{ currentStudent.submitTime }}</p>
              </div>
              <div class="text-right">
                <p class="text-sm text-gray-500">实验状态</p>
                <span
                  class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  <font-awesome-icon icon="fas fa-check-circle" class=" mr-1"></font-awesome-icon>{{
                    currentStudent.state }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Tab导航 -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <div class="flex border-b border-gray-200">

            <button v-for="(step, k) in stepInfo.steps" :key="k"
              class="flex-1 py-4 px-6 text-center font-medium tab-transition border-b-2 text-gray-500"
              :class="{ 'is-active': stepInfo.active == k, 'step': true }" @click="stepInfo.active = k">
              <font-awesome-icon :icon="step.icon" class="mr-2"></font-awesome-icon>
              <span>{{ step.label }}</span>
            </button>

          </div>
        </div>

        <!-- 阶段内容卡片 -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 fade-in">
          <div class="p-6">
            <!-- 课前预习阶段 -->
            <div v-for="(stepQuestionItem, k) in stepQuestion" :key="k">
              <div v-show="stepInfo.active == stepQuestionItem.step" id="content-preview" class="tab-content">
                <div class="space-y-4">

                  <div class="flex items-center justify-between mb-4">
                    <h3 class="text-lg font-semibold text-gray-900">{{ stepQuestionItem.label }}阶段</h3>
                    <span class="text-sm text-gray-500">
                      共 {{ stepQuestionItem.questionLength }} 题 | 总分 {{ stepQuestionItem.totalScore }} 分
                    </span>
                  </div>

                  <!-- 题目列表 -->
                  <div class="space-y-4" id="preStudyQuestions">
                    <div v-for="(question, i) in stepQuestionItem.questions" :key="i"
                     class="bg-gray-50 rounded-lg p-4 card-hover smooth-transition">
                      <choice v-if="question.type == 'CHOICE'" :i="i" :question="question"></choice>
                    </div>

                    <!-- <div class="bg-gray-50 rounded-lg p-4 card-hover smooth-transition">
                      <div class="flex items-start justify-between mb-3">
                        <h4 class="font-medium text-gray-900">第2题 (5分)</h4>
                        <span class="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">
                          单选题
                        </span>
                      </div>
                      <p class="text-gray-800 mb-3">BJT的特征频率fT是指什么？</p>
                      <div class="space-y-2 mb-3">
                        <div class="p-2 border rounded bg-red-50 border-red-200">
                          <div class="flex items-center space-x-2">
                            <i class="fas fa-user-check text-blue-500 mr-1"></i><i
                              class="fas fa-times text-red-500"></i>
                            <span class="text-sm">A. 最高工作频率</span>
                          </div>
                        </div>

                        <div class="p-2 border rounded bg-yellow-50 border-yellow-200">
                          <div class="flex items-center space-x-2">
                            <i class="fas fa-check text-green-500"></i>
                            <span class="text-sm">B. 电流增益β下降到1时的频率</span>
                          </div>
                        </div>

                        <div class="p-2 border rounded bg-white border-gray-200">
                          <div class="flex items-center space-x-2">

                            <span class="text-sm">C. 功率增益为1时的频率</span>
                          </div>
                        </div>

                        <div class="p-2 border rounded bg-white border-gray-200">
                          <div class="flex items-center space-x-2">

                            <span class="text-sm">D. 电压增益下降3dB时的频率</span>
                          </div>
                        </div>
                      </div>
                      <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-4">
                          <span class="text-sm text-gray-600">AI评分:</span>
                          <span class="text-sm font-medium text-red-600">0分</span>
                        </div>
                        <div class="flex items-center space-x-2">
                          <span class="text-sm text-gray-600">修改评分:</span>
                          <input type="number" value="0" min="0" max="5"
                            class="w-16 px-2 py-1 border border-gray-300 rounded text-sm score-input smooth-transition"
                            data-section="preStudy" data-index="1">
                          <span class="text-sm text-gray-500">/ 5分</span>
                        </div>
                      </div>
                    </div>

                    <div class="bg-gray-50 rounded-lg p-4 card-hover smooth-transition">
                      <div class="flex items-start justify-between mb-3">
                        <h4 class="font-medium text-gray-900">第3题 (5分)</h4>
                        <span class="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-800">
                          多选题
                        </span>
                      </div>
                      <p class="text-gray-800 mb-3">影响BJT特征频率的因素包括哪些？</p>
                      <div class="space-y-2 mb-3">
                        <div class="p-2 border rounded bg-green-50 border-green-200">
                          <div class="flex items-center space-x-2">
                            <i class="fas fa-user-check text-blue-500 mr-1"></i><i
                              class="fas fa-check text-green-500"></i>
                            <span class="text-sm">A. 基区宽度</span>
                          </div>
                        </div>

                        <div class="p-2 border rounded bg-green-50 border-green-200">
                          <div class="flex items-center space-x-2">
                            <i class="fas fa-user-check text-blue-500 mr-1"></i><i
                              class="fas fa-check text-green-500"></i>
                            <span class="text-sm">B. 工作电流</span>
                          </div>
                        </div>

                        <div class="p-2 border rounded bg-yellow-50 border-yellow-200">
                          <div class="flex items-center space-x-2">
                            <i class="fas fa-check text-green-500"></i>
                            <span class="text-sm">C. 温度</span>
                          </div>
                        </div>

                        <div class="p-2 border rounded bg-yellow-50 border-yellow-200">
                          <div class="flex items-center space-x-2">
                            <i class="fas fa-check text-green-500"></i>
                            <span class="text-sm">D. 集电极电压</span>
                          </div>
                        </div>
                      </div>
                      <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-4">
                          <span class="text-sm text-gray-600">AI评分:</span>
                          <span class="text-sm font-medium text-red-600">2分</span>
                        </div>
                        <div class="flex items-center space-x-2">
                          <span class="text-sm text-gray-600">修改评分:</span>
                          <input type="number" value="2" min="0" max="5"
                            class="w-16 px-2 py-1 border border-gray-300 rounded text-sm score-input smooth-transition"
                            data-section="preStudy" data-index="2">
                          <span class="text-sm text-gray-500">/ 5分</span>
                        </div>
                      </div>
                    </div>

                    <div class="bg-gray-50 rounded-lg p-4 card-hover smooth-transition">
                      <div class="flex items-start justify-between mb-3">
                        <h4 class="font-medium text-gray-900">第4题 (5分)</h4>
                        <span class="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">
                          单选题
                        </span>
                      </div>
                      <p class="text-gray-800 mb-3">测量BJT特征频率时，通常保持哪个参数恒定？</p>
                      <div class="space-y-2 mb-3">
                        <div class="p-2 border rounded bg-white border-gray-200">
                          <div class="flex items-center space-x-2">

                            <span class="text-sm">A. 基极电流</span>
                          </div>
                        </div>

                        <div class="p-2 border rounded bg-yellow-50 border-yellow-200">
                          <div class="flex items-center space-x-2">
                            <i class="fas fa-check text-green-500"></i>
                            <span class="text-sm">B. 集电极电流</span>
                          </div>
                        </div>

                        <div class="p-2 border rounded bg-red-50 border-red-200">
                          <div class="flex items-center space-x-2">
                            <i class="fas fa-user-check text-blue-500 mr-1"></i><i
                              class="fas fa-times text-red-500"></i>
                            <span class="text-sm">C. 发射极电流</span>
                          </div>
                        </div>

                        <div class="p-2 border rounded bg-white border-gray-200">
                          <div class="flex items-center space-x-2">

                            <span class="text-sm">D. 集电极电压</span>
                          </div>
                        </div>
                      </div>
                      <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-4">
                          <span class="text-sm text-gray-600">AI评分:</span>
                          <span class="text-sm font-medium text-red-600">0分</span>
                        </div>
                        <div class="flex items-center space-x-2">
                          <span class="text-sm text-gray-600">修改评分:</span>
                          <input type="number" value="0" min="0" max="5"
                            class="w-16 px-2 py-1 border border-gray-300 rounded text-sm score-input smooth-transition"
                            data-section="preStudy" data-index="3">
                          <span class="text-sm text-gray-500">/ 5分</span>
                        </div>
                      </div>
                    </div>

                    <div class="bg-gray-50 rounded-lg p-4 card-hover smooth-transition">
                      <div class="flex items-start justify-between mb-3">
                        <h4 class="font-medium text-gray-900">第5题 (5分)</h4>
                        <span class="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-800">
                          多选题
                        </span>
                      </div>
                      <p class="text-gray-800 mb-3">BJT的高频等效电路中包括哪些电容？</p>
                      <div class="space-y-2 mb-3">
                        <div class="p-2 border rounded bg-green-50 border-green-200">
                          <div class="flex items-center space-x-2">
                            <i class="fas fa-user-check text-blue-500 mr-1"></i><i
                              class="fas fa-check text-green-500"></i>
                            <span class="text-sm">A. 发射结电容Cje</span>
                          </div>
                        </div>

                        <div class="p-2 border rounded bg-green-50 border-green-200">
                          <div class="flex items-center space-x-2">
                            <i class="fas fa-user-check text-blue-500 mr-1"></i><i
                              class="fas fa-check text-green-500"></i>
                            <span class="text-sm">B. 集电结电容Cjc</span>
                          </div>
                        </div>

                        <div class="p-2 border rounded bg-green-50 border-green-200">
                          <div class="flex items-center space-x-2">
                            <i class="fas fa-user-check text-blue-500 mr-1"></i><i
                              class="fas fa-check text-green-500"></i>
                            <span class="text-sm">C. 扩散电容Cd</span>
                          </div>
                        </div>

                        <div class="p-2 border rounded bg-red-50 border-red-200">
                          <div class="flex items-center space-x-2">
                            <i class="fas fa-user-check text-blue-500 mr-1"></i><i
                              class="fas fa-times text-red-500"></i>
                            <span class="text-sm">D. 寄生电容Cp</span>
                          </div>
                        </div>
                      </div>
                      <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-4">
                          <span class="text-sm text-gray-600">AI评分:</span>
                          <span class="text-sm font-medium text-blue-600">4分</span>
                        </div>
                        <div class="flex items-center space-x-2">
                          <span class="text-sm text-gray-600">修改评分:</span>
                          <input type="number" value="4" min="0" max="5"
                            class="w-16 px-2 py-1 border border-gray-300 rounded text-sm score-input smooth-transition"
                            data-section="preStudy" data-index="4">
                          <span class="text-sm text-gray-500">/ 5分</span>
                        </div>
                      </div>
                    </div> -->
                  </div>
                </div>
              </div>
            </div>


            <!-- 实验操作阶段 -->
            <div v-show="stepInfo.active == 1" id="content-operation" class="tab-content">
              <div class="space-y-6">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="text-lg font-semibold text-gray-900">BJT特征频率测量实验</h3>
                  <span class="text-sm text-gray-500">数据记录 + 操作题目 | 总分 45 分</span>
                </div>

                <!-- 直流特性测量数据 -->
                <div class="bg-gray-50 rounded-lg p-4">
                  <h4 class="font-medium text-gray-900 mb-3">1. 直流电流放大倍数测量数据</h4>
                  <div class="overflow-x-auto">
                    <table class="min-w-full bg-white rounded-lg overflow-hidden text-sm">
                      <thead class="bg-gray-50">
                        <tr>
                          <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">测量点
                          </th>
                          <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">VCE
                            (V)</th>
                          <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">VBE
                            (V)</th>
                          <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ib
                            (μA)</th>
                          <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ic
                            (mA)</th>
                          <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">β =
                            Ic/Ib</th>
                          <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">gm
                            (mS)</th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-gray-200">
                        <tr>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900 font-medium">1</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">5.0</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">0.65</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">20.0</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">1.6</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">80</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">61.5</td>
                        </tr>
                        <tr>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900 font-medium">2</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">5.0</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">0.67</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">25.0</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">2.0</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">80</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">76.9</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="mt-3 flex items-center justify-between">
                    <span class="text-sm text-gray-600">直流特性数据记录评分:</span>
                    <div class="flex items-center space-x-2">
                      <span class="text-sm text-gray-500">AI评分:</span>
                      <input type="number" value="8" min="0" max="10"
                        class="w-16 px-2 py-1 border border-gray-300 rounded text-sm score-input smooth-transition"
                        data-section="experiment-table" data-index="0">
                      <span class="text-sm text-gray-500">/ 10分</span>
                    </div>
                  </div>
                </div>

                <!-- 频率特性测量数据 -->
                <div class="bg-gray-50 rounded-lg p-4">
                  <h4 class="font-medium text-gray-900 mb-3">2. BJT频率特性测量数据 (Ic = 2.0 mA, VCE = 5.0 V)</h4>
                  <div class="overflow-x-auto">
                    <table class="min-w-full bg-white rounded-lg overflow-hidden text-sm">
                      <thead class="bg-gray-50">
                        <tr>
                          <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">测量点
                          </th>
                          <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">频率
                            f (MHz)</th>
                          <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ib
                            (μA)</th>
                          <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            |h21e|</th>
                          <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            ∠h21e (°)</th>
                          <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            20lg|h21e| (dB)</th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-gray-200">
                        <tr>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900 font-medium">1</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">0.1</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">25.0</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">78.5</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">-2.1</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">37.9</td>
                        </tr>
                        <tr>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900 font-medium">2</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">1.0</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">25.2</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">77.8</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">-5.2</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">37.8</td>
                        </tr>
                        <tr>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900 font-medium">3</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">10</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">26.8</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">75.2</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">-12.8</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">37.5</td>
                        </tr>
                        <tr>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900 font-medium">4</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">50</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">28.5</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">68.9</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">-28.5</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">36.8</td>
                        </tr>
                        <tr>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900 font-medium">5</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">100</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">31.2</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">60.5</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">-42.3</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">35.6</td>
                        </tr>
                        <tr>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900 font-medium">6</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">200</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">34.8</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">48.2</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">-58.7</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">33.7</td>
                        </tr>
                        <tr>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900 font-medium">7</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">500</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">42.5</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">32.8</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">-72.1</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">30.3</td>
                        </tr>
                        <tr>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900 font-medium">8</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">1000</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">48.9</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">23.5</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">-82.4</td>
                          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">27.4</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="mt-3 flex items-center justify-between">
                    <span class="text-sm text-gray-600">频率特性数据记录评分:</span>
                    <div class="flex items-center space-x-2">
                      <span class="text-sm text-gray-500">AI评分:</span>
                      <input type="number" value="9" min="0" max="10"
                        class="w-16 px-2 py-1 border border-gray-300 rounded text-sm score-input smooth-transition"
                        data-section="experiment-table" data-index="1">
                      <span class="text-sm text-gray-500">/ 10分</span>
                    </div>
                  </div>
                </div>

                <!-- 分析结果 -->
                <div class="bg-blue-50 border border-blue-200 rounded p-3">
                  <div class="flex items-start space-x-2">
                    <i class="fas fa-calculator text-blue-500 mt-0.5"></i>
                    <div class="text-sm">
                      <p class="font-medium text-blue-800 mb-1">实验结果分析:</p>
                      <ul class="text-blue-700 space-y-1">
                        <li>• 直流电流放大倍数 β ≈ 80 (基本恒定)</li>
                        <li>• 截止频率 fT ≈ 850 MHz (当|h21e|下降到低频值的1/√2时)</li>
                        <li>• 跨导 gm 随集电极电流线性增加</li>
                        <li>• 频率增加时电流增益下降，相位滞后增大</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <!-- 操作题目 -->
                <div class="space-y-4" id="experimentQuestions">
                  <div class="bg-gray-50 rounded-lg p-4 card-hover smooth-transition">
                    <div class="flex items-start justify-between mb-3">
                      <h4 class="font-medium text-gray-900">第1题 (8分)</h4>
                      <span class="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">
                        单选题
                      </span>
                    </div>
                    <p class="text-gray-800 mb-3">根据测量数据，该BJT的截止频率fT大约是多少？</p>
                    <div class="space-y-2 mb-3">
                      <div class="p-2 border rounded bg-white border-gray-200">
                        <div class="flex items-center space-x-2">

                          <span class="text-sm">A. 500 MHz</span>
                        </div>
                      </div>

                      <div class="p-2 border rounded bg-green-50 border-green-200">
                        <div class="flex items-center space-x-2">
                          <i class="fas fa-user-check text-blue-500 mr-1"></i><i
                            class="fas fa-check text-green-500"></i>
                          <span class="text-sm">B. 850 MHz</span>
                        </div>
                      </div>

                      <div class="p-2 border rounded bg-white border-gray-200">
                        <div class="flex items-center space-x-2">

                          <span class="text-sm">C. 1000 MHz</span>
                        </div>
                      </div>

                      <div class="p-2 border rounded bg-white border-gray-200">
                        <div class="flex items-center space-x-2">

                          <span class="text-sm">D. 1200 MHz</span>
                        </div>
                      </div>
                    </div>
                    <div class="flex items-center justify-between">
                      <div class="flex items-center space-x-4">
                        <span class="text-sm text-gray-600">AI评分:</span>
                        <span class="text-sm font-medium text-green-600">8分</span>
                      </div>
                      <div class="flex items-center space-x-2">
                        <span class="text-sm text-gray-600">修改评分:</span>
                        <input type="number" value="8" min="0" max="8"
                          class="w-16 px-2 py-1 border border-gray-300 rounded text-sm score-input smooth-transition"
                          data-section="experiment" data-index="0">
                        <span class="text-sm text-gray-500">/ 8分</span>
                      </div>
                    </div>
                  </div>

                  <div class="bg-gray-50 rounded-lg p-4 card-hover smooth-transition">
                    <div class="flex items-start justify-between mb-3">
                      <h4 class="font-medium text-gray-900">第2题 (8分)</h4>
                      <span class="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">
                        单选题
                      </span>
                    </div>
                    <p class="text-gray-800 mb-3">从直流特性测量数据可以看出，该BJT的电流增益β约为？</p>
                    <div class="space-y-2 mb-3">
                      <div class="p-2 border rounded bg-white border-gray-200">
                        <div class="flex items-center space-x-2">

                          <span class="text-sm">A. 60</span>
                        </div>
                      </div>

                      <div class="p-2 border rounded bg-white border-gray-200">
                        <div class="flex items-center space-x-2">

                          <span class="text-sm">B. 70</span>
                        </div>
                      </div>

                      <div class="p-2 border rounded bg-yellow-50 border-yellow-200">
                        <div class="flex items-center space-x-2">
                          <i class="fas fa-check text-green-500"></i>
                          <span class="text-sm">C. 80</span>
                        </div>
                      </div>

                      <div class="p-2 border rounded bg-red-50 border-red-200">
                        <div class="flex items-center space-x-2">
                          <i class="fas fa-user-check text-blue-500 mr-1"></i><i class="fas fa-times text-red-500"></i>
                          <span class="text-sm">D. 90</span>
                        </div>
                      </div>
                    </div>
                    <div class="flex items-center justify-between">
                      <div class="flex items-center space-x-4">
                        <span class="text-sm text-gray-600">AI评分:</span>
                        <span class="text-sm font-medium text-red-600">0分</span>
                      </div>
                      <div class="flex items-center space-x-2">
                        <span class="text-sm text-gray-600">修改评分:</span>
                        <input type="number" value="0" min="0" max="8"
                          class="w-16 px-2 py-1 border border-gray-300 rounded text-sm score-input smooth-transition"
                          data-section="experiment" data-index="1">
                        <span class="text-sm text-gray-500">/ 8分</span>
                      </div>
                    </div>
                  </div>

                  <div class="bg-gray-50 rounded-lg p-4 card-hover smooth-transition">
                    <div class="flex items-start justify-between mb-3">
                      <h4 class="font-medium text-gray-900">第3题 (9分)</h4>
                      <span class="text-xs px-2 py-1 rounded-full bg-orange-100 text-orange-800">
                        主观题
                      </span>
                    </div>
                    <p class="text-gray-800 mb-3">请分析频率对BJT电流增益的影响规律，并解释产生这种现象的物理机理。</p>

                    <div class="mb-3">
                      <div class="bg-white border border-gray-200 rounded p-3">
                        <p class="text-sm text-gray-600 mb-2">学生答案:</p>
                        <p class="text-gray-800">
                          从测量数据可以看出，随着频率的增加，BJT的电流增益|h21e|逐渐下降，相位角也逐渐增大。这是因为：1）载流子在基区的渡越时间限制了高频响应；2）结电容的影响在高频时变得显著，产生容性电流；3）基区复合增加导致电流增益下降。当频率达到特征频率fT时，电流增益下降到单位增益，这是BJT高频性能的重要指标。
                        </p>
                      </div>
                    </div>

                    <div class="flex items-center justify-between">
                      <div class="flex items-center space-x-4">
                        <span class="text-sm text-gray-600">AI评分:</span>
                        <span class="text-sm font-medium text-blue-600">7分</span>
                      </div>
                      <div class="flex items-center space-x-2">
                        <span class="text-sm text-gray-600">修改评分:</span>
                        <input type="number" value="7" min="0" max="9"
                          class="w-16 px-2 py-1 border border-gray-300 rounded text-sm score-input smooth-transition"
                          data-section="experiment" data-index="2">
                        <span class="text-sm text-gray-500">/ 9分</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 课后考核阶段 -->
            <div v-show="stepInfo.active == 2" id="content-assessment" class="tab-content">
              <div class="space-y-4">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="text-lg font-semibold text-gray-900">课后考核阶段</h3>
                  <span class="text-sm text-gray-500">客观题 + 主观题 | 总分 30 分</span>
                </div>

                <div class="space-y-4" id="postTestQuestions">
                  <div class="bg-gray-50 rounded-lg p-4 card-hover smooth-transition">
                    <div class="flex items-start justify-between mb-3">
                      <h4 class="font-medium text-gray-900">第1题 (5分)</h4>
                      <span class="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">
                        单选题
                      </span>
                    </div>
                    <p class="text-gray-800 mb-3">本实验测量BJT特征频率的主要目的是什么？</p>
                    <div class="space-y-2 mb-3">
                      <div class="p-2 border rounded bg-white border-gray-200">
                        <div class="flex items-center space-x-2">

                          <span class="text-sm">A. 验证BJT的放大作用</span>
                        </div>
                      </div>

                      <div class="p-2 border rounded bg-green-50 border-green-200">
                        <div class="flex items-center space-x-2">
                          <i class="fas fa-user-check text-blue-500 mr-1"></i><i
                            class="fas fa-check text-green-500"></i>
                          <span class="text-sm">B. 了解BJT的高频特性</span>
                        </div>
                      </div>

                      <div class="p-2 border rounded bg-white border-gray-200">
                        <div class="flex items-center space-x-2">

                          <span class="text-sm">C. 测量BJT的功耗</span>
                        </div>
                      </div>

                      <div class="p-2 border rounded bg-white border-gray-200">
                        <div class="flex items-center space-x-2">

                          <span class="text-sm">D. 研究BJT的温度特性</span>
                        </div>
                      </div>
                    </div>
                    <div class="flex items-center justify-between">
                      <div class="flex items-center space-x-4">
                        <span class="text-sm text-gray-600">AI评分:</span>
                        <span class="text-sm font-medium text-green-600">5分</span>
                      </div>
                      <div class="flex items-center space-x-2">
                        <span class="text-sm text-gray-600">修改评分:</span>
                        <input type="number" value="5" min="0" max="5"
                          class="w-16 px-2 py-1 border border-gray-300 rounded text-sm score-input smooth-transition"
                          data-section="postTest" data-index="0">
                        <span class="text-sm text-gray-500">/ 5分</span>
                      </div>
                    </div>
                  </div>

                  <div class="bg-gray-50 rounded-lg p-4 card-hover smooth-transition">
                    <div class="flex items-start justify-between mb-3">
                      <h4 class="font-medium text-gray-900">第2题 (8分)</h4>
                      <span class="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-800">
                        多选题
                      </span>
                    </div>
                    <p class="text-gray-800 mb-3">实验中可能引起测量误差的因素有哪些？</p>
                    <div class="space-y-2 mb-3">
                      <div class="p-2 border rounded bg-green-50 border-green-200">
                        <div class="flex items-center space-x-2">
                          <i class="fas fa-user-check text-blue-500 mr-1"></i><i
                            class="fas fa-check text-green-500"></i>
                          <span class="text-sm">A. 仪器精度限制</span>
                        </div>
                      </div>

                      <div class="p-2 border rounded bg-green-50 border-green-200">
                        <div class="flex items-center space-x-2">
                          <i class="fas fa-user-check text-blue-500 mr-1"></i><i
                            class="fas fa-check text-green-500"></i>
                          <span class="text-sm">B. 温度变化</span>
                        </div>
                      </div>

                      <div class="p-2 border rounded bg-yellow-50 border-yellow-200">
                        <div class="flex items-center space-x-2">
                          <i class="fas fa-check text-green-500"></i>
                          <span class="text-sm">C. 寄生电容影响</span>
                        </div>
                      </div>

                      <div class="p-2 border rounded bg-red-50 border-red-200">
                        <div class="flex items-center space-x-2">
                          <i class="fas fa-user-check text-blue-500 mr-1"></i><i class="fas fa-times text-red-500"></i>
                          <span class="text-sm">D. 测试引线电感</span>
                        </div>
                      </div>
                    </div>
                    <div class="flex items-center justify-between">
                      <div class="flex items-center space-x-4">
                        <span class="text-sm text-gray-600">AI评分:</span>
                        <span class="text-sm font-medium text-red-600">3分</span>
                      </div>
                      <div class="flex items-center space-x-2">
                        <span class="text-sm text-gray-600">修改评分:</span>
                        <input type="number" value="3" min="0" max="8"
                          class="w-16 px-2 py-1 border border-gray-300 rounded text-sm score-input smooth-transition"
                          data-section="postTest" data-index="1">
                        <span class="text-sm text-gray-500">/ 8分</span>
                      </div>
                    </div>
                  </div>

                  <div class="bg-gray-50 rounded-lg p-4 card-hover smooth-transition">
                    <div class="flex items-start justify-between mb-3">
                      <h4 class="font-medium text-gray-900">第3题 (17分)</h4>
                      <span class="text-xs px-2 py-1 rounded-full bg-orange-100 text-orange-800">
                        主观题
                      </span>
                    </div>
                    <p class="text-gray-800 mb-3">请总结BJT特征频率测量实验的收获，并提出改进建议。</p>

                    <div class="mb-3">
                      <div class="bg-white border border-gray-200 rounded p-3">
                        <p class="text-sm text-gray-600 mb-2">学生答案:</p>
                        <p class="text-gray-800">
                          通过本次实验，我深入理解了BJT的高频特性和频率响应规律。掌握了使用网络分析仪测量h参数的方法，学会了如何从频率特性曲线中提取特征频率。改进建议：1）可以测量更宽的频率范围；2）增加温度变化对特征频率影响的测量。
                        </p>
                      </div>
                    </div>

                    <div class="flex items-center justify-between">
                      <div class="flex items-center space-x-4">
                        <span class="text-sm text-gray-600">AI评分:</span>
                        <span class="text-sm font-medium text-blue-600">16分</span>
                      </div>
                      <div class="flex items-center space-x-2">
                        <span class="text-sm text-gray-600">修改评分:</span>
                        <input type="number" value="16" min="0" max="17"
                          class="w-16 px-2 py-1 border border-gray-300 rounded text-sm score-input smooth-transition"
                          data-section="postTest" data-index="2">
                        <span class="text-sm text-gray-500">/ 17分</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧边栏 -->
      <div class="w-80">
        <!-- 总分概览 -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6 fade-in">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-900">评分概览</h3>
            <button id="weightSettingsBtn" @click="openScoreWeightDialog"
              class="text-sm text-gray-500 hover:text-gray-700 smooth-transition">
              <font-awesome-icon icon="fas fa-cog"></font-awesome-icon>
            </button>
          </div>

          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <span class="text-sm text-gray-600">课前预习</span>
                <span id="preStudyWeight" class="text-xs px-2 py-1 rounded-full"
                  :class="scoreWeight.config[0].weight > 0 ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'">
                  {{ scoreWeight.config[0].weight }}%</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="text-lg font-semibold text-gray-900" id="preStudyTotal">{{ studentScore[0] }}</span>
                <span class="text-sm text-gray-500">/ {{ setScore[0] }}</span>
              </div>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="progress-bar h-2 rounded-full" id="preStudyProgress"
                :style="`width: ${studentScore[0] / setScore[0] * 100}%;`"></div>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <span class="text-sm text-gray-600">实验操作</span>
                <span class="text-xs px-2 py-1 rounded-full" id="experimentWeight"
                  :class="scoreWeight.config[1].weight > 0 ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'">
                  {{ scoreWeight.config[1].weight }}%</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="text-lg font-semibold text-gray-900" id="experimentTotal">{{ studentScore[1] }}</span>
                <span class="text-sm text-gray-500">/ {{ setScore[1] }}</span>
              </div>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="progress-bar h-2 rounded-full" id="experimentProgress"
                :style="`width: ${studentScore[1] / setScore[1] * 100}%;`"></div>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <span class="text-sm text-gray-600">课后考核</span>
                <span class="text-xs px-2 py-1 rounded-full" id="postTestWeight"
                  :class="scoreWeight.config[2].weight > 0 ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'">
                  {{ scoreWeight.config[2].weight }}%</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="text-lg font-semibold text-gray-900" id="postTestTotal">{{ studentScore[2] }}</span>
                <span class="text-sm text-gray-500">/ {{ setScore[2] }}</span>
              </div>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="progress-bar h-2 rounded-full" id="postTestProgress"
                :style="`width: ${studentScore[2] / setScore[2] * 100}%;`"></div>
            </div>

            <div class="border-t pt-4">
              <div class="flex items-center justify-between">
                <span class="text-base font-medium text-gray-900">加权总分</span>
                <div class="flex items-center space-x-2">
                  <span class="text-2xl font-bold text-indigo-600" id="totalScore">
                    {{ studentWeightScore }}
                  </span>
                  <span class="text-lg text-gray-500">/
                    {{ setScore[0] + setScore[1] + setScore[2] }}
                  </span>
                </div>
              </div>
              <div class="mt-2 flex items-center justify-between">
                <span :class="gradeLevelClass" id="gradeLevel">{{ gradeLevel }}</span>
                <span class="text-xs text-gray-500">
                  基于权重计算
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- 评分历史 -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 fade-in">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">评分记录</h3>

          <div class="space-y-3">
            <div class="flex items-center justify-between text-sm">
              <span class="text-gray-600">AI初版评分</span>
              <span class="font-medium text-gray-900">{{ aiScoreInfo.createTime }}</span>
            </div>
            <div class="flex items-center justify-between text-sm">
              <span class="text-gray-600">教师是否确认</span>
              <span class="font-medium " :class="aiScoreInfo.isConfirm ? 'text-green-600' : 'text-orange-600'"
                id="confirmationStatus">{{ aiScoreInfo.isConfirm ? '已确认' : '未确认' }}</span>
            </div>
          </div>

          <div class="mt-4 pt-4 border-t">
            <div class="flex items-center space-x-2 text-sm text-gray-600">
              <font-awesome-icon icon="fas fa-info-circle"></font-awesome-icon>
              <span>修改后请及时保存评分</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <el-dialog title="权重设置" v-model="scoreWeight.visible" width="500px">
    <template v-for="(weightItem, name, k) in scoreWeight.config">
      <div>
        <span>{{ weightItem.label }}权重</span>
      </div>
      <div class="w-full flex items-center justify-between space-x-4">
        <el-slider v-model="weightItem.weight" />
        <div class="w-[50px]">{{ weightItem.weight }} %</div>
      </div>
    </template>
    <template #footer>
      <el-button @click="scoreWeight.visible = false">取消</el-button>
      <el-button type="primary" @click="handleSaveConfig">确定</el-button>
    </template>
  </el-dialog>

</template>

<script setup>

import choice from './components/choice.vue'

import {getTypeLabel} from './components/tools'

const currentStudentId = ref('')

const currentStudent = ref({
  id: ' 2023001',
  name: '张三',
  gradeClass: '电子信息2023-1班',
  submitTime: '2024-03-15 14:30',
  state: '已完成',
})


const students = ref([])

const initStudents = () => {
  students.value = [
    { value: 2023001, label: '张三 2023001' },
    { value: 2, label: '李四 2023002' },
    { value: 3, label: '王五 2023003' },
    { value: 4, label: '赵六 2023004' },
  ]
}

const scoreWeight = ref({
  visible: false,
  config: {
    '0': { label: '课前预习', weight: 0, step: 0 },
    '1': { label: '实验操作', weight: 0, step: 1 },
    '2': { label: '课后考核', weight: 0, step: 2 },
  },
})

const handleSaveConfig = () => {
  updateTotalScores()
  scoreWeight.value.visible = false
}

const setScore = ref({
  '0': 25,
  '1': 25,
  '2': 50,
})

const studentScore = ref({
  '0': 25,
  '1': 25,
  '2': 50,
})

const studentWeightScore = ref(0)
const gradeLevel = ref('')
const gradeLevelClass = ref('')

// 更新总分 - 使用权重计算
function updateTotalScores() {
  let student_0_score = studentScore.value[0] || 0;
  let student_1_score = studentScore.value[1] || 0;
  let student_2_score = studentScore.value[2] || 0;

  let lab_0_total_score = setScore.value[0] || 0;
  let lab_1_total_score = setScore.value[1] || 0;
  let lab_2_total_score = setScore.value[2] || 0;

  let weight_0 = scoreWeight.value.config[0].weight;
  let weight_1 = scoreWeight.value.config[1].weight;
  let weight_2 = scoreWeight.value.config[2].weight;

  // 计算加权总分
  const weight_0_score = (student_0_score / student_0_score) * weight_0;
  const weight_1_score = (student_1_score / student_1_score) * weight_1;
  const weight_2_score = (student_2_score / student_2_score) * weight_2;

  studentWeightScore.value = Math.round(weight_0_score + weight_1_score + weight_2_score);


  console.log('----------------->')
  console.log(student_0_score / student_0_score)
  console.log(student_1_score / student_1_score)
  console.log(student_2_score / student_2_score)
  console.log(studentWeightScore.value)

  // 更新等级
  updateGradeLevel(studentWeightScore.value);
}

updateTotalScores();


// 获取等级
function updateGradeLevel(score) {
  let level = '不及格';
  let className = 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800';
  if (score >= 90) {
    level = '优秀';
    className = 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800';
  } else if (score >= 80) {
    level = '良好';
    className = 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800';
  } else if (score >= 70) {
    level = '中等';
    className = 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800';
  } else if (score >= 60) {
    level = '及格';
    className = 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800';
  } else {
    level = '不及格';
    className = 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800';
  }
  gradeLevel.value = level;
  gradeLevelClass.value = className;
}


// ai score info
const aiScoreInfo = ref({
  createTime: '2024-03-15 15:00',
  isConfirm: false,
})


// left panel

const stepInfo = ref({
  active: 0,
  steps: [
    { label: '课前预习', icon: 'fas fa-book-open', index: 0 },
    { label: '实验操作', icon: 'fas fa-cogs', index: 1 },
    { label: '课后考核', icon: 'fas fa-clipboard-check', index: 2 },
  ]
})


import { beforeTestData } from './components/testData'

const stepQuestion = ref([])

const getTotalScore = (list) => {
  let totalScore = 0
  list.forEach(item => {
    totalScore += item.score
  })
  return totalScore
}

stepQuestion.value[0] = {
  label: '课前预习',
  step: 0,
  questions: beforeTestData,
  questionLength: beforeTestData.length,
  totalScore: getTotalScore(beforeTestData)
}

console.log(stepQuestion.value)

const openScoreWeightDialog = () => {
  scoreWeight.value.visible = true
}

onMounted(() => {
  initStudents()
})

</script>


<style>
:root {
  font-size: 16px;
}
</style>

<style lang="scss" scoped>
.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.progress-bar {
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
}

.step.is-active {
  @apply border-blue-600 text-blue-600;
}

.tab-transition {
  transition: all 0.3s ease;
}
</style>
