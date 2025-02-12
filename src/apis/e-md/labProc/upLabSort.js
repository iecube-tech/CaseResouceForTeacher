import httpInstance from "@/utils/http";

export function UpLabSort(labList) {
    return httpInstance({
        url: 'elaborate/md/lab/sort',
        method: 'POST',
        data: labList
    })
}