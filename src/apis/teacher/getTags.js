import httpInstance from "@/utils/http";
export function getTeacherTags(projectId) {
    return httpInstance({
        url: '/tags/tp',
        method: 'GET',
        params: { projectId: projectId }
    })
}