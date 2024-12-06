import httpInstance from "@/utils/http.ts";

export function AddNode(nodeQo, rootId) {
    return httpInstance({
        url: '/map/add_node/' + rootId,
        method: 'POST',
        data: nodeQo
    })
}