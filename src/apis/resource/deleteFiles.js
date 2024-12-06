import httpInstance from "@/utils/http";
export function DeleteFiles(filename) {
    return httpInstance({
        url: '/files/del/' + filename,
        method: 'DELETE',
    })
}