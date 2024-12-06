import httpInstance from "@/utils/http.ts";

export function DelNode(nodeId, rootId) {
    return httpInstance({
        url: '/map/del_node/' + rootId + '/' + nodeId,
        method: 'DELETE'
    })
}