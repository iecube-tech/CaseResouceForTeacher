import httpInstance from "@/utils/http";

export function GetLabRef(labId) {
    return httpInstance({
        url: 'elaborate/md/lab/ref/' + labId,
        method: 'GET',
    })
}