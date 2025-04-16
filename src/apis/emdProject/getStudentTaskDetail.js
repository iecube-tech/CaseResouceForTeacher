import httpInstance from "@/utils/http";

export function emdGetStuTaskDetail(studentId, taskId) {
    return httpInstance({
        url: '/emd_task/task',
        method: 'POST',
        params: {
            studentId: studentId,
            taskId: taskId
        }
    })
}