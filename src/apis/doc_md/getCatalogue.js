import httpInstance from "@/utils/http.ts";

export function getCatalogue() {
    return httpInstance({
        url: '/md/ca',
        method: 'GET',
    })
}