import httpInstance from "@/utils/http";
export function AddModuleConcept(moduleConceptVo) {
    return httpInstance({
        url: '/points/add_module_tem',
        method: 'POST',
        data: moduleConceptVo,
    })
}