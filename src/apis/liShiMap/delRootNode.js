import httpInstance from "@/utils/http.ts";

export function DelRootNode(rotoId) {
    return httpInstance({
        url: '/map/root/del/' + rotoId,
        method: 'DELETE'
    })
}