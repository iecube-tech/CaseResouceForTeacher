import httpInstance from "@/utils/http";

export function GroupRemoveAuth(groupId, authId) {
    return httpInstance({
        url: 'user/group/' + groupId + '/remove/auth/' + authId,
        method: 'DELETE',
    })
}