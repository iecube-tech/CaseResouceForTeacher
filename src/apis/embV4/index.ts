import request from "@/utils/http";


// 专业方向相关API ******************************************
// 获取所有专业方向列表
export function getAllMajorFields() {
  return request({
    url: '/emdv4/mf/all_mf',
    method: 'GET'
  });
}



// 设备类型相关API ******************************************
// 获取所有支持的设备类型列表
export function getAllDeviceTypes() {
  return request({
    url: '/emdv4/device_type/all_device_type',
    method: 'GET'
  });
}



// 课程目标相关API ******************************************
// 根据专业方向ID查询对应的课程目标
export function getCourseTargetsByMF(MF: number) {
  return request({
    url: '/emdv4/course_target/mf_course_target',
    method: 'GET',
    params: { MF }
  });
}



// 实验指导书相关API  树形结构  ******************************************
// 获取实验指导书的所有根节点
export function getBookLabRootNodes() {
  return request({
    url: '/emdv4/book_lab/book',
    method: 'GET'
  });
}

// 根据父节点ID获取所有子节点（懒加载模式）
export function getBookLabChildren(parentId: number) {
  return request({
    url: '/emdv4/book_lab/children',
    method: 'GET',
    params: { parentId }
  });
}

// 添加实验指导书节点 ,如果请求实体的pId不为空，则创建子节点；如果pId为空，则创建新的根节点
export function addBookLabNode(bookLabCatalog: any) {
  return request({
    url: '/emdv4/book_lab/add',
    method: 'POST',
    data: bookLabCatalog
  });
}

// 更新实验指导书节点信息
export function updateBookLabNode(bookLabCatalog: any) {
  return request({
    url: '/emdv4/book_lab/update',
    method: 'POST',
    data: bookLabCatalog
  });
}

// 根据ID删除实验指导书节点
export function deleteBookLabNode(id: number) {
  return request({
    url: '/emdv4/book_lab/del',
    method: 'DELETE',
    params: { id }
  });
}




// 课程目标 相关API ******************************************
// 为指定的实验指导书添加课程目标
export function addBookTarget(bookTarget: any) {
  return request({
    url: '/emdv4/book_target/add_target',
    method: 'POST',
    data: bookTarget
  });
}

// 获取指定实验指导书的课程目标
export function getBookTarget(bookId: number) {
  return request({
    url: '/emdv4/book_target/get_target',
    method: 'GET',
    params: { bookId }
  });
}



// 实验课程监测点相关API ******************************************
// 获取指定实验课程的所有监测点
export function getBookTags(bookId: number) {
  return request({
    url: '/emdv4/book_tag/get_tag',
    method: 'GET',
    params: { bookId }
  });
}

// 向实验课程添加新的监测点
export function addBookTag(qo: any) {
  return request({
    url: '/emdv4/book_tag/add_tag',
    method: 'POST',
    data: qo
  });
}

// 更新实验课程的监测点信息
export function updateBookTag(qo: any) {
  return request({
    url: '/emdv4/book_tag/update_tag',
    method: 'POST',
    data: qo
  });
}

// 根据ID删除监测点
export function deleteBookTag(id: number) {
  return request({
    url: '/emdv4/book_tag/del_tag',
    method: 'DELETE',
    params: { id }
  });
}



// 实验模板组件相关API ******************************************
// 查询指定实验的所有模板组件
export function getLabComponentTemplates(labId: number) {
  return request({
    url: '/emdv4/lab_component_temp/lab_com_temp',
    method: 'GET',
    params: { labId }
  });
}

// 根据组件类型查询指定实验的模板组件
export function getLabComponentTemplatesByType(labId: number, type: string) {
  return request({
    url: '/emdv4/lab_component_temp/lab_com_temp',
    method: 'GET',
    params: { labId, type }
  });
}

// 为指定实验创建模板组件
export function createLabComponentTemplate(labId: number, labComponent: any) {
  return request({
    url: '/emdv4/lab_component_temp/create',
    method: 'POST',
    data: { labId, labComponent }
  });
}

// 删除指定实验的模板组件
export function deleteLabComponentTemplate(labId: number, componentId: number) {
  return request({
    url: '/emdv4/lab_component_temp/del',
    method: 'DELETE',
    params: { labId, componentId }
  });
}

// 更新指定实验的模板组件
export function updateLabComponentTemplate(labId: number, labComponent: any) {
  return request({
    url: '/emdv4/lab_component_temp/update',
    method: 'POST',
    data: { labId, labComponent }
  });
}




