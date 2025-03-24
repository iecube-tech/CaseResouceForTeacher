import httpInstance from "@/utils/http";

export function DelLabModel(labMOdelQo) {
    return httpInstance({
        url: '/elaborate/md/lab_model/del',
        method: 'DELETE',
        data: labMOdelQo
    })
}