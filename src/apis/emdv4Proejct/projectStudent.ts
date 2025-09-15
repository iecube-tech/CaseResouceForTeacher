import httpInstance from "@/utils/http";

export function getProjectStudentList(projectId: number) {
    return httpInstance({
        url: '/emdv4/project/student_task/students',
        method: 'GET',
        params: { projectId: projectId }
    })
}