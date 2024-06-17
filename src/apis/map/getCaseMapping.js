import httpInstance from "@/utils/http.ts";

export function GetCaseMapping(caseId) {
    return httpInstance({
        url: '/map/mapping/' + caseId,
        method: 'GET',
    })
}