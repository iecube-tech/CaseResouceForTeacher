import httpInstance from "@/utils/http.ts";

export function downloadProjectReport(projectId) {
    return httpInstance({
        url: '/project/project_report',
        method: 'GET',
        params: { projectId: projectId },
        responseType: 'blob'
    })
}