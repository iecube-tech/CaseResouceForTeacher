import httpInstance from "@/utils/http";

export function CreatelabProc(labProcQo) {
    return httpInstance({
        url: 'elaborate/md/lab/create',
        method: 'POST',
        data: labProcQo
    })
}