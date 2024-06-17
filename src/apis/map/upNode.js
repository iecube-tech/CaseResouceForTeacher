import httpInstance from "@/utils/http.ts";

export function UpNode(nodeQo, caseId) {
    return httpInstance({
        url: '/map/up_node/' + caseId,
        method: 'POST',
        data: nodeQo
    })
}