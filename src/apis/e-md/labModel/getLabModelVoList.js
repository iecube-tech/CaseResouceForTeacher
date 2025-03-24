import httpInstance from "@/utils/http";

export function GetLabModelVoList(labProcId) {
    return httpInstance({
        url: 'elaborate/md/lab_model/list/model_vo',
        method: 'GET',
        params: { labProcId: labProcId }
    })
}