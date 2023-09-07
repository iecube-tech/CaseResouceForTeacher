import httpInstance from "@/utils/http";

export function addStudent(data) {
    return httpInstance({
        url: 'student/add',
        method: 'POST',
        data: data
    })
}