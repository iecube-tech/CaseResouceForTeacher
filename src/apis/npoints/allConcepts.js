import httpInstance from "@/utils/http";
export function AllConcepts() {
    return httpInstance({
        url: '/points/all_concept_tem',
        method: 'GET',
    })
}   