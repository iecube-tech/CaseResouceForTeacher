import httpInstance from "@/utils/http.ts";

export function UpdateArticle(MDArticle) {
    return httpInstance({
        url: '/md/ar/up',
        method: 'POST',
        data: MDArticle
    })
}