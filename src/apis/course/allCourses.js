import httpInstance from "@/utils/http";
export function AllCourses() {
    return httpInstance({
        url: '/content/all_course',
        method: 'GET'
    })
}