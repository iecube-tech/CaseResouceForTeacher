import httpInstance from "@/utils/http";
export function GetTask(projectId, studentId) {
    return httpInstance({
        url: '/task',
        method: 'GET',
        params: { projectId: projectId, studentId: studentId }
    })
}