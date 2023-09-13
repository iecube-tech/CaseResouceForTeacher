import httpInstance from "@/utils/http";
export function deleteTag(id) {
    return httpInstance({
        url: '/tags/delete_tag',
        method: 'GET',
        params: { id: id }
    })
}