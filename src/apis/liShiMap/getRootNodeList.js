import httpInstance from "@/utils/http.ts";

export function GetRootNodeList() {
    return httpInstance({
        url: '/map/list',
        method: 'GET',
    })
}