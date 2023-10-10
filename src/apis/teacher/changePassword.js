import httpInstance from "@/utils/http";
export function changePassword(ChangePassword) {
    return httpInstance({
        url: '/teacher/change_password',
        method: 'POST',
        data: ChangePassword,
    })
}