import httpInstance from "@/utils/http";

export function GetLabModelByLabProc(labProcId) {
    return httpInstance({
        url: 'elaborate/md/lab_model/' + labProcId,
        method: 'GET',
    })
}