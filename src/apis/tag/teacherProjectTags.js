import httpInstance from "@/utils/http";
export function teacherProjectTags(projectId) {
    return httpInstance({
        url: '/tags/teacher_project_tags',
        method: 'GET',
        params: { projectId: projectId }
    })
}