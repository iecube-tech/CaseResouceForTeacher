import httpInstance from "@/utils/http";

export function GroupRemoveUser(groupId, teacherId) {
    return httpInstance({
        url: 'user/group/' + groupId + '/remove/teacher/' + teacherId,
        method: 'DELETE',
    })
}