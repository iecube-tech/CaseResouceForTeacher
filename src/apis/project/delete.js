import httpInstance from "@/utils/http.ts";

export function Delete(projectId) {
    return httpInstance({
        url: '/project/delete_project',
        method: 'GET',
        params: { projectId: projectId }
    })
}