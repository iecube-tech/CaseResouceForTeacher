import httpInstance from "@/utils/http";

export function UpCourse(courseQo) {
    return httpInstance({
        url: '/elaborate/md/course/up',
        method: 'POST',
        data: courseQo
    })
}