import httpInstance from "@/utils/http";

export function GetComposeByBlock(blockId) {
    return httpInstance({
        url: 'elaborate/md/compose/' + blockId,
        method: 'GET',
    })
}