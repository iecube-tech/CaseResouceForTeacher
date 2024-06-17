import httpInstance from "@/utils/http.ts";

export function DelNode(caseId, nodeId) {
    return httpInstance({
        url: '/map/del_node/' + caseId + "/" + nodeId,
        method: 'DELETE',
    })
}