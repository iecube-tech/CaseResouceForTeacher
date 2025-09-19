import httpInstance from "@/utils/http";

export function checkComponentScore(id: String, score: number) {
    return httpInstance({
        url: '/emdv4/component/check/score/' + id,
        method: 'POST',
        params: { score: score }
    })
}