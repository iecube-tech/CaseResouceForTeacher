import httpInstance from "@/utils/http";

export function UpLabModelSort(labModelList) {
    return httpInstance({
        url: '/elaborate/md/lab_model/sort',
        method: 'POST',
        data: labModelList
    })
}