import httpInstance from "@/utils/http";

export function GetSectionVoListByLab(labId) {
    return httpInstance({
        url: 'elaborate/md/section/vo/list',
        method: 'GET',
        params: { labProcId: labId }
    })
}