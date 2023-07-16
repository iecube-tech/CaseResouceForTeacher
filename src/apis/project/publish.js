import httpInstance from "@/utils/http";

export function publishProject(projectDto) {
    return httpInstance.post('/project/add', projectDto)
}