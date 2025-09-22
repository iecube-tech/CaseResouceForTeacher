import httpInstance from "@/utils/http";
// PST 相关接口

/** 
 * 根据id获取PST
*/
export function getPSTById(pstId: number) {
    return httpInstance({
        url: '/emdv4/task/detail/pst_by_id',
        method: 'GET',
        params: { pstId: pstId }
    })
}

/**
 * 根据 PS的id 和 PT 的num 获取 PST 
 * @param projectStudentId 
 * @param projectTaskNum 
 * @returns 
 */
export function getPSTByPS_idAndPT_num(projectStudentId: number, projectTaskNum: number) {
    return httpInstance({
        url: '/emdv4/task/detail/pst_by_psid_ptnum',
        method: 'GET',
        params: { projectStudentId: projectStudentId, projectTaskNum: projectTaskNum }
    })
}

/**
 * 保存PST的评分
 * @param pstId 
 * @param score 
 * @returns 
 */
export function saveCheckResult(pstId: number, score: number) {
    return httpInstance({
        url: '/emdv4/task/detail/checked/score/' + pstId,
        method: 'POST',
        params: { score: score }
    })
}

export function setWeighting(weightingQo: any) {
    return httpInstance({
        url: '/emdv4/task/detail/checked/score/weighting',
        method: "POST",
        data: weightingQo
    })
}