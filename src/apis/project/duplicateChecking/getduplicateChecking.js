import httpInstance from "@/utils/http.ts";

export function getDuplicateChecking(taskId) {
    return httpInstance({
        url: '/dup/by_task',
        method: 'GET',
        params: { taskId: taskId }
    })
}