import httpInstance from "@/utils/http";

export function GETEMDLabQuestionTemplates(labId) {
    return httpInstance({
        url: '/jqt/' + labId,
        method: 'GET',
    })
}