import httpInstance from "@/utils/http";

export function GetAllCourse() {
    return httpInstance({
        url: '/elaborate/md/course/all',
        method: 'GET',
    })
}