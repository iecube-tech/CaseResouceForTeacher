import httpInstance from "@/utils/http";

export function UpdateBlockDetail(blockDetail) {
    return httpInstance({
        url: 'elaborate/md/block//up/detail',
        method: 'POST',
        data: blockDetail
    })
}