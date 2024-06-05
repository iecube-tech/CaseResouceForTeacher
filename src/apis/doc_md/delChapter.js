import httpInstance from "@/utils/http.ts";

export function DelChapter(id) {
    return httpInstance({
        url: '/md/ch/del',
        method: 'DELETE',
        params: { id: id }
    })
}