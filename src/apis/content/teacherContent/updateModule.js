import httpInstance from "@/utils/http";
export function UpdateModule(moduleConceptVo, caseId) {
    return httpInstance({
        url: '/points/module_update',
        method: 'POST',
        params: { caseId, caseId },
        data: moduleConceptVo
    })
}