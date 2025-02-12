import httpInstance from "@/utils/http";

export function UpBlockSort(blockList) {
    return httpInstance({
        url: 'elaborate/md/block/sort',
        method: 'POST',
        data: blockList
    })
}