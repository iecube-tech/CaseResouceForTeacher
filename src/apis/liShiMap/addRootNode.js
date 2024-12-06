import httpInstance from "@/utils/http.ts";

export function AddRootNode(name) {
    return httpInstance({
        url: '/map/root/add',
        method: 'POST',
        params: { name: name }
    })
}