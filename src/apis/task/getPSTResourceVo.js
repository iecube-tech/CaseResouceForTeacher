import httpInstance from "@/utils/http";
export function GETPSTResourceVo(pstId) {
    return httpInstance({
        url: '/task/pst_report/' + pstId,
        method: 'GET',
    })
}