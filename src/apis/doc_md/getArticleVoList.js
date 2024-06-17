import httpInstance from "@/utils/http.ts";

export function GetArticleVoList(mdCourseId) {
    return httpInstance({
        url: '/md/vo/ar_list/' + mdCourseId,
        method: 'GET',
    })
}