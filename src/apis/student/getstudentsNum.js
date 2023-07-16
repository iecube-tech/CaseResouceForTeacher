import httpInstance from "@/utils/http";
export function getSNum() {
    return httpInstance({
        url: '/student/num',
        method: 'GET',
    })
}