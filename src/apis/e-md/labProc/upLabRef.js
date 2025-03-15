import httpInstance from "@/utils/http";

export function UpLabRef(labProcRef) {
    return httpInstance({
        url: 'elaborate/md/lab/ref/update',
        method: 'POST',
        data: labProcRef
    })
}