import httpInstance from "@/utils/http";

export function GroupAddUser(groupId, userList) {
    return httpInstance({
        url: 'user/group/' + groupId + '/add/teacher',
        method: 'POST',
        data: userList
    })
}