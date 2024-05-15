import httpInstance from "@/utils/http";
export function DelModuleFromCase(caseId, moduleId) {
    return httpInstance({
        url: '/points/case_del_module',
        method: 'DELETE',
        params: { caseId: caseId, moduleId: moduleId }
    })
}