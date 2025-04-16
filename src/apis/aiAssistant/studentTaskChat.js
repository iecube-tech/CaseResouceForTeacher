import httpInstance from "@/utils/http";

export function GetStudentTaskChat(studentId, taskId) {
    return httpInstance({
        url: '/ai/st/chat',
        method: 'GET',
        params: { studentId: studentId, taskId: taskId }
    })
}