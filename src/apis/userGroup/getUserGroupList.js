import httpInstance from "@/utils/http";

export function GetUserGroupList() {
    return httpInstance({
        url: 'user/group/get',
        method: 'GET',
    })
}