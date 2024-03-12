import httpInstance from "@/utils/http.ts";

export function allIecuebDevice() {
    return httpInstance({
        url: '/iecube_device/all',
        method: 'GET',
    })
}