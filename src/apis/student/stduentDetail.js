import httpInstance from "@/utils/http";
export function getStudnetDetail(studentId) {
    return httpInstance({
        url: '/student/by_id',
        method: 'GET',
        params: { studentId: studentId }
    })
}