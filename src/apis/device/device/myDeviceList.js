import httpInstance from "@/utils/http";
export function MyDevices() {
    return httpInstance({
        url: '/device/my',
        method: 'GET',
    })
}