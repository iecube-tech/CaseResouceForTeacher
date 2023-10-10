import httpInstance from "@/utils/http.ts";

export function majorAccount() {
    return httpInstance({
        url: '/major/account',
        method: 'GET',
    })
}