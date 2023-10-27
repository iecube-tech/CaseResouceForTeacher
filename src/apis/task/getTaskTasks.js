import httpInstance from "@/utils/http";
export function GetProjectTasks(projectId) {
    return httpInstance({
        url: '/task/project_tasks',
        method: 'GET',
        params: { projectId: projectId }
    })
}