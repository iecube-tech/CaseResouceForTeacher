import httpInstance from "@/utils/http.ts";

export function DelCourse(id) {
    return httpInstance({
        url: '/md/co/del',
        method: 'DELETE',
        params: { id: id }
    })
}