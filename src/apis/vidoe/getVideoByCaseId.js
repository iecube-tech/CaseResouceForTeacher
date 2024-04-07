import httpInstance from "@/utils/http";
export function GETCaseVideo(caseId) {
    return httpInstance({
        url: '/video/c/' + caseId,
        method: 'GET',
    })
}