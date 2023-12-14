import httpInstance from "@/utils/http.ts";

export function genTaskDup(taskId) {
    return httpInstance({
        url: '/dup/gen',
        method: 'POST',
        params: { taskId: taskId }
    })
}