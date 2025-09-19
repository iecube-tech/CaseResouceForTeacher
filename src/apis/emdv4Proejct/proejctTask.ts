import httpInstance from "@/utils/http";
// PT相关接口

/**
 * 根据id 获取 PT
 * @param projectTaskId 
 * @returns 
 */
export function getPTbyPTId(projectTaskId: number) {
    return httpInstance({
        url: '/emdv4/project/detail/pt_by_id',
        method: 'GET',
        params: { projectTaskId: projectTaskId }
    })
}