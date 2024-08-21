import httpInstance from "@/utils/http";

export function PSTReadOver(pstId) {
    return httpInstance({
        url: '/task/md/readover/' + pstId,
        method: 'POST',
    })
}