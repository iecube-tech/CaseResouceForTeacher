import httpInstance from "@/utils/http";
export function getProjectBriefTask(projectId) {
    return httpInstance({
        url: '/task/brief',
        method: 'GET',
        params: { projectId: projectId }
    })
}