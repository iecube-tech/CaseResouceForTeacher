import httpInstance from "@/utils/http.ts";

export function GetMapVo(rootId) {
    return httpInstance({
        url: '/map/mapping/root/' + rootId,
        method: 'GET',
    })
}