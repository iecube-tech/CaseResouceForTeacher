import httpInstance from "@/utils/http.ts";

export function MyProject() {
    return httpInstance.get('/project/my')
}