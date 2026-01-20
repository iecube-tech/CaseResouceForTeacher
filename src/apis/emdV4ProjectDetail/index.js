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
export function getTaskEmdV4StudentList(params) {
  return request({
    url: '/emdv4/monitor/pt/stu/status/paging',
    method: 'GET',
    params,
    // params: { projectId, ptId, page, pageSize }
  });
}


// 学生实验详情
export function getEmdV4StudentDetail(projectId, psId){
  return request({
    url: '/emdv4/monitor/ps',
    method: 'GET',
    params: { projectId, psId }
  })
}

export function getKeyWordsStudentList(params){ // {projectId, ptId, page, pageSize, keyword  }
  return request({
    url: '/emdv4/monitor/stu/search',
    method: 'GET',
    params,
  })
}