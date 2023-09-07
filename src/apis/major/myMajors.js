import httpInstance from "@/utils/http.ts";

export function Majors() {
    return httpInstance({
        url: '/major/my',
        method: 'GET',
    })
}