import httpInstance from "@/utils/http";

export function UpComposeSort(composeList) {
    return httpInstance({
        url: 'elaborate/md/compose/sort',
        method: 'POST',
        data: composeList
    })
}