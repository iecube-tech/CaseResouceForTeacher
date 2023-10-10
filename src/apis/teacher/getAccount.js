import httpInstance from "@/utils/http";
export function getAccount() {
    return httpInstance({
        url: '/teacher/account',
        method: 'GET',
    })
}