import httpInstance from "@/utils/http";

export function GetSectionByLabProc(labId) {
    return httpInstance({
        url: 'elaborate/md/section/' + labId,
        method: 'GET',
    })
}