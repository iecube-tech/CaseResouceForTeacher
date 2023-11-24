import httpInstance from "@/utils/http";
export function DeleteCourseDesign(courseId, id) {
    return httpInstance({
        url: '/design/delete_course_design/' + courseId,
        method: 'GET',
        params: { id: id }
    })
}