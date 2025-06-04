import httpInstance from "@/utils/http";

export function GetAllGrades() {
    return httpInstance({
        url: '/louyongle/all',
        method: 'GET',
    })
}