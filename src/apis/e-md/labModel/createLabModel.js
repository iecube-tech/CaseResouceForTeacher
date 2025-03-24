import httpInstance from "@/utils/http";

export function CreateLabModel(labModelQo) {
    return httpInstance({
        url: '/elaborate/md/lab_model/create',
        method: 'POST',
        data: labModelQo
    })
}