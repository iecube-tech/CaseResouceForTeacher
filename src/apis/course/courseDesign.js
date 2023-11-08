import httpInstance from "@/utils/http";
export function CourseDesign(courseId) {
    return httpInstance({
        url: '/design/course_design',
        method: 'GET',
        params: { courseId: courseId }
    })
}