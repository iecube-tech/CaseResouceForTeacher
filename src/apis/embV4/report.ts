import request from "@/utils/http";

// 生成实验报告
export function generateStudentReport(projectId) {
  return request({
    url: `/export/report/get/${projectId}`,
    method: 'GET'
  });
}

// 重新生成
export function reGenerateReport(projectId) {
    return request({
      url: `/export/report/regen/${projectId}`,
      method: 'POST'
    });
}

// 取消报告
export function cancelGenReport(voId) {
    return request({
        url: `/export/report/cancel/${voId}`,
        method: 'POST'
    })
}

// 查看进度
export function showProgress(voId) {
    return request({
        url: `/export/report/rate/${voId}`,
        method: 'GET'
    })
}

// 生成实验成绩

export function generateStudentGrade(projectId) {
  return request({
    url: `/export/grade/get/${projectId}`,
    method: 'GET'
  });
}

// 重新生成
export function reGenerateGrade(projectId) {
    return request({
      url: `/export/grade/regen/${projectId}`,
      method: 'POST'
    });
}