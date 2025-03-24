import httpInstance from "@/utils/http";

export function GetSectionVoListByLabModel(labModelId) {
    return httpInstance({
        url: 'elaborate/md/section/vo/list',
        method: 'GET',
        params: { labModelId: labModelId }
    })
}