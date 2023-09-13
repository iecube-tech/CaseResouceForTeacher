import httpInstance from "@/utils/http";
export function modifyTag(tag) {
    return httpInstance({
        url: '/tags/modify_tag',
        method: 'POST',
        data: tag,
    })
}