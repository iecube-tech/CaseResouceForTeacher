import httpInstance from "@/utils/http";
export function UpdateIsPrivate(contentId) {
    return httpInstance({
        url: '/content/update_private/' + contentId,
        method: 'GET',
    })
}