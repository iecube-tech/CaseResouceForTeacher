import httpInstance from "@/utils/http";
export function UpFourthType(id, type) {
    return httpInstance({
        url: '/md_content/fourth/type/up',
        method: 'POST',
        params: { id: id, type: type }
    })
}