import httpInstance from "@/utils/http.ts";

export function AddRootNode(name, caseId) {
    return httpInstance({
        url: '/map/add_root/' + caseId,
        method: 'POST',
        params: { name: name }
    })
}