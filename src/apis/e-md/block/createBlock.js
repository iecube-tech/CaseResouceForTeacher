import httpInstance from "@/utils/http";

export function CreateBlock(blockQo) {
    return httpInstance({
        url: 'elaborate/md/block/create',
        method: 'POST',
        data: blockQo
    })
}