import httpInstance from "@/utils/http";

export function GetBlockDetail(blockId) {
    return httpInstance({
        url: 'elaborate/md/block/detail',
        method: 'GET',
        params: { blockId: blockId }
    })
}