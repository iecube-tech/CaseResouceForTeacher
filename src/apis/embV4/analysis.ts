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