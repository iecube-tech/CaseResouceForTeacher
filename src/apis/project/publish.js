import httpInstance from "@/utils/http";

export function publishProject(projectDto) {
    return httpInstance.post('/project/add', projectDto)
}

export function publishProjectV4(emdv4ProjectQo) {
    return httpInstance.post('/emdv4/project/publish', emdv4ProjectQo)
}

export function projecv4AddStudents(projectId, studentIds) {
    return httpInstance({
        url: "/emdv4/project/add/students/",
        method: "POST",
        data: { studentIds: studentIds, projectId: projectId }
    })
}