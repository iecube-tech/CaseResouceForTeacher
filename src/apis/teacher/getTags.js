import httpInstance from "@/utils/http";
export function getTeacherTags() {
    return httpInstance({
        url: '/teacher/tags',
        method: 'GET'
    })
}