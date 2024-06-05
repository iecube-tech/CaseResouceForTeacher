import httpInstance from "@/utils/http.ts";

export function GetChapter(id) {
    return httpInstance({
        url: '/md/ch/' + id,
        method: 'GET',
    })
}