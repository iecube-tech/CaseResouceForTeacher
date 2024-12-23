import httpInstance from "@/utils/http";

export function GetAllAuth() {
    return httpInstance({
        url: 'auth/all',
        method: 'GET',
    })
}