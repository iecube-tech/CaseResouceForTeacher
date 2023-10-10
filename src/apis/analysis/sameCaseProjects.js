import httpInstance from "@/utils/http";
export function sameCaseProjectsData(projectId) {
    return httpInstance({
        url: '/analysis/case',
        method: 'GET',
        params: { projectId: projectId }
    })
}