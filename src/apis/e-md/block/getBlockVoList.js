import httpInstance from "@/utils/http";

export function getBlockVoList(sectionId) {
    return httpInstance({
        url: 'elaborate/md/block/vo/list',
        method: 'GET',
        params: { sectionId: sectionId }
    })
}