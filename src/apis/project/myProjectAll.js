import httpInstance from "@/utils/http.ts";

export function MyProjectAll() {
    return httpInstance.get('/project/my_all')
}