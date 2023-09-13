import httpInstance from "@/utils/http";
export function addTag(tag) {
    return httpInstance({
        url: '/tags/add_tag',
        method: 'POST',
        data: tag,
    })
}