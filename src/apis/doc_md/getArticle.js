import httpInstance from "@/utils/http.ts";

export function GetArticle(id) {
    return httpInstance({
        url: '/md/ar/' + id,
        method: 'GET',
    })
}