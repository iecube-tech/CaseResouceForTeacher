import httpInstance from "@/utils/http";
export function FreshDeviceStatus(deviceId) {
    return httpInstance({
        url: '/device/refresh_status',
        method: 'POST',
        params: { id: deviceId }
    })
}