import httpInstance from "@/utils/http";
export function getStudents(page, pageSize) {
    return httpInstance({
        url: '/student/list',
        method: 'GET',
        params: { page: page, pageSize: pageSize }
    })
}