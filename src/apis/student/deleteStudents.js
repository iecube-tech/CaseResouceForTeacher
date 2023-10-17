import httpInstance from "@/utils/http";
export function Deletestudents(data) {
    return httpInstance({
        url: '/student/delete',
        method: 'POST',
        data: data,
    })
}