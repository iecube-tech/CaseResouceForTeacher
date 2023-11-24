import httpInstance from "@/utils/http";
export function AddCourseDesign(courseId, design) {
    return httpInstance({
        url: '/design/add_course_design',
        method: 'POST',
        params: { courseId: courseId },
        data: design
    })
}