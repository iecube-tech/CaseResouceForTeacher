import httpInstance from "@/utils/http";
export function currentProjectData(projectId) {
    return httpInstance({
        url: '/analysis/current',
        method: 'GET',
        params: { projectId: projectId }
    })
}