import httpInstance from "@/utils/http.ts";

export function AddCourse(MDCourse) {
    return httpInstance({
        url: '/md/co/add',
        method: 'POST',
        data: MDCourse
    })
}