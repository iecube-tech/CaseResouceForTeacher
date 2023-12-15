import httpInstance from "@/utils/http.ts";

export function getDupRateByResource(resourceId) {
    return httpInstance({
        url: '/dup/by_resource',
        method: 'GET',
        params: { resourceId: resourceId }
    })
}