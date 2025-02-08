import httpInstance from "@/utils/http";

export function GetBlockBySection(sectionId) {
    return httpInstance({
        url: 'elaborate/md/block/' + sectionId,
        method: 'GET',
    })
}