import httpInstance from "@/utils/http.ts";

export function GetChapterListByCourseId(id) {
    return httpInstance({
        url: '/md/ch/list/' + id,
        method: 'GET',
    })
}