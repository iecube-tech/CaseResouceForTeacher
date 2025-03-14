import httpInstance from "@/utils/http";

export function UpLabProc(labProcQo) {
    return httpInstance({
        url: 'elaborate/md/lab/up',
        method: 'POST',
        data: labProcQo
    })
}