import httpInstance from "@/utils/http.ts";

export function AddChapter(MDChapter) {
    return httpInstance({
        url: '/md/ch/add',
        method: 'POST',
        data: MDChapter
    })
}