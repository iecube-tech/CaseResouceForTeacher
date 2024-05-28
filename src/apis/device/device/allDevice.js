import httpInstance from "@/utils/http";
export function AllDevice() {
    return httpInstance({
        url: '/device/all',
        method: 'GET',
    })
}