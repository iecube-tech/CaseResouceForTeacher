import httpInstance from "@/utils/http";
export function updateCaseModules(contentId) {
    return httpInstance({
        url: '/content/update_points/' + contentId,
        method: 'POST',
    })
}