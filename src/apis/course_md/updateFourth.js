import httpInstance from "@/utils/http";
export function UpFourth(id, fourth) {
    return httpInstance({
        url: '/md_content/up_fourth/' + id,
        method: 'POST',
        params: { fourth: fourth }
    })
}