// 学生端课程分析接口
import request from "@/utils/http";

export enum StudentAnalysisTypeEnum {
    STU_P_OVERVIEW = 'stu_p_overview',
    STU_P_TASK = 'stu_p_task',
    STU_P_TARGET = 'stu_p_target',
    STU_P_SUG = 'stu_p_sug'
}


// 获取学生课程分析数据
export function getStudentAnalysis(projectId, studentId, type: StudentAnalysisTypeEnum ){
    return request({
        url: `/emdv4/analysis/stu/${projectId}/${type}/${studentId}`,
        method: 'GET'
    });
}


