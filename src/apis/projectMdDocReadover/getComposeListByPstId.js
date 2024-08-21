import httpInstance from "@/utils/http";

export function GetComposeListByPstId(pstId) {
    return httpInstance({
        url: '/s/article/compose/composes/' + pstId,
        method: 'GET',
    })
}