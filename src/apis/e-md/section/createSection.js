import httpInstance from "@/utils/http";

export function CreateSection(sectionalizationQo) {
    return httpInstance({
        url: '/elaborate/md/section/create',
        method: 'POST',
        data: sectionalizationQo
    })
}