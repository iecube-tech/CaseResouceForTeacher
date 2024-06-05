import httpInstance from "@/utils/http.ts";

export function UpdateChapter(MDChapter) {
    return httpInstance({
        url: '/md/ch/up',
        method: 'POST',
        data: MDChapter
    })
}