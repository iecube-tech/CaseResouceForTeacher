import httpInstance from "@/utils/http";
export function AddEMdCourse(Content) {
    return httpInstance({
        url: '/emd_content/create',
        method: 'POST',
        data: Content
    })
}