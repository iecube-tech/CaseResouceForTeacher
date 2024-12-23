import httpInstance from "@/utils/http";

export function DelUserGroup(userGroupId) {
    return httpInstance({
        url: 'user/group/del',
        method: 'DELETE',
        params: { id: userGroupId }
    })
}