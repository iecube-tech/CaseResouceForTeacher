import httpInstance from "@/utils/http.ts";

export function DeleteProject(projectId) {
    return httpInstance({
        url: '/project/delete_project',
        method: 'GET',
        params: { projectId: projectId }
    })
}