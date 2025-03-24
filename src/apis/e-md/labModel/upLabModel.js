import httpInstance from "@/utils/http";

export function UpLabModel(labModelQo) {
    return httpInstance({
        url: '/elaborate/md/lab_model/up',
        method: 'POST',
        data: labModelQo
    })
}