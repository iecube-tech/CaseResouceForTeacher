import httpInstance from "@/utils/http";
export function AddModuleToCase(caseId, moduleTempId) {
    return httpInstance({
        url: '/points/case_add_module',
        method: 'POST',
        params: { caseId: caseId, moduleTempId: moduleTempId }
    })
}