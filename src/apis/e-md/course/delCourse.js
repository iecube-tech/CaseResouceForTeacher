import httpInstance from "@/utils/http";

export function DelCourse(CourseQo) {
    return httpInstance({
        url: '/elaborate/md/course/del',
        method: 'DELETE',
        data: CourseQo
    })
}