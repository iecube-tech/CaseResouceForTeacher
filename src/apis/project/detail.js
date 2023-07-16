import httpInstance from "@/utils/http.ts";

export function ProjectDetail(projectId) {
    return httpInstance({
        url: '/project/detail',
        method: 'GET',
        params: { projectId: projectId }
    })
}