import httpInstance from "@/utils/http";

export function parseExcel(projectId, filename) {
    return httpInstance({
        url: '/exam/parse',
        method: 'POST',
        params: { projectId: projectId, filename: filename }
    })
}

export function saveExam(qo: Object) {
    return httpInstance({
        url: '/exam/save',
        method: 'POST',
        data: qo
    })
}