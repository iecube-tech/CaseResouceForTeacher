import httpInstance from "@/utils/http";
export function GetCaseVideo(caseId) {
    return httpInstance({
        url: '/video/n/list/' + caseId,
        method: 'GET',
    })
}