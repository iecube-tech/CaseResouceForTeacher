import httpInstance from "@/utils/http";
export function getAllStudents() {
    return httpInstance({
        url: '/student/all',
        method: 'GET',
    })
}