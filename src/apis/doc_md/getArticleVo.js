import httpInstance from "@/utils/http.ts";

export function GetArticleVo(chapterId) {
    return httpInstance({
        url: '/md/vo/ar/' + chapterId,
        method: 'GET',
    })
}