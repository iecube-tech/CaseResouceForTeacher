import httpInstance from "@/utils/http";
export function DelRemoteDevice(id) {
    return httpInstance({
        url: '/device/del_remote_device',
        method: 'POST',
        params: { deviceId: id }
    })
}