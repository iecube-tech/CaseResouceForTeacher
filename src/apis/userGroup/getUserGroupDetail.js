import httpInstance from "@/utils/http";

export function GetUserGroupDetail(userGroupId) {
    return httpInstance({
        url: 'user/group/' + userGroupId,
        method: 'GET',
    })
}