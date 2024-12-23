import httpInstance from "@/utils/http";
export function GetTeacherList() {
    return httpInstance({
        url: '/teacher/teacher_list',
        method: 'GET',
    })
}