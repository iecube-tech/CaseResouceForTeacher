import request from "@/utils/http";

export function initGenAnalysis(projectId) {
    return request({
      url: `/emdv4/analysis/gen/${projectId}`,
      method: 'POST'
    });
}

export enum analysisTypeEnum {
  // 课程概览模块
  T_OVERVIEW_OVERVIEW = 't_overview_overview', // 教师_课程概览_概览
  T_OVERVIEW_RATE = 't_overview_rate', // 教师_课程概览_课程进度概览
  T_OVERVIEW_GA = 't_overview_ga', // 教师_课程概览_目标达成分析
  T_OVERVIEW_DOCG = 't_overview_docg', // 教师_课程概览_班级成绩分布
  T_OVERVIEW_ES = 't_overview_es', // 教师_课程概览_实验得分情况
  T_OVERVIEW_CWLS = 't_overview_cwls', // 教师_课程概览_对比上学期
  T_OVERVIEW_AI_VIEW = 't_overview_ai_view', // 教师_课程概览_AI辅助教学分析

  // 实验分析模块
  T_EA_OVERVIEW = 't_ea_overview', // 教师_实验分析_课程概览
  T_EA_ED = 't_ea_ed', // 教师_实验分析_实验详情
  T_EA_ECA = 't_ea_eca', // 教师_实验分析_实验比较分析

  // 学生分析模块
  T_STU_OVERVIEW = 't_stu_overview', // 教师_学生分析_学生总览
  T_STU_BEHAVIOUR = 't_stu_behaviour', // 教师_学生分析_学生行为分析

  // 课程目标模块
  T_CT_OAS = 't_ct_oas', // 教师_课程目标_目标达成度（objective achievement scale）
  T_CT_CR = 't_ct_cr', // 教师_课程目标_课程目标与能力标签支撑关系（corresponding relation）
  T_CT_TA = 't_ct_ta', // 教师_课程目标_课程目标分析
  T_CT_OAS_TREND = 't_ct_oas_trend', // 教师_课程目标_课程目标达成度趋势

  // 教学报告模块
  T_TR_OVERVIEW = 't_tr_overview', // 教师_教学报告_整体教学效果报告
  T_TR_IS = 't_tr_is', // 教师_教学报告_教学改进建议（Improvement suggestions）
}

export function getAnaylsis(projectId, type: analysisTypeEnum) {
    return request({
      url: `/emdv4/analysis/${projectId}/${type}`,
      method: 'GET'
    });
}

// 学生成绩从高到底排序
export function sortScore(list) {
  let score = []
  for(let i = 0; i < list.length; i++) {
    let item = list[i]
    let key = Object.keys(item)[0]
    switch (key) {
      case '90-100': score[0] = item[key];break;
      case '80-90': score[1] = item[key];break;
      case '70-80': score[2] = item[key];break;
      case '60-70': score[3] = item[key];break;
      case '<60': score[4] = item[key];break;
      default: break;
    }
  }
  return score
}

// 处理chart option 返回排序后的新 option
export function handleScoreOption(list, option) {
    let scores = sortScore(list)
    option.value.series[0].data[0].value = scores[0]
    option.value.series[0].data[1].value = scores[1]
    option.value.series[0].data[2].value = scores[2]
    option.value.series[0].data[3].value = scores[3]
    option.value.series[0].data[4].value = scores[4]
    return option.value;
}


// 教师端基于单个实验的视角接口

export enum taskAnalysisEnum {
  TASK_D_OVERVIEW = 'task_d_overview',
  TASK_D_ABILITY = 'task_d_ability',
  TASK_D_QUES = 'task_d_ques',
  TASK_D_COURSE = 'task_d_course',
  TASK_D_SUG = 'task_d_sug'
}

export function getTaskAnalysis(projectId, ptId, type: taskAnalysisEnum ){
  return request({
    url: `/emdv4/analysis/task/${projectId}/${type}/${ptId}`,
    method: 'GET',
  })
}

export function courseBaseInfo(projectId){
  return request({
    url: `/emdv4/analysis/info`,
    method: 'GET',
    params: {
      projectId: projectId,
    }
  })
}