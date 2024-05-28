import httpInstance from "@/utils/http";
export function RemoteType() {
    return httpInstance({
        url: '/device/remote_type',
        method: 'GET',
    })
}