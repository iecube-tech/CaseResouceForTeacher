import httpInstance from "@/utils/http";

export function GetEMdV4Course() {
    return httpInstance({
        url: '/emdv4_course/emd_created',
        method: 'GET',
    })
}

export function AddEMdV4Course(Content) {
    return httpInstance({
        url: '/emdv4_course/create',
        method: 'POST',
        data: Content
    })
}