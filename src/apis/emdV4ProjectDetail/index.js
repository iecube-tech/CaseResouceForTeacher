import request from "@/utils/http";

// 实验监控基本信息
export function emdV4MonitorInfo( projectId ){
  return request({
    url: '/emdv4/monitor/info',
    method: 'GET',
    params: { projectId }
  });
}

// 学生实验课程监控列表
export function getCourseEmdV4StudentList(params) {
  return request({
    url: '/emdv4/monitor/stu/status/paging',
    method: 'GET',
    params, // { projectId, page, pageSize }
  });
}

// 学生实验任务监控列表
export function getTaskEmdV4StudentList(projectId, ptId, page, pageSize) {
  return request({
    url: '/emdv4/monitor/pt/stu/paging',
    method: 'GET',
    params: { projectId, ptId, page, pageSize }
  });
}