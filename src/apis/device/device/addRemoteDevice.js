import httpInstance from "@/utils/http";
export function AddRemoteDevice(remoteDeviceQo, pId) {
    return httpInstance({
        url: '/device/add_remote_device/' + pId,
        method: 'POST',
        data: remoteDeviceQo
    })
}