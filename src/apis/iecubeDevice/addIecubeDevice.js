import httpInstance from "@/utils/http";
export function addIecubeDevice(iecubeDevice) {
    return httpInstance({
        url: '/iecube_device/add',
        method: 'POST',
        data: iecubeDevice
    })
}