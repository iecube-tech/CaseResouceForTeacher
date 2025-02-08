import httpInstance from "@/utils/http";

export function GetLabProcByCourse(courseId) {
    return httpInstance({
        url: 'elaborate/md/lab/' + courseId,
        method: 'GET',
    })
}