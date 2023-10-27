import httpInstance from "@/utils/http";
export function contentDelete(contentId) {
    return httpInstance({
        url: '/content/delete',
        method: 'DELETE',
        params: { id: contentId }
    })
}