import httpInstance from "@/utils/http.ts";

export function getProjectTasks(projectId) {
    return httpInstance({
        url: '/task/project_tasks',
        method: 'GET',
        params: { projectId: projectId }
    })
}