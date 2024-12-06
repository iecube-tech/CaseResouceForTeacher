import httpInstance from "@/utils/http";
export function GetCourseNode(caseId) {
    return httpInstance({
        url: '/map/' + caseId,
        method: 'GET'
    })
}