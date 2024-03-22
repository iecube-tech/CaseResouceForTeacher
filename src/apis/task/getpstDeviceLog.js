import httpInstance from "@/utils/http";
export function GETPSTDeviceLog(pstId) {
    return httpInstance({
        url: '/dlog/logs/' + pstId,
        method: 'GET',
    })
}