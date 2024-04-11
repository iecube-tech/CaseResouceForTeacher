import httpInstance from "@/utils/http";
export function getLogVisualization(pstId) {
    return httpInstance({
        url: '/dlog/echarts/' + pstId,
        method: 'GET',
    })
}