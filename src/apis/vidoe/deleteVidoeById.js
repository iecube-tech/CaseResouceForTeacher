import httpInstance from "@/utils/http";
export function DeleteVideo(id) {
    return httpInstance({
        url: '/video/d/' + id,
        method: 'GET',
    })
}