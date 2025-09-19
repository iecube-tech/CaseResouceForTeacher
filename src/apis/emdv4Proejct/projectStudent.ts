import httpInstance from "@/utils/http";
// PS 相关接口

/**
 * 获取project的学生 附带学生的任务列表
 * @param projectId 
 * @returns 
 */
export function getProjectStudentList(projectId: number) {
    return httpInstance({
        url: '/emdv4/project/student_task/students',
        method: 'GET',
        params: { projectId: projectId }
    })
}

/**
 * 根据 PT 的id 获取 PS 列表
 * @param projectTaskId 
 * @returns 
 */
export function getPSListByPTid(projectTaskId: number) {
    return httpInstance({
        url: '/emdv4/project/student_task/ps_by_ptid',
        method: 'GET',
        params: { projectTaskId: projectTaskId }
    })
}

