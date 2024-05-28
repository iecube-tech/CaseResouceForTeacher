import httpInstance from "@/utils/http";
export function AddDevice(DeviceQo) {
    return httpInstance({
        url: '/device/add_device',
        method: 'POST',
        data: DeviceQo
    })
}