import httpInstance from "@/utils/http";

export function UpdateUserGroup(userGroup) {
    return httpInstance({
        url: 'user/group/update',
        method: 'POST',
        data: userGroup
    })
}