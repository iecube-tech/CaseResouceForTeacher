import httpInstance from "@/utils/http";

export function GroupAddAuth(groupId, authList) {
    return httpInstance({
        url: 'user/group/' + groupId + '/add/auth',
        method: 'POST',
        data: authList
    })
}