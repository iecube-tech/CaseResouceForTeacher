import httpInstance from "@/utils/http";

export function AddUserGroup(userGroup) {
    return httpInstance({
        url: 'user/group/add',
        method: 'POST',
        data: userGroup
    })
}