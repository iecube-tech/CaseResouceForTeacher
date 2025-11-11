import request from "@/utils/http";

// 生成学生成绩报告
export function generateStudentGradeReport(projectId) {
  return request({
    url: `/export/report/get/${projectId}`,
    method: 'GET'
  });
}

// 重新生成
export function reGenerate(projectId) {
    return request({
      url: `/export/report/regen/${projectId}`,
      method: 'POST'
    });
}

// 查看进度
export function showProgress(voId) {
    return request({
        url: `/export/report/rate/${voId}`,
        method: 'GET'
    })
}