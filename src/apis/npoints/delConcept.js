import httpInstance from "@/utils/http";
export function DelConcept(id) {
    return httpInstance({
        url: '/points/del_concept_tem',
        method: 'DELETE',
        params: { id: id }
    })
}   