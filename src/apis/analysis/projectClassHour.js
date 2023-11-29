import httpInstance from "@/utils/http";
export function projectClassHour(projectId) {
    return httpInstance({
        url: '/analysis/project_class_hour',
        method: 'GET',
        params: { projectId: projectId }
    })
}