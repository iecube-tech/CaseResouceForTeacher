import httpInstance from "@/utils/http";
export function AddConcept(conceptVo) {
    return httpInstance({
        url: '/points/add_concept',
        method: 'POST',
        data: conceptVo,
    })
}