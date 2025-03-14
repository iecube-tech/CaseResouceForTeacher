import httpInstance from "@/utils/http";

export function CreateCourse(courseQo) {
    return httpInstance({
        url: '/elaborate/md/course/add',
        method: 'POST',
        data: courseQo
    })
}