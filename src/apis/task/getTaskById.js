import httpInstance from "@/utils/http";

export function GetTask(id) {
    return httpInstance({
        url: '/task/task/' + id,
        method: 'GET',
    })
}