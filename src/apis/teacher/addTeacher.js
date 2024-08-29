import httpInstance from "@/utils/http";
export function AddTeacher(teacher) {
    return httpInstance({
        url: '/teacher/add_teacher',
        method: 'POST',
        data: teacher,
    })
}