import httpInstance from "@/utils/http";
export function ConnectCaseNode(caseId, nodeId) {
    return httpInstance({
        url: '/map/mapping/case',
        method: 'POST',
        params: { caseId: caseId, nodeId: nodeId }
    })
}