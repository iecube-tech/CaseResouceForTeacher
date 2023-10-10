import httpInstance from "@/utils/http.ts";

export function Project(projectId) {
    return httpInstance({
        url: '/project/project',
        method: 'GET',
        params: { projectId: projectId }
    })
}