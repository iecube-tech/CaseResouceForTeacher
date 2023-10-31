import httpInstance from "@/utils/http.ts";

export function Hidden(projectId) {
    return httpInstance({
        url: '/project/hidden_project',
        method: 'GET',
        params: { projectId: projectId }
    })
}