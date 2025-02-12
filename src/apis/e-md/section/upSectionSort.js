import httpInstance from "@/utils/http";

export function UpSectionSort(sectionList) {
    return httpInstance({
        url: 'elaborate/md/section/sort',
        method: 'POST',
        data: sectionList
    })
}