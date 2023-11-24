import httpInstance from "@/utils/http";
export function TeacherCreatedCourses() {
    return httpInstance({
        url: '/content/teacher_create_course',
        method: 'GET'
    })
}