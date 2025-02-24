
import httpInstance from "@/utils/http";
export function UpEMdCompleton(caseId, completion) {
    return httpInstance({
        url: '/emd_content/up_completion',
        method: 'POST',
        params: { id: caseId, completion: completion }
    })
}