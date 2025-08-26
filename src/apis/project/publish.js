import httpInstance from "@/utils/http";

export function publishProject(projectDto) {
    return httpInstance.post('/project/add', projectDto)
}

export function publishProjectV4( emdv4ProjectQo ){
    return httpInstance.post('/emdv4/project/publish', emdv4ProjectQo)
}