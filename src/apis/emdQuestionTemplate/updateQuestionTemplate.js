import httpInstance from "@/utils/http";

export function UPEMDLabQuestionTemplates(payloadQo) {
    return httpInstance({
        url: '/jqt/update',
        method: 'POST',
        data: payloadQo
    })
}