import httpInstance from "@/utils/http";

export function publishProject(projectDto) {
    return httpInstance.post('/project/add', projectDto)
}

export function publishProjectV4(emdv4ProjectQo) {
    return httpInstance({
        url: '/emdv4/project/publish',
        method: 'POST',
        data: emdv4ProjectQo,
        timeout: 0,
    })
}

export function projecv4AddStudents(projectId, studentIds) {
    return httpInstance({
        url: "/emdv4/project/add/students/",
        method: "POST",
        data: { studentIds: studentIds, projectId: projectId }
    })
}