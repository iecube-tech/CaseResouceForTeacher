import httpInstance from "@/utils/http";

export function GetPSTBaseList(projectId) {
    return httpInstance({
        url: '/task/psts/' + projectId,
        method: 'GET',
    })
}