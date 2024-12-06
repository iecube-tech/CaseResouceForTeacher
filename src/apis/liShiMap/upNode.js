import httpInstance from "@/utils/http.ts";

export function UpNode(nodeQo, rootId) {
    return httpInstance({
        url: '/map/up_node/' + rootId,
        method: 'POST',
        data: nodeQo
    })
}