import httpInstance from "@/utils/http";

export function ADDEMDLabQuestionTemplate(payloadQo) {
    return httpInstance({
        url: '/jqt/add',
        method: 'POST',
        data: payloadQo
    })
}