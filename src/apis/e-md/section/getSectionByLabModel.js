import httpInstance from "@/utils/http";

export function GetSectionByLabModel(labModelId) {
    return httpInstance({
        url: 'elaborate/md/section/' + labModelId,
        method: 'GET',
    })
}