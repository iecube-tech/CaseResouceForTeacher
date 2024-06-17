
import httpInstance from "@/utils/http";
export function UpMdCompleton(caseId, completion) {
    return httpInstance({
        url: '/md_content/up_completion',
        method: 'POST',
        params: { id: caseId, completion: completion }
    })
}