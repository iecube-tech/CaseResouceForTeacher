import httpInstance from "@/utils/http";
export function AddConcept(conceptVo) {
    return httpInstance({
        url: '/points/add_concept_tem',
        method: 'POST',
        data: conceptVo,
    })
}