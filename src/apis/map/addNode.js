import httpInstance from "@/utils/http.ts";

export function AddNode(nodeQo, caseId) {
    return httpInstance({
        url: '/map/add_node/' + caseId,
        method: 'POST',
        data: nodeQo
    })
}