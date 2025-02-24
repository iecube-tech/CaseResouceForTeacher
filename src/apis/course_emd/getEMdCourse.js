import httpInstance from "@/utils/http";
export function GetEMdCourse() {
    return httpInstance({
        url: '/emd_content/emd_created',
        method: 'GET',
    })
}