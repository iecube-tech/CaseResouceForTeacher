import httpInstance from "@/utils/http";

export function StudentGroup(taskId, studentId) {
    return httpInstance({
        url: 'pgroup/group/' + taskId + "/" + studentId,
        method: 'GET',
    })
}