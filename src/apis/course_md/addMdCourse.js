import httpInstance from "@/utils/http";
export function AddMdCourse(Content) {
    return httpInstance({
        url: '/md_content/create',
        method: 'POST',
        data: Content
    })
}