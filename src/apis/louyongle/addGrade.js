import httpInstance from "@/utils/http";

export function AddGrades(list) {
    return httpInstance({
        url: '/louyongle/add',
        method: 'POST',
        data: list
    })
}