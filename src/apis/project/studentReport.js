import httpInstance from "@/utils/http.ts";

export function downloadStudentReport(studentId, projectId) {
    return httpInstance({
        url: '/project/student_report',
        method: 'GET',
        params: { studentId: studentId, projectId: projectId },
        responseType:'blob'
    })
}