import httpInstance from "@/utils/http";
export function getProjectLogCompare(projectId) {
    return httpInstance({
        url: '/dlog/compare/' + projectId,
        method: 'GET',
    })
}