import httpInstance from "@/utils/http";
export function MyCourses() {
    return httpInstance({
        url: '/content/teacher_course',
        method: 'GET'
    })
}