import httpInstance from "@/utils/http";
export function GetMdCourse() {
    return httpInstance({
        url: '/md_content/md_created',
        method: 'GET',
    })
}