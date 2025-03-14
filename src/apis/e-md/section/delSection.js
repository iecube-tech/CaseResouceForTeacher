import httpInstance from "@/utils/http";

export function DelSection(sectionalizationQo) {
    return httpInstance({
        url: '/elaborate/md/section/del',
        method: 'DELETE',
        data: sectionalizationQo
    })
}